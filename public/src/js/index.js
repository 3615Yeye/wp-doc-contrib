import 'winbox'
import '../css/reset.scss'
import '../css/main.scss'

class WpDocContrib {
  constructor() {
    this.posts = []
    this.config = {
      title: "Documentation",
      background: '#2271b1',
      x: 'bottom',
      y: 'right',
      root: document.documentElement,
      index: 9999,
      onclose: () => {
        this.state.open = false
        this.state.pinned = false
        this.saveState()
      },
      onmove: (x,y) => {
        this.state.lastPosition.x = x
        this.state.lastPosition.y = y
        this.saveState()
      },
      onresize: (width, height) => {
        this.state.lastPosition.width = width
        this.state.lastPosition.height = height
        this.saveState()
      },
    }
    this.state = {
      open: false,
      pinned: false,
      lastPosition: {},
      activePostId: false,
      scrollTop: false,
    }
    this.scrollTimeout = false

    this.getDocumentation()

    this.loadPreviousState()
    this.wpadminbar = document.querySelector('#wpadminbar')

    this.event()
    this.accordions()
  }

  getDocumentation() {
    // Charge la documentation sauvegardée si disponible
    if (this.storageAvailable('localStorage')) {
      const posts = localStorage.getItem('wp-doc-contrib-posts');
      if (posts) this.posts = JSON.parse(posts)
      this.render()
    }

    // Local Storage

    //
    fetch(`${wpDocContrib.ajax_url}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `action=wp_doc_list&security=${wpDocContrib.nonce}`
    })
      .then(res => res.json())
      .then(res => {
        this.posts = res.data
        localStorage.setItem('wp-doc-contrib-posts', JSON.stringify(this.posts));

        this.render()
      })
  }

  render() {
    let html = `<div class="accordion">`
    this.posts.forEach(post => {
      html += `<div id="post-${post.ID}" class="a-container">
                  <p class="a-btn">
                    ${post.post_title}
                    <a class="edit" href="/wp-admin/post.php?post=${post.ID}&action=edit" target="_blank"></a>
                  </p>
                  <div class="a-panel">${post.post_content}</div>
                </div>`
    })
    html += `</div>`

    this.setContent(html)
  }

  storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }

  setContent(content) {
    this.config.html = content
  }

  show() {
    if (this.state.lastPosition.x) {
      this.config.x = this.state.lastPosition.x
      this.config.y = this.state.lastPosition.y
      this.config.width = this.state.lastPosition.width
      this.config.height = this.state.lastPosition.heigh
    }

    this.winbox = WinBox.new(this.config)

    this.winbox.addClass('wdc')
    this.state.open = true
    if (this.wpadminbar) {
      this.winbox.top = wpadminbar.offsetHeight
      this.winbox.bottom = 0
    }
    this.openPreviousPost()

    this.wbBody = document.querySelector('.winbox .wb-body')
    if (this.state.scrollTop && this.wbBody) this.wbBody.scrollTop = this.state.scrollTop

    if (this.wbBody) {
      this.wbBody.addEventListener('scroll', e => {
        if (this.scrollTimeout) clearTimeout(this.scrollTimeout)

        this.scrollTimeout = window.setTimeout(() => {
          this.state.scrollTop = e.target.scrollTop ? e.target.scrollTop : false
          this.saveState()
        }, 300)
      })
    }

    this.addPinnedButton()
    this.saveState()
  }

  close() {
    this.winbox.close()
  }

  event() {
    const button = document.querySelector('#wp-admin-bar-wp-doc-contrib-toggle')
    if (!button) return

    button.addEventListener('click', (e) => {
      e.preventDefault()

      if (!this.state.open || !this.winbox) {
        this.show()
      } else {
        this.close()
      }
    })

    document.addEventListener('click', (e) => {
      if (!e.target.matches('.winbox .wb-pinned')) return

      this.state.pinned = !this.state.pinned
      this.saveState()

      const button = document.querySelector('.winbox .wb-pinned')
      if (this.state.pinned) button.classList.add('active')
      else button.classList.remove('active')
    })
  }

  saveState() {
    if (!this.storageAvailable('localStorage')) return

    localStorage.setItem('wp-doc-contrib-state', JSON.stringify(this.state));
  }

  loadPreviousState() {
    if (!this.storageAvailable('localStorage')) return

    const rawState = localStorage.getItem('wp-doc-contrib-state');
    if (!rawState) return

    this.state = {
      ...this.state,
      ...JSON.parse(rawState)
    }

    if (this.state.pinned) this.show()

    this.openPreviousPost()
  }

  openPreviousPost() {
    if (this.state.activePostId) {
      const activeItem = document.querySelector(`.winbox #${this.state.activePostId}`)
      if (activeItem) activeItem.classList.add('active')
    }
  }

  storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }

  addPinnedButton() {
    const wbMin = document.querySelector('.winbox .wb-header .wb-min')
    if (!wbMin) return

    const button = document.createElement('span')
    button.classList.add('wb-pinned')
    if (this.state.pinned) button.classList.add('active')
    wbMin.after(button)
  }

  accordions() {
    const elem = '.accordion',
      option = true

    document.addEventListener('click', (e) => {
      //check is the right element clicked
      if (!e.target.matches(elem+' .a-btn')) return;
      else{
        //check if element contains active class
        if(!e.target.parentElement.classList.contains('active')){
          if(option==true){
            //if option true remove active class from all other accordions
            var elementList = document.querySelectorAll(elem +' .a-container');
            Array.prototype.forEach.call(elementList, function (e) {
              e.classList.remove('active');
            });
          }
          //add active class on cliked accordion
          e.target.parentElement.classList.add('active');
          this.state.activePostId = e.target.parentElement.id
          this.saveState()
        }else{
          //remove active class on cliked accordion
          e.target.parentElement.classList.remove('active');
          this.state.activePostId = false
          this.saveState()
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", ()=> { new WpDocContrib })

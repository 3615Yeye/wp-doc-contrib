(() => {
  // node_modules/winbox/dist/winbox.bundle.js
  (function() {
    "use strict";
    var g, k = document.createElement("style");
    k.innerHTML = "@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.no-move:not(.min) .wb-title,.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title,body.wb-drag iframe{pointer-events:none}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none;min-height:35px}.wb-header,.wb-icon{height:35px}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-body{top:35px}.wb-header,.winbox iframe{position:absolute;width:100%}.wb-header{left:0;top:0;color:#fff;overflow:hidden;z-index:1}.wb-body{position:absolute;left:0;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}.wb-title{line-height:35px;font-family:Arial,sans-serif;font-size:14px;padding-left:10px;cursor:move;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n{top:-5px;right:0;cursor:n-resize}.wb-e{position:absolute;top:0;right:-5px;bottom:0;width:10px;cursor:w-resize}.wb-s,.wb-se,.wb-sw{bottom:-5px}.wb-s{right:0;cursor:n-resize}.wb-w{position:absolute;top:0;left:-5px;bottom:0;width:10px;cursor:w-resize}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-sw{left:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize}.wb-icon{float:right;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-title,.winbox.min .wb-title{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 11px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.hide{visibility:hidden}.max{box-shadow:none}.max .wb-body{margin:0!important}.winbox iframe{height:100%;border:0}.no-animation,body.wb-drag .winbox{transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}";
    var l = document.getElementsByTagName("head")[0];
    l.firstChild ? l.insertBefore(k, l.firstChild) : l.appendChild(k);
    var m = document.createElement("div");
    m.innerHTML = "<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
    function n(a, b, c, e) {
      a.addEventListener(b, c, e || e === false ? e : true);
    }
    function r(a) {
      a.stopPropagation();
      a.cancelable && a.preventDefault();
    }
    function w(a, b, c) {
      c = "" + c;
      a["_s_" + b] !== c && (a.style.setProperty(b, c), a["_s_" + b] = c);
    }
    ;
    var y = [], z, C = 0, D = 0, E, F, G, K, O, Q, R;
    function T(a, b) {
      if (!(this instanceof T))
        return new T(a);
      E || aa();
      var c, e;
      if (a) {
        if (b) {
          var d = a;
          a = b;
        }
        if (typeof a === "string")
          d = a;
        else {
          if (e = a.modal)
            var h = c = "center";
          var p = a.id;
          var t = a.root;
          var H = a.template;
          d = d || a.title;
          var f = a.mount;
          var q = a.html;
          var x = a.url;
          var u = a.width;
          var v = a.height;
          var A = a.minwidth;
          var B = a.minheight;
          h = a.x || h;
          c = a.y || c;
          var L = a.max;
          var ba = a.hidden;
          var I = a.top;
          var J = a.left;
          var M = a.bottom;
          var N = a.right;
          E = a.index || E;
          var ca = a.onclose;
          var da = a.onfocus;
          var ea = a.onblur;
          var fa = a.onmove;
          var ha = a.onresize;
          var X = a.background;
          var S = a.border;
          var P = a["class"];
          var ia = a.splitscreen;
        }
      }
      this.g = H ? H : m.cloneNode(true);
      this.body = this.g.getElementsByClassName("wb-body")[0];
      X && this.setBackground(X);
      S && w(this.body, "margin", S + (isNaN(S) ? "" : "px"));
      this.setTitle(d || "");
      a = Q;
      b = R;
      I = I ? U(I, b) : 0;
      M = M ? U(M, b) : 0;
      J = J ? U(J, a) : 0;
      N = N ? U(N, a) : 0;
      a -= J + N;
      b -= I + M;
      u = u ? U(u, a) : a / 2 | 0;
      v = v ? U(v, b) : b / 2 | 0;
      A = A ? U(A, a) : 0;
      B = B ? U(B, b) : 0;
      h = h ? U(h, a, u) : J;
      c = c ? U(c, b, v) : I;
      E = E || 10;
      this.g.id = this.id = p || "winbox-" + ++C;
      this.g.className = "winbox" + (P ? " " + (typeof P === "string" ? P : P.join(" ")) : "") + (e ? " modal" : "");
      this.x = h;
      this.y = c;
      this.width = u;
      this.height = v;
      this.j = A;
      this.i = B;
      this.top = I;
      this.right = N;
      this.bottom = M;
      this.left = J;
      this.max = this.min = false;
      this.onclose = ca;
      this.onfocus = da;
      this.onblur = ea;
      this.onmove = fa;
      this.onresize = ha;
      this.l = ia;
      L ? this.maximize() : this.move().resize();
      f ? this.mount(f) : q ? this.body.innerHTML = q : x && this.setUrl(x);
      ba ? this.hide() : this.focus();
      this.g.winbox = this;
      ja(this);
      (t || z).appendChild(this.g);
    }
    T["new"] = function(a) {
      return new T(a);
    };
    function U(a, b, c) {
      typeof a === "string" && (a === "center" ? a = (b - c) / 2 | 0 : a === "right" || a === "bottom" ? a = b - c : (c = parseFloat(a), a = ("" + c !== a && a.substring(("" + c).length)) === "%" ? b / 100 * c | 0 : c));
      return a;
    }
    function aa() {
      z = document.body;
      z[K = "requestFullscreen"] || z[K = "msRequestFullscreen"] || z[K = "webkitRequestFullscreen"] || z[K = "mozRequestFullscreen"] || (K = "");
      O = K && K.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
      n(window, "resize", function() {
        Q = z.clientWidth;
        R = z.clientHeight;
        V();
      });
      Q = z.clientWidth;
      R = z.clientHeight;
    }
    function ja(a) {
      W(a, "title");
      W(a, "n");
      W(a, "s");
      W(a, "w");
      W(a, "e");
      W(a, "nw");
      W(a, "ne");
      W(a, "se");
      W(a, "sw");
      n(a.g.getElementsByClassName("wb-min")[0], "click", function(b) {
        r(b);
        a.minimize();
      });
      n(a.g.getElementsByClassName("wb-max")[0], "click", function(b) {
        r(b);
        a.focus().maximize();
      });
      K ? n(a.g.getElementsByClassName("wb-full")[0], "click", function(b) {
        r(b);
        a.focus().fullscreen();
      }) : a.addClass("no-full");
      n(a.g.getElementsByClassName("wb-close")[0], "click", function(b) {
        r(b);
        a.close() || (a = null);
      });
      n(a.g, "click", function() {
        a.focus();
      }, false);
    }
    function Y(a) {
      y.splice(y.indexOf(a), 1);
      V();
      a.removeClass("min");
      a.min = false;
      a.g.title = "";
    }
    function V() {
      for (var a = y.length, b = {}, c = {}, e = 0, d; e < a; e++)
        d = y[e], d = d.left + ":" + d.top, c[d] ? c[d]++ : c[d] = 1;
      e = 0;
      for (var h, p, t; e < a; e++)
        d = y[e], h = d.left + ":" + d.top, p = Math.min((Q - d.left - d.right) / c[h], 250), t = d.g.getElementsByClassName("wb-title")[0], t = t.clientHeight, b[h] || (b[h] = 0), d.resize(p + 1 | 0, 0, true).move(d.left + b[h] * p | 0, R - d.bottom - t, true), b[h]++;
    }
    function W(a, b) {
      function c(f) {
        r(f);
        if (a.min)
          a.minimize();
        else {
          var q;
          if (q = b === "title")
            q = !a.g.classList.contains("no-max");
          if (q) {
            q = Date.now();
            var x = q - D;
            D = q;
            if (250 > x) {
              a.maximize();
              return;
            }
          }
          a.max || (z.classList.add("wb-drag"), (p = f.touches) && (p = p[0]) ? (f = p, n(window, "touchmove", e), n(window, "touchend", d)) : (n(window, "mousemove", e), n(window, "mouseup", d)), t = f.pageX, H = f.pageY, a.focus());
        }
      }
      function e(f) {
        r(f);
        p && (f = f.touches[0]);
        var q = f.pageX;
        f = f.pageY;
        var x = q - t, u = f - H, v;
        if (b === "title") {
          a.x += x;
          a.y += u;
          var A = v = 1;
        } else {
          if (b === "e" || b === "se" || b === "ne") {
            a.width += x;
            var B = 1;
          } else if (b === "w" || b === "sw" || b === "nw")
            a.x += x, a.width -= x, A = B = 1;
          if (b === "s" || b === "se" || b === "sw") {
            a.height += u;
            var L = 1;
          } else if (b === "n" || b === "ne" || b === "nw")
            a.y += u, a.height -= u, v = L = 1;
        }
        if (B || L)
          B && (a.width = Math.max(Math.min(a.width, Q - a.x - a.right), 150)), L && (a.height = Math.max(Math.min(a.height, R - a.y - a.bottom), 0)), a.resize();
        if (A || v)
          A && (a.x = Math.max(Math.min(a.x, Q - a.width - a.right), a.left)), v && (a.y = Math.max(Math.min(a.y, R - a.height - a.bottom), a.top)), a.move();
        t = q;
        H = f;
      }
      function d(f) {
        r(f);
        z.classList.remove("wb-drag");
        p ? (window.removeEventListener("touchmove", e, true), window.removeEventListener("touchend", d, true)) : (window.removeEventListener("mousemove", e, true), window.removeEventListener("mouseup", d, true));
      }
      var h = a.g.getElementsByClassName("wb-" + b)[0], p, t, H;
      n(h, "mousedown", c);
      n(h, "touchstart", c, { passive: false });
    }
    g = T.prototype;
    g.mount = function(a) {
      this.unmount();
      a.h || (a.h = a.parentNode);
      this.body.textContent = "";
      this.body.appendChild(a);
      return this;
    };
    g.unmount = function(a) {
      var b = this.body.firstChild;
      if (b) {
        var c = a || b.h;
        c && c.appendChild(b);
        b.h = a;
      }
      return this;
    };
    g.setTitle = function(a) {
      a = this.title = a;
      this.g.getElementsByClassName("wb-title")[0].firstChild.nodeValue = a;
      return this;
    };
    g.setBackground = function(a) {
      w(this.g, "background", a);
      return this;
    };
    g.setUrl = function(a) {
      this.body.innerHTML = '<iframe src="' + a + '"></iframe>';
      return this;
    };
    g.focus = function() {
      G !== this && (w(this.g, "z-index", E++), this.addClass("focus"), G && (G.removeClass("focus"), G.onblur && G.onblur()), G = this, this.onfocus && this.onfocus());
      return this;
    };
    g.hide = function() {
      return this.addClass("hide");
    };
    g.show = function() {
      return this.removeClass("hide");
    };
    g.minimize = function(a) {
      F && Z();
      !a && this.min ? (Y(this), this.resize().move().focus()) : a === false || this.min || (y.push(this), V(), this.g.title = this.title, this.addClass("min"), this.min = true);
      this.max && (this.removeClass("max"), this.max = false);
      return this;
    };
    g.maximize = function(a) {
      if (typeof a === "undefined" || a !== this.max)
        this.min && Y(this), (this.max = !this.max) ? this.addClass("max").resize(Q - this.left - this.right, R - this.top - this.bottom, true).move(this.left, this.top, true) : this.resize().move().removeClass("max");
      return this;
    };
    g.fullscreen = function(a) {
      if (typeof a === "undefined" || a !== F)
        this.min && (this.resize().move(), Y(this)), F && Z() || (this.body[K](), F = true);
      return this;
    };
    function Z() {
      F = false;
      if (document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
        return document[O](), true;
    }
    g.close = function(a) {
      if (this.onclose && this.onclose(a))
        return true;
      this.min && Y(this);
      this.unmount();
      this.g.parentNode.removeChild(this.g);
      G === this && (G = null);
    };
    g.move = function(a, b, c) {
      a || a === 0 ? c || (this.x = a ? a = U(a, Q - this.left - this.right, this.width) : 0, this.y = b ? b = U(b, R - this.top - this.bottom, this.height) : 0) : (a = this.x, b = this.y, this.l && (a === 0 ? this.resize(Q / 2, R) : a === Q - this.width && this.resize(Q / 2, R)));
      w(this.g, "transform", "translate(" + a + "px," + b + "px)");
      this.onmove && this.onmove(a, b);
      return this;
    };
    g.resize = function(a, b, c) {
      a || a === 0 ? c || (this.width = a ? a = U(a, Q - this.left - this.right) : 0, this.height = b ? b = U(b, R - this.top - this.bottom) : 0) : (a = this.width, b = this.height);
      a = Math.max(a, this.j);
      b = Math.max(b, this.i);
      w(this.g, "width", a + "px");
      w(this.g, "height", b + "px");
      this.onresize && this.onresize(a, b);
      return this;
    };
    g.addClass = function(a) {
      this.g.classList.add(a);
      return this;
    };
    g.removeClass = function(a) {
      this.g.classList.remove(a);
      return this;
    };
    window.WinBox = T;
  }).call(void 0);

  // public/src/js/index.js
  var WpDocContrib = class {
    constructor() {
      this.posts = [];
      this.config = {
        title: "Documentation",
        background: "#0B36C3",
        x: "bottom",
        y: "right",
        root: document.documentElement,
        index: 9999,
        onclose: () => {
          this.state.open = false;
          this.state.pinned = false;
          this.saveState();
        },
        onmove: (x, y) => {
          this.state.lastPosition.x = x;
          this.state.lastPosition.y = y;
          this.saveState();
        },
        onresize: (width, height) => {
          this.state.lastPosition.width = width;
          this.state.lastPosition.height = height;
          this.saveState();
        }
      };
      this.state = {
        open: false,
        pinned: false,
        lastPosition: {},
        activePostId: false,
        scrollTop: false
      };
      this.scrollTimeout = false;
      this.getDocumentation();
      this.loadPreviousState();
      this.wpadminbar = document.querySelector("#wpadminbar");
      this.event();
      this.accordions();
    }
    getDocumentation() {
      if (this.storageAvailable("localStorage")) {
        const posts = localStorage.getItem("wp-doc-contrib-posts");
        if (posts)
          this.posts = JSON.parse(posts);
        this.render();
      }
      fetch(`${wpDocContrib.ajax_url}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `action=wp_doc_list&security=${wpDocContrib.nonce}`
      }).then((res) => res.json()).then((res) => {
        this.posts = res.data;
        localStorage.setItem("wp-doc-contrib-posts", JSON.stringify(this.posts));
        this.render();
      });
    }
    render() {
      let html = `<div class="accordion">`;
      this.posts.forEach((post) => {
        html += `<div id="post-${post.ID}" class="a-container">
                  <p class="a-btn">
                    ${post.post_title}
                    <a class="edit" href="/wp-admin/post.php?post=${post.ID}&action=edit" target="_blank"></a>
                  </p>
                  <div class="a-panel">${post.post_content}</div>
                </div>`;
      });
      html += `</div>`;
      this.setContent(html);
    }
    storageAvailable(type) {
      try {
        var storage = window[type], x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return false;
      }
    }
    setContent(content) {
      this.config.html = content;
    }
    show() {
      if (this.state.lastPosition.x) {
        this.config.x = this.state.lastPosition.x;
        this.config.y = this.state.lastPosition.y;
        this.config.width = this.state.lastPosition.width;
        this.config.height = this.state.lastPosition.heigh;
      }
      this.winbox = WinBox.new(this.config);
      this.winbox.addClass("wdc");
      this.state.open = true;
      if (this.wpadminbar) {
        this.winbox.top = wpadminbar.offsetHeight;
        this.winbox.bottom = 0;
      }
      this.openPreviousPost();
      this.wbBody = document.querySelector(".winbox .wb-body");
      if (this.state.scrollTop && this.wbBody)
        this.wbBody.scrollTop = this.state.scrollTop;
      if (this.wbBody) {
        this.wbBody.addEventListener("scroll", (e) => {
          if (this.scrollTimeout)
            clearTimeout(this.scrollTimeout);
          this.scrollTimeout = window.setTimeout(() => {
            this.state.scrollTop = e.target.scrollTop ? e.target.scrollTop : false;
            this.saveState();
          }, 300);
        });
      }
      this.addPinnedButton();
      this.saveState();
    }
    close() {
      this.winbox.close();
    }
    event() {
      const button = document.querySelector("#wp-admin-bar-wp-doc-contrib-toggle");
      if (!button)
        return;
      button.addEventListener("click", (e) => {
        e.preventDefault();
        if (!this.state.open || !this.winbox) {
          this.show();
        } else {
          this.close();
        }
      });
      document.addEventListener("click", (e) => {
        if (!e.target.matches(".winbox .wb-pinned"))
          return;
        this.state.pinned = !this.state.pinned;
        this.saveState();
        const button2 = document.querySelector(".winbox .wb-pinned");
        if (this.state.pinned)
          button2.classList.add("active");
        else
          button2.classList.remove("active");
      });
    }
    saveState() {
      if (!this.storageAvailable("localStorage"))
        return;
      localStorage.setItem("wp-doc-contrib-state", JSON.stringify(this.state));
    }
    loadPreviousState() {
      if (!this.storageAvailable("localStorage"))
        return;
      const rawState = localStorage.getItem("wp-doc-contrib-state");
      if (!rawState)
        return;
      this.state = {
        ...this.state,
        ...JSON.parse(rawState)
      };
      if (this.state.pinned)
        this.show();
      this.openPreviousPost();
    }
    openPreviousPost() {
      if (this.state.activePostId) {
        const activeItem = document.querySelector(`.winbox #${this.state.activePostId}`);
        if (activeItem)
          activeItem.classList.add("active");
      }
    }
    storageAvailable(type) {
      try {
        var storage = window[type], x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
      } catch (e) {
        return false;
      }
    }
    addPinnedButton() {
      const wbMin = document.querySelector(".winbox .wb-header .wb-min");
      if (!wbMin)
        return;
      const button = document.createElement("span");
      button.classList.add("wb-pinned");
      if (this.state.pinned)
        button.classList.add("active");
      wbMin.after(button);
    }
    accordions() {
      const elem = ".accordion", option = true;
      document.addEventListener("click", (e) => {
        if (!e.target.matches(elem + " .a-btn"))
          return;
        else {
          if (!e.target.parentElement.classList.contains("active")) {
            if (option == true) {
              var elementList = document.querySelectorAll(elem + " .a-container");
              Array.prototype.forEach.call(elementList, function(e2) {
                e2.classList.remove("active");
              });
            }
            e.target.parentElement.classList.add("active");
            this.state.activePostId = e.target.parentElement.id;
            this.saveState();
          } else {
            e.target.parentElement.classList.remove("active");
            this.state.activePostId = false;
            this.saveState();
          }
        }
      });
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    new WpDocContrib();
  });
})();

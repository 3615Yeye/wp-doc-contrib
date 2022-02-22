<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://3615yeye.info/
 * @since      0.0.1
 *
 * @package    Wp_Doc_Contrib
 * @subpackage Wp_Doc_Contrib/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Wp_Doc_Contrib
 * @subpackage Wp_Doc_Contrib/admin
 * @author     Ronan Le Pivaingt <ronan@3615yeye.info>
 */
class Wp_Doc_Contrib_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    0.0.1
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    0.0.1
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Wp_Doc_Contrib_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Wp_Doc_Contrib_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . '../public/dist/wp-doc-contrib-admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    0.0.1
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Wp_Doc_Contrib_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Wp_Doc_Contrib_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . '../public/dist/wp-doc-contrib-admin.js', array( 'jquery' ), $this->version, false );

        wp_localize_script( $this->plugin_name, 'wpDocContrib', [
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce( 'wp-doc-contrib' ),
        ]);
	}

	/**
	 * Define the custom post types
	 *
	 * @since    0.0.2
	 */
    private function cpts() {
        return  [
            [
                'name' => "Documentation",
                'single_name' => "Élément de documentation",
                'slug' => false,
                'post_type' => 'item',
                'menu' => 'admin',
                'position' => 55,
                'public' => false,
                'show_ui' => true,
                'has_archive' => false,
                'rewrite' => false,
            ],
        ];
    }

	/**
	 * Register the custom post types
	 *
	 * @since    0.0.2
	 */
	public function custom_post_types() {
        foreach ($this->cpts() as $cpt) {
            $labels = array(
                'name'                => _x( $cpt['name'], 'Post Type General Name'),
                'singular_name'       => _x( $cpt['single_name'], 'Post Type Singular Name'),
                'menu_name'           => __( $cpt['name'] ),
                'all_items'           => __( "Toute la " . strtolower($cpt['name'])),
                'view_item'           => __( "Voir les " . strtolower($cpt['name'])),
                'add_new_item'        => __( "Ajouter un nouveau " . strtolower($cpt['single_name'])),
                'add_new'             => __( "Ajouter"),
                'edit_item'           => __( "Editer le " . strtolower($cpt['single_name'])),
                'update_item'         => __( "Modifier le " . strtolower($cpt['single_name'])),
                'search_items'        => __( "Rechercher un " . strtolower($cpt['single_name'])),
                'not_found'           => __( "Non trouvé"),
                'not_found_in_trash'  => __( "Non trouvé dans la corbeille"),
            );

            $args = array(
                'label'               => __( $cpt['name'] ),
                'description'         => __( $cpt['name'] ),
                'labels'              => $labels,
                'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields', ),
                'show_in_rest'         => true,
                'hierarchical'        => true,
                'public'              => $cpt['public'],
                'show_ui'             => $cpt['show_ui'],
                'has_archive'         => $cpt['has_archive'],
                'rewrite'			  => $cpt['rewrite'],
                'show_in_menu'        => true,
                'menu_icon'           => 'dashicons-editor-help',
            );

            if (array_key_exists('taxonomies', $cpt)) {
                $args['taxonomies'] = $cpt['taxonomies'];
            }

            register_post_type( 'doc-contrib-' . $cpt['post_type'], $args );
        }
    }

    /**
     * Register AJAX endpoint to query documentation
     *
	 * @since    0.0.2
     */
    public function ajax_endpoint() {
        $doc_list = get_posts([
            'post_type'     => 'doc-contrib-item',
            'numberposts'   => -1,
        ]);

        wp_send_json_success($doc_list, 200);
        wp_die();
    }

    /**
     * Add admin bar button
     *
	 * @since    0.0.2
     */
    public function admin_bar_button($admin_bar) {
        $admin_bar->add_node([
            'id' => 'wp-doc-contrib-toggle',
            'title' => __('Documentation', 'wp-doc-contrib'),
            'href' => '#',
            'meta' => array(
                'class' => 'custom-node-class',
                'html' => '<div class="wp-menu-image dashicons-before dashicons-editor-help" aria-hidden="true"><br></div>',
            )
        ]);
    }
}

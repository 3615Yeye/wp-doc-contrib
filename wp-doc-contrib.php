<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://3615yeye.info/
 * @since             0.0.1
 * @package           Wp_Doc_Contrib
 *
 * @wordpress-plugin
 * Plugin Name:       WordPress Documentation for contributors
 * Plugin URI:        https://github.com/3615Yeye/wp-doc-contrib
 * Description:       Users can create documentation pages like another content and open it in a popup with a click on the admin bar.
 * Version:           0.0.1
 * Author:            Ronan Le Pivaingt
 * Author URI:        https://3615yeye.info/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-doc-contrib
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WP_DOC_CONTRIB_VERSION', '11.0.1' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-doc-contrib-activator.php
 */
function activate_wp_doc_contrib() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-doc-contrib-activator.php';
	Wp_Doc_Contrib_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-doc-contrib-deactivator.php
 */
function deactivate_wp_doc_contrib() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-doc-contrib-deactivator.php';
	Wp_Doc_Contrib_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_doc_contrib' );
register_deactivation_hook( __FILE__, 'deactivate_wp_doc_contrib' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-doc-contrib.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    0.0.1
 */
function run_wp_doc_contrib() {

	$plugin = new Wp_Doc_Contrib();
	$plugin->run();

}
run_wp_doc_contrib();

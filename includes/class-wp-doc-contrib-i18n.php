<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://3615yeye.info/
 * @since      1.0.0
 *
 * @package    Wp_Doc_Contrib
 * @subpackage Wp_Doc_Contrib/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Wp_Doc_Contrib
 * @subpackage Wp_Doc_Contrib/includes
 * @author     Ronan Le Pivaingt <ronan@3615yeye.info>
 */
class Wp_Doc_Contrib_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wp-doc-contrib',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}

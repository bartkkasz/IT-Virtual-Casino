<?php
/**
 * Astra functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define Constants
 */
define( 'ASTRA_THEME_VERSION', '3.7.5' );
define( 'ASTRA_THEME_SETTINGS', 'astra-settings' );
define( 'ASTRA_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'ASTRA_THEME_URI', trailingslashit( esc_url( get_template_directory_uri() ) ) );


/**
 * Minimum Version requirement of the Astra Pro addon.
 * This constant will be used to display the notice asking user to update the Astra addon to the version defined below.
 */
define( 'ASTRA_EXT_MIN_VER', '3.6.3' );

/**
 * Setup helper functions of Astra.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-theme-options.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-theme-strings.php';
require_once ASTRA_THEME_DIR . 'inc/core/common-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-icons.php';

/**
 * Update theme
 */
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-update.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/astra-update-functions.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-background-updater.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-pb-compatibility.php';


/**
 * Fonts Files
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-font-families.php';
if ( is_admin() ) {
	require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts-data.php';
}

require_once ASTRA_THEME_DIR . 'inc/lib/webfont/class-astra-webfont-loader.php';
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts.php';

require_once ASTRA_THEME_DIR . 'inc/dynamic-css/custom-menu-old-header.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/container-layouts.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/astra-icons.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/block-editor-compatibility.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-walker-page.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-enqueue-scripts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-gutenberg-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/inline-on-mobile.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/content-background.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-dynamic-css.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-global-palette.php';

/**
 * Custom template tags for this theme.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-attr.php';
require_once ASTRA_THEME_DIR . 'inc/template-tags.php';

require_once ASTRA_THEME_DIR . 'inc/widgets.php';
require_once ASTRA_THEME_DIR . 'inc/core/theme-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/admin-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/sidebar-manager.php';

/**
 * Markup Functions
 */
require_once ASTRA_THEME_DIR . 'inc/markup-extras.php';
require_once ASTRA_THEME_DIR . 'inc/extras.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog-config.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog.php';
require_once ASTRA_THEME_DIR . 'inc/blog/single-blog.php';

/**
 * Markup Files
 */
require_once ASTRA_THEME_DIR . 'inc/template-parts.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-loop.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-mobile-header.php';

/**
 * Functions and definitions.
 */
require_once ASTRA_THEME_DIR . 'inc/class-astra-after-setup-theme.php';

// Required files.
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-helper.php';

require_once ASTRA_THEME_DIR . 'inc/schema/class-astra-schema.php';

if ( is_admin() ) {

	/**
	 * Admin Menu Settings
	 */
	require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-settings.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/astra-notices/class-astra-notices.php';

}

/**
 * Metabox additions.
 */
require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-boxes.php';

require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-box-operations.php';

/**
 * Customizer additions.
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-customizer.php';

/**
 * Astra Modules.
 */
require_once ASTRA_THEME_DIR . 'inc/modules/related-posts/class-astra-related-posts.php';

/**
 * Compatibility
 */
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gutenberg.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-jetpack.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/woocommerce/class-astra-woocommerce.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/edd/class-astra-edd.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/lifterlms/class-astra-lifterlms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/learndash/class-astra-learndash.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bb-ultimate-addon.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-contact-form-7.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-visual-composer.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-site-origin.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gravity-forms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bne-flyout.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-ubermeu.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-divi-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-amp.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-yoast-seo.php';
require_once ASTRA_THEME_DIR . 'inc/addons/transparent-header/class-astra-ext-transparent-header.php';
require_once ASTRA_THEME_DIR . 'inc/addons/breadcrumbs/class-astra-breadcrumbs.php';
require_once ASTRA_THEME_DIR . 'inc/addons/heading-colors/class-astra-heading-colors.php';
require_once ASTRA_THEME_DIR . 'inc/builder/class-astra-builder-loader.php';

// Elementor Compatibility requires PHP 5.4 for namespaces.
if ( version_compare( PHP_VERSION, '5.4', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor-pro.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-web-stories.php';
}

// Beaver Themer compatibility requires PHP 5.3 for anonymus functions.
if ( version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-themer.php';
}

require_once ASTRA_THEME_DIR . 'inc/core/markup/class-astra-markup.php';

/**
 * Load deprecated functions
 */
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-filters.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-functions.php';





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                                /* BETTING SYSTEM */

add_action('wp_ajax_betAmount','ajax_betAmount');
add_action('wp_ajax_betWin', 'ajax_betWin');
add_action('wp_ajax_betWinGreen', 'ajax_betWinGreen');

function ajax_betAmount(){
	$arr=[];
    wp_parse_str($_POST['betAmount'], $arr);
    global $wpdb;
    global $user;
	$user = wp_get_current_user();
    $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
    $current_balance_decoded = json_decode(json_encode($current_balance),true);
    $current_balance_value = $current_balance_decoded[0]['balance'];
    $balance_to_set = $current_balance_value-$arr['betAmount'];
    $table = 'wp_users';
    $data_where = array('ID'=>$user->ID);
    if($balance_to_set>=0){
    $result=$wpdb->update($table,["balance"=>$balance_to_set], $data_where);
    }
}

function ajax_betWin(){
    $arr=[];
    wp_parse_str($_POST['betWin'], $arr);
    global $wpdb;
    global $user;
	$user = wp_get_current_user();
    $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
    $current_balance_decoded = json_decode(json_encode($current_balance),true);
    $current_balance_value = $current_balance_decoded[0]['balance'];
    $flag = $current_balance_value - $arr['betAmount'];
    $balance_to_set = $current_balance_value+2*$arr['betAmount'];
    $table = 'wp_users';
    $data_where = array('ID'=>$user->ID);
    if($flag>0){
    $result=$wpdb->update($table,["balance"=>$balance_to_set], $data_where);
    }
}

function ajax_betWinGreen(){
    $arr=[];
    wp_parse_str($_POST['betWinGreen'], $arr);
    global $wpdb;
    global $user;
	$user = wp_get_current_user();
    $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
    $current_balance_decoded = json_decode(json_encode($current_balance),true);
    $current_balance_value = $current_balance_decoded[0]['balance'];
    $flag = $current_balance_value - $arr['betAmount'];
    $balance_to_set = $current_balance_value+4*$arr['betAmount'];
    $table = 'wp_users';
    $data_where = array('ID'=>$user->ID);
    if($flag>0){
    $result=$wpdb->update($table,["balance"=>$balance_to_set], $data_where);
    }
}



add_action('wp_ajax_changeWheelImage', 'ajax_changeWheelImage');

    function ajax_changeWheelImage(){
    $wheelImage = $_POST['wheelIMG'];
    $balance_to_remove = $_POST['balance_to_remove'];
    global $wpdb;
    global $user;
    $user = wp_get_current_user();
    $table = 'wp_users';
    $data_where = array('ID'=>$user->ID);
    $result=$wpdb->update($table,["WheelImage"=>$wheelImage], $data_where);
    $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
    $current_balance_decoded = json_decode(json_encode($current_balance),true);
    $current_balance_value = $current_balance_decoded[0]['balance'];
    $wpdb->update($table, ["balance"=>$current_balance_value-$balance_to_remove], $data_where);
    }

add_action('wp_ajax_prizeShopBuy', 'ajax_prizeShopBuy');

    function ajax_prizeShopBuy(){
        $column = $_POST['column'];
        print_r($column);
        global $wpdb;
        global $user;
        $user = wp_get_current_user();
        $res = $wpdb->query($wpdb->prepare("UPDATE prize_shop SET $column = 1 WHERE ID = $user->ID"));
    }


                /* PASS PHP VARIABLE TO JAVASCRIPT, MAKE SURE IT WORKS ONLY ON A SPECIFIC PAGE */
                // 3099 - Roulette      //
                // 3101 - Lucky Stripes //
                // 47   - Prize Shop    //
                // 3244 - After Login   //

add_action('wp', 'page_check');

function page_check() {
    if (is_page(3099)) {
        add_action( 'wp_enqueue_scripts', 'php_to_js_enqueue' );
        function php_to_js_enqueue() {
        $balance_to_pass = array();
        $wheelImage_to_pass = array();
        global $wpdb;
        global $user;
        $user = wp_get_current_user();
        $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
        $current_balance_decoded = json_decode(json_encode($current_balance),true);
        $current_balance_value = $current_balance_decoded[0]['balance'];
        $balance_to_pass['balance_to_change'] = $current_balance_value;
        $current_Wheel_Image = $wpdb->get_results($wpdb->prepare("SELECT WheelImage FROM wp_users WHERE ID = $user->ID"));
        $current_Wheel_Image_decoded = json_decode(json_encode($current_Wheel_Image), true);
        $current_Wheel_Image_value = $current_Wheel_Image_decoded[0]['WheelImage'];
        $wheelImage_to_pass['wheelImage_to_change'] = $current_Wheel_Image_value;
        $data_to_pass = array_merge($balance_to_pass, $wheelImage_to_pass);
        wp_enqueue_script( 'php-to-js','https://dev-virtualcasino.pantheonsite.io/wp-content/my-plugins/Roulette/change_max_form_value.js', array( 'jquery' ), null, true );
        wp_localize_script( 'php-to-js', 'data_to_pass', $data_to_pass );
         }
    }
    if (is_page(3101)) {
        add_action( 'wp_enqueue_scripts', 'php_to_js_ls_enqueue' );
        function php_to_js_ls_enqueue() {
        $balance_to_pass = array();
        global $wpdb;
        global $user;
        $user = wp_get_current_user();
        $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
        $current_balance_decoded = json_decode(json_encode($current_balance),true);
        $current_balance_value = $current_balance_decoded[0]['balance'];
        $balance_to_pass['balance_to_change'] = $current_balance_value;
        wp_enqueue_script( 'php-to-js-ls','https://dev-virtualcasino.pantheonsite.io/wp-content/my-plugins/Lucky%20Stripes/change_max_form_value_ls.js', array( 'jquery' ), null, true );
        wp_localize_script( 'php-to-js-ls', 'balance_to_pass', $balance_to_pass );
         }
    }
    if (is_page(47)){
        add_action( 'wp_enqueue_scripts', 'php_to_js_prizeshop_enqueue' );
        function php_to_js_prizeshop_enqueue() {
        $balance_to_pass = array();
        $avaliable_wheel_choices = array();
        global $wpdb;
        global $user;
        $user = wp_get_current_user();
        $current_balance = $wpdb->get_results($wpdb->prepare("SELECT balance FROM wp_users WHERE ID = $user->ID"));
        $current_balance_decoded = json_decode(json_encode($current_balance),true);
        $current_balance_value = $current_balance_decoded[0]['balance'];
        $balance_to_pass['balance_to_change'] = $current_balance_value;
        
        $wheel_choices_to_pass = $wpdb->get_results($wpdb->prepare("SELECT * FROM prize_shop WHERE ID = $user->ID"));
        
        $selected_wheel = $wpdb->get_results($wpdb->prepare("SELECT WheelImage FROM wp_users WHERE ID = $user->ID"));

        $user_id = $wpdb->get_results($wpdb->prepare("SELECT ID FROM wp_users WHERE ID = $user->ID"));

        wp_enqueue_script( 'php-to-js_prizeshop','https://dev-virtualcasino.pantheonsite.io/wp-content/my-plugins/PrizeShop/prizeshopscript.js', array( 'jquery' ), null, true );
        wp_localize_script( 'php-to-js_prizeshop', 'balance_to_pass', $balance_to_pass );
        wp_localize_script( 'php-to-js_prizeshop', 'wheel_choices_to_pass', $wheel_choices_to_pass);
        wp_localize_script( 'php-to-js_prizeshop', 'selected_Wheel', $selected_wheel);
        wp_localize_script( 'php-to-js_prizeshop', 'user_id', $user_id);


    }
}
    if(is_page(3244)){
        add_action( 'wp_enqueue_scripts', 'php_to_js_afterlogin_enqueue' );
        function php_to_js_afterlogin_enqueue() {
        global $wpdb;
        global $user;
        $user = wp_get_current_user();
      //  $user_id = $wpdb->get_results($wpdb->prepare("SELECT ID FROM wp_users WHERE ID = $user->ID"));
        $res = $wpdb->query($wpdb->prepare("INSERT INTO prize_shop SET ID = $user->ID"));
    }
}
}

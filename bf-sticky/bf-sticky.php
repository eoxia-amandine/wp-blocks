<?php
/**
 * Display video with content
 *
 * @author Eoxia <contact@eoxia.com>
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @since 3.0.0
 * @package beflex-child
 *
 */

if ( ! defined( 'BF_STICKY_DIR' ) ) {
    define( 'BF_STICKY_DIR', dirname(__DIR__, 1) . '/bf-sticky' );
}
if ( ! defined( 'BF_STICKY_URL' ) ) {
    define( 'BF_STICKY_URL', get_stylesheet_directory_uri() . '/inc/blocks/bf-sticky' );
}

/**
 * Generate block
 *
 * @return void
 */
function bf_sticky_register_acf_blocks() {
    wp_register_style( 'block-bf-sticky-style', BF_STICKY_URL . '/assets/css/style.min.css' );
//    wp_register_script( 'block-bf-sticky-script', BF_STICKY_URL . '/assets/js/bf-sticky.js', array('jquery'), '', true );
    register_block_type( BF_STICKY_DIR . '/assets/json/' );
}
add_action( 'init', 'bf_sticky_register_acf_blocks', 5 );

/**
 * Load Json fields
 *
 * @param array $paths Json path
 *
 * @return array $paths Json path
 */
function bf_sticky_load_json( $paths ) {
    $paths[] = BF_STICKY_DIR . '/assets/json';
    return $paths;
}
add_filter( 'acf/settings/load_json', 'bf_sticky_load_json' );
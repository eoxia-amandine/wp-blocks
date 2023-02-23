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

if ( ! defined( 'BF_SUMMARY_DIR' ) ) {
    define( 'BF_SUMMARY_DIR', dirname(__DIR__, 1) . '/bf-summary' );
}
if ( ! defined( 'BF_SUMMARY_URL' ) ) {
    define( 'BF_SUMMARY_URL', get_stylesheet_directory_uri() . '/inc/blocks/bf-summary' );
}

/**
 * Generate block
 *
 * @return void
 */
function bf_summary_register_acf_blocks() {
    wp_register_style( 'block-bf-summary-style', BF_SUMMARY_URL . '/assets/css/style.min.css' );
    wp_register_script( 'block-bf-summary-script', BF_SUMMARY_URL . '/assets/js/bf-summary.js', array('jquery'), '', true );
    register_block_type( BF_SUMMARY_DIR . '/assets/json/' );
}
add_action( 'init', 'bf_summary_register_acf_blocks', 5 );

/**
 * Enqueue script for Gutenberg Editor
 */
function bf_summary_register_block_attributes() {
    wp_enqueue_script('block-bf-summary-attribute', BF_SUMMARY_URL . '/assets/js/build/bf-summary-attribute.js', ['wp-edit-post']);
}
add_action( 'enqueue_block_editor_assets', 'bf_summary_register_block_attributes' );

/**
 * Load Json fields
 *
 * @param array $paths Json path
 *
 * @return array $paths Json path
 */
function bf_summary_load_json( $paths ) {
    $paths[] = BF_SUMMARY_DIR . '/assets/json';
    return $paths;
}
add_filter( 'acf/settings/load_json', 'bf_summary_load_json' );
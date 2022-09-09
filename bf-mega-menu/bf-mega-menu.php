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

add_action( 'acf/init', 'bf_mega_menu_init' );
function bf_mega_menu_init() {
    if ( function_exists( 'acf_register_block_type' ) ) {
        acf_register_block_type(
            array(
                'name'            => 'bf_mega_menu',
                'title'           => esc_html__( 'Beflex Mega Menu', 'beflex-child' ),
                'description'     => esc_html__( 'Display mega menu', 'beflex-child' ),
                'category'        => 'beflex',
                'mode'            => 'preview',
                'supports'          => array(
                    'align' => true,
                    'mode' => false,
                    'jsx' => true
                ),
                'icon'            => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H192C209.7 32 224 46.33 224 64C224 81.67 209.7 96 192 96zM192 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H192C209.7 160 224 174.3 224 192C224 209.7 209.7 224 192 224zM0 320C0 302.3 14.33 288 32 288H192C209.7 288 224 302.3 224 320C224 337.7 209.7 352 192 352H32C14.33 352 0 337.7 0 320zM192 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H192C209.7 416 224 430.3 224 448C224 465.7 209.7 480 192 480zM288 64C288 46.33 302.3 32 320 32H480C497.7 32 512 46.33 512 64C512 81.67 497.7 96 480 96H320C302.3 96 288 81.67 288 64zM480 224H320C302.3 224 288 209.7 288 192C288 174.3 302.3 160 320 160H480C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224zM288 320C288 302.3 302.3 288 320 288H480C497.7 288 512 302.3 512 320C512 337.7 497.7 352 480 352H320C302.3 352 288 337.7 288 320zM480 480H320C302.3 480 288 465.7 288 448C288 430.3 302.3 416 320 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480z"/></svg>',
                'keywords'        => array( 'beflex', 'block', 'mega menu' ),
                'render_callback' => 'bf_mega_menu_render_callback',
                'enqueue_assets'  => function() {
                    wp_enqueue_style( 'block-bf-mega-menu-style', get_stylesheet_directory_uri() . '/inc/blocks/bf-mega-menu/assets/css/style.min.css' );
                    wp_enqueue_script( 'block-bf-mega-menu-script', get_stylesheet_directory_uri() . '/inc/blocks/bf-mega-menu/assets/js/bf-mega-menu.js', array('jquery'), '', true );
                }
            )
        );
    }
}


/**
 * Login Block Callback Function.
 *
 * @param   array  $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool   $is_preview True during AJAX preview.
 * @param   int    $post_id The post ID this block is saved to.
 */
function bf_mega_menu_render_callback( $block, $content = '', $is_preview = false, $post_id = 0 ) {
    include get_stylesheet_directory() . '/inc/blocks/bf-mega-menu/view.php';
}

/**
 * Load Json fields
 *
 * @param array $paths Json path
 *
 * @return array $paths Json path
 */
function bf_mega_menu_load_json( $paths ) {
    $paths[] = get_stylesheet_directory() . '/inc/blocks/bf-mega-menu/assets/json';
    return $paths;
}
add_filter( 'acf/settings/load_json', 'bf_mega_menu_load_json' );

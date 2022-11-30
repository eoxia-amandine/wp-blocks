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

if ( ! defined( 'BF_FAQ_DIR' ) ) {
    define( 'BF_FAQ_DIR', dirname(__DIR__, 1) . '/bf-faq' );
}
if ( ! defined( 'BF_FAQ_URL' ) ) {
    define( 'BF_FAQ_URL', get_stylesheet_directory_uri() . '/inc/blocks/bf-faq' );
}

/**
 * Generate block
 *
 * @return void
 */
function register_acf_blocks() {
    wp_register_style( 'block-bf-faq-style', BF_FAQ_URL . '/assets/css/style.min.css' );
    wp_register_script( 'block-bf-faq-script', BF_FAQ_URL . '/assets/js/bf-faq.js', array('jquery'), '', true );
    register_block_type( BF_FAQ_DIR . '/assets/json/' );
}
add_action( 'init', 'register_acf_blocks', 5 );

/**
 * Load Json fields
 *
 * @param array $paths Json path
 *
 * @return array $paths Json path
 */
function bf_faq_load_json( $paths ) {
    $paths[] = BF_FAQ_DIR . '/assets/json';
    return $paths;
}
add_filter( 'acf/settings/load_json', 'bf_faq_load_json' );


function bf_faq_generate_metadatas( $block_data ) {
    if ( empty( $block_data ) ) {
        return;
    }

    add_action( 'wp_head', function() use ($block_data) {
        $schema = array(
            '@context'   => 'https://schema.org',
            '@type'      => 'FAQPage',
            'mainEntity' => array()
        );
        foreach( $block_data as $data ) {
            $schema['mainEntity'][] = array(
                '@type' => 'Question',
                'name'  => $data['faq_question'],
                'acceptedAnswer' => array(
                    '@type' => 'Answer',
                    'text'  => $data['faq_answer'],
                )
            );
        }

        echo '<script type="application/ld+json">' . json_encode( $schema ) . '</script>';
    });
}



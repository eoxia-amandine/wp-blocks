<?php
/**
 * Beflex Mega Menu
 *
 * @author Eoxia <contact@eoxia.com>
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @since 2.0.0
 * @package beflex-sensei
 *
 */

$classes = 'bf-block-mega-menu';
if ( !empty( $block['className'] ) ) :
    $classes .= sprintf( ' %s', $block['className'] );
endif;
if ( !empty( $block['align'] ) ) :
    $classes .= sprintf( ' align%s', $block['align'] );
endif;
if ( is_admin() ) :
	$classes .= ' is-admin';
endif;
$id = get_field( 'id' );
?>

<div id="<?php echo ! empty( $id ) ? esc_attr( sanitize_title( $id ) ) : ''; ?>" class="<?php echo esc_attr( $classes ); ?>">
    <InnerBlocks  />
</div>
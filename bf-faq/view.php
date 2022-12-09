<?php
/**
 * Beflex FAQ.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or its parent block.
 */

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'bf-faq';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

// Admin classes
if ( is_admin() ) :
    $class_name .= ' is-admin';
endif;

if ( have_rows( 'faq_list' ) ) : ?>
    <div <?php echo $anchor; ?>class="<?php echo esc_attr( $class_name ); ?>">
        <?php while ( have_rows( 'faq_list' ) ) : the_row(); ?>
            <div class="bf-faq__main-container <?php echo get_sub_field( 'faq_opened' ) ? 'bf-faq__active' : ''; ?>">
                <div class="bf-faq__question-container">
                    <div class="bf-faq__question"><?php echo esc_html( get_sub_field( 'faq_question' ) ); ?></div>
                    <img class="bf-faq__question-plus" src="<?php echo esc_url( BF_FAQ_URL . '/assets/images/plus-solid.svg' ); ?>" />
                </div>
                <div class="bf-faq__answer"><?php echo get_sub_field( 'faq_answer' ); ?></div>
            </div>
        <?php endwhile; ?>
    </div>
<?php endif; ?>
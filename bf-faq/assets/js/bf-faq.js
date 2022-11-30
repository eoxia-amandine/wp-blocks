(function($){

    /**
     * initializeBlock
     *
     * Adds custom JavaScript to the block HTML.
     *
     * @date    15/4/19
     * @since   1.0.0
     *
     * @param   object $block The block jQuery element.
     * @param   object attributes The block attributes (only available when editing).
     * @return  void
     */
    var initializeBlock = function( $block ) {
        $block.find( '.bf-faq__answer' ).toggle();
        $block.find( '.bf-faq__question-container' ).click(function() {
            $(this).closest('.bf-faq__main-container').toggleClass('bf-faq__active');
            $(this).closest('.bf-faq__main-container').find('.bf-faq__answer').slideToggle('fast');
        });
    }

    // Initialize each block on page load (front end).
    $(document).ready(function(){
        $('.bf-faq').each(function(){
            initializeBlock( $(this) );
        });
    });

    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        // window.acf.addAction( 'render_block_preview/type=bf-mega-menu', initializeBlock );
    }

})(jQuery);
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
        const menuId = $block.attr( 'id' );
        if ( menuId == '' ) return;

        jQuery( '.wp-block-navigation-item.' + menuId ).each( function() {
           jQuery( this ).addClass( 'bf-block-mega-menu__link-parent' );
           jQuery( this ).append( '<div class="bf-block-mega-menu"><div class="bf-block-mega-menu__container">' + $block.html() + '</div></div>' );
            jQuery( this ).find( '.wp-block-navigation__submenu-container' ).remove();
            jQuery( this ).find( '.wp-block-navigation-submenu__toggle' ).remove();
        });

        jQuery( $block ).remove();
    }

    // Initialize each block on page load (front end).
    $(document).ready(function(){
        $('.bf-block-mega-menu').each(function(){
            initializeBlock( $(this) );
        });

        // Assign top value to each mega menu
        var navHeight = jQuery( '.header-sticky' ).outerHeight();
        if ( jQuery( 'body' ).hasClass( 'admin-bar' ) ) {
            navHeight += 32;
        }

        $('.bf-block-mega-menu').each(function(){
            jQuery( this ).css( 'top', navHeight );
        });
    });

    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        // window.acf.addAction( 'render_block_preview/type=bf-mega-menu', initializeBlock );
    }

})(jQuery);
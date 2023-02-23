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
        jQuery( '.bf-summary' ).each( function() {
            jQuery( $block ).append( '<a href="#' +  jQuery( this ).attr( 'id' ) + '" class="bf-summary-control__item ' + jQuery( this ).attr( 'id' ) + '">' + jQuery( this ).attr( 'summary-label' ) + '</a>' );
        });
    }

    // Initialize each block on page load (front end).
    $(document).ready(function(){
        $('.bf-summary-control').each(function(){
            initializeBlock( $(this) );
        });

        // Active summary.
        if ( jQuery( '.bf-summary-control__item' ).length != 0 ) {
            jQuery( window ).on( 'scroll', function() {
                var current = "";
                jQuery( '.bf-summary' ).each( function() {
                    if ( jQuery( 'body' ).hasClass( 'admin-bar' ) ) {
                        var heightMinus = 40;
                    } else {
                        var heightMinus = 20;
                    }
                    if ( window.pageYOffset >= jQuery( this ).offset().top - heightMinus ) {
                        current = jQuery(this).attr('id');
                    }
                })

                jQuery( '.bf-summary-control__item' ).each( function() {
                    jQuery( this ).removeClass( 'active' );
                    if ( jQuery( this ).hasClass( current ) ) {
                        jQuery( this ).addClass( 'active' );
                    }
                });
            });
        }
    });

    // Initialize dynamic block preview (editor).
    if( window.acf ) {
        window.acf.addAction( 'render_block_preview/type=bf_summary', initializeBlock );
    }

})(jQuery);
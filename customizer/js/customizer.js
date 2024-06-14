jQuery(document).ready(function(){
//redirect
//above-header
jQuery( '.focus-customizer-widget-redirect-col1,.focus-customizer-widget-redirect' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-menu-redirect-col1,.focus-customizer-menu-redirect-col2,.focus-customizer-menu-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel('nav_menus').focus();
} );
jQuery( '.focus-customizer-widget-redirect-col2' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-widget-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-social_media-redirect-col1' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.section( 'zita-social-icon' ).focus();
} ); 
jQuery( '.focus-customizer-social_media-redirect-col2' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.section( 'zita-social-icon' ).focus();
} );
jQuery( '.focus-customizer-social_media-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.section( 'zita-social-icon' ).focus();
} );
// main-header
jQuery( '.focus-customizer-widget-redirect' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );   
jQuery( '.focus-customizer-social-media-redirect' ).on( 'click', function (e){
            e.preventDefault();
             wp.customize.section( 'zita-social-icon' ).focus();
} ); 
// bottom-header
// above-header
jQuery( '.focus-customizer-bottom-widget-redirect-col1' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-bottom-widget-redirect-col2' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-bottom-widget-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-bottom-menu-redirect-col1,.focus-customizer-bottom-menu-redirect-col2,.focus-customizer-bottom-menu-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel('nav_menus').focus();
} );
jQuery( '.focus-customizer-bottom-social_media-redirect-col1' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.section( 'zita-social-icon' ).focus();
} ); 
jQuery( '.focus-customizer-bottom-social_media-redirect-col2' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.section( 'zita-social-icon' ).focus();
} );
jQuery( '.focus-customizer-bottom-social_media-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.section( 'zita-social-icon' ).focus();
} );
//footer
jQuery( '.focus-customizer-widget-redirect-col1,.focus-customizer-widget-redirect-col2,.focus-customizer-widget-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'widgets' ).focus();
} );
jQuery( '.focus-customizer-menu-redirect-col1,.focus-customizer-menu-redirect-col2,.focus-customizer-menu-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'nav_menus' ).focus();
} );
jQuery( '.focus-customizer-social_media-redirect-col1,.focus-customizer-social_media-redirect-col2,.focus-customizer-social_media-redirect-col3' ).on( 'click', function (e){
            e.preventDefault();
            wp.customize.panel( 'zita-social-icon' ).focus();
} );

/* === Checkbox Multiple Control === */
    jQuery( '.customize-control-checkbox-multiple input[type="checkbox"]' ).on(
        'change',
        function() {
   // alert('');
            checkbox_values = jQuery( this ).parents( '.customize-control' ).find( 'input[type="checkbox"]:checked' ).map(
                function() {
                    return this.value;
                }
            ).get().join( ',' );

            jQuery( this ).parents( '.customize-control' ).find( 'input[type="hidden"]' ).val( checkbox_values ).trigger( 'change' );
        }
    );



    jQuery('input[id=zita_main_header_layout-mhdrcenter],input[id=zita_main_header_layout-mhdrright],input[id=zita_main_header_layout-mhdrleftpan],input[id=zita_main_header_layout-mhdrrightpan],input[id=zita_main_header_layout-mhdfull],input[id=zita_main_header_layout-mhdminbarleft]').attr("disabled",true);
    jQuery('#_customize-input-zita_main_header_set option:not([value="social"]').attr("disabled",true);
    jQuery('#_customize-input-zita_blog_grid_layout option[value="zta-three-colm"],#_customize-input-zita_blog_grid_layout option[value="zta-four-colm"],#_customize-input-zita_blog_post_pagination option[value="click"],#_customize-input-zita_blog_post_pagination option[value="scroll"],#_customize-input-zita_single_post_content_width option[value="custom"],#_customize-input-zita_woo_product_animation option[value="zoom"],#_customize-input-zita_woo_product_animation option[value="swap"]').attr("disabled",true);
    jQuery('input#_customize-input-zita_blog_highlight,input#_customize-input-zita_scroll_to_top_disable,input#_customize-input-zita_preloader_enable').attr("disabled",true);
});
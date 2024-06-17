<?php 
/**
 * Common Function for Zita Theme.
 *
 * @package     Zita
 * @author      Zita
 * @copyright   Copyright (c) 2018, Zita
 * @since       Zita 1.0.0
 */

/**
 * Function to get footer widget
 */
if ( ! function_exists( 'zita_footer_widget_markup' ) ){	
function zita_footer_widget_markup(){ ?>
<?php 
$zita_bottom_footer_widget_layout  = get_theme_mod( 'zita_bottom_footer_widget_layout','ft-wgt-four');
?>	
<div class="widget-footer">
		 	<div class="widget-footer-bar <?php echo esc_attr($zita_bottom_footer_widget_layout);?>">
		       <div class="container">
			      <div class="widget-footer-container">
                      <?php if($zita_bottom_footer_widget_layout=='ft-wgt-four'): ?>
                      	<div class="widget-footer-col1">
		             	<?php if( is_active_sidebar('footer-1' ) ){
                                       dynamic_sidebar('footer-1' );
                             }else{?>
     	                     <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'zita' );?></a>
                          <?php }?>
                      </div>
		             <div class="widget-footer-col2"><?php if( is_active_sidebar('footer-2' ) ){
                                       dynamic_sidebar('footer-2' );
                             }else{?>
     	                     <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'zita' );?></a>
                          <?php }?>
                      </div>
		             <div class="widget-footer-col3"><?php if( is_active_sidebar('footer-3' ) ){
                                       dynamic_sidebar('footer-3' );
                             }else{?>
     	                     <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'zita' );?></a>
                          <?php }?>
                      </div>
		             <div class="widget-footer-col4"><?php if( is_active_sidebar('footer-4' ) ){
                                       dynamic_sidebar('footer-4' );
                             }else{?>
     	                     <a href="<?php echo esc_url( admin_url( 'widgets.php' ) ); ?>"><?php esc_html_e( 'Add Widget', 'zita' );?></a>
                          <?php }?>
                      </div>
                  <?php endif;?>
		        </div>
		  </div>
	</div>
</div>
<?php }
}
add_action( 'zita_widget_footer', 'zita_footer_widget_markup' );
/***********************************************************
*Footer Post Meta Hide and show Function for Zita Theme
***************************************************************/
if( ! function_exists( 'zita_footer_abv_post_meta' ) ){
function zita_footer_abv_post_meta($page_post_meta_set=''){
    $zita_above_footer_layout = get_theme_mod('zita_above_footer_layout','ft-abv-none');
    if($page_post_meta_set!=='on'){
        if( $zita_above_footer_layout!=='ft-abv-none'):
             zita_top_footer();
    endif;    
  }
 }
}
//Widget footer
if( ! function_exists( 'zita_footer_widget_post_meta' ) ){
function zita_footer_widget_post_meta($page_post_meta_set=''){
   $zita_bottom_footer_widget_layout = get_theme_mod('zita_bottom_footer_widget_layout','ft-wgt-four');
    if($page_post_meta_set!=='on'){
        if($zita_bottom_footer_widget_layout!=='ft-wgt-none'):
             zita_widget_footer();
    endif;    
  }
 }
}
//Footer bottom
if( ! function_exists( 'zita_footer_bottom_post_meta' ) ){
function zita_footer_bottom_post_meta($page_post_meta_set=''){
   $zita_bottom_footer_layout = get_theme_mod('zita_bottom_footer_layout','ft-btm-one');
    if($page_post_meta_set!=='on'){
        if($zita_bottom_footer_layout!=='ft-btm-none'):
             zita_bottom_footer();
    endif;    
  }
 }
}
jQuery(document).ready(function(){
wp.customize.bind( 'ready', function() {
  wp.customize.previewer.bind( 'zita-customize-focus-section', function (data1) {
     wp.customize.section(data1).focus();
  } );
} );
// color
wp.customize.bind( 'ready', function() {
  wp.customize.previewer.bind( 'zita-customize-focus-color-section', function (data2) {
     wp.customize.section(data2).focus();
  } );
} );
});
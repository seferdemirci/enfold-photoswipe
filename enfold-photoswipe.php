<?php

/**
 * Plugin Name:       Enfold PhotoSwipe
 * Plugin URI:        https://www.seferdemirci.com/
 * Description:       This plugin integrate PhotoSwipe js library with Enfold theme which is most popular Wordpress theme in the market. If you disable this plugin, don't forget to Purge JS and CSS files.
 * Version:           1.0.0
 * Author:            Sefer Demirci
 * Author URI:        https://www.seferdemirci.com
 * Text Domain:       enfold-photoswipe
*/

function js_css_files_for_photoswipe() {
	wp_enqueue_style('photoswipe', 				plugins_url( 'assets/photoswipe.css', __FILE__ ), array('avia-layout'), false, 'all');
	wp_enqueue_style('photoswipe-default-skin', plugins_url( 'assets/default-skin/default-skin.css', __FILE__ ), array('avia-layout'), false, 'all');
	wp_enqueue_script('photoswipe', 			plugins_url( 'assets/photoswipe.min.js', __FILE__ ), null, false, true);
	wp_enqueue_script('photoswipe-ui-default', 	plugins_url( 'assets/photoswipe-ui-default.min.js', __FILE__ ), null, false, true);
    // Custom files
    wp_enqueue_style('photoswipe-custom', 		plugins_url( 'assets/custom/custom.css', __FILE__ ), array('avia-layout'), false, 'all');
    wp_enqueue_script('photoswipe-custom', 		plugins_url( 'assets/custom/custom.js', __FILE__ ), null, false, true);
}
add_action('wp_enqueue_scripts', 'js_css_files_for_photoswipe');


function add_photoswipe_structure() {
	?>
	<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="pswp__bg"></div>
		<div class="pswp__scroll-wrap">
			<div class="pswp__container">
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
			</div>
			<div class="pswp__ui pswp__ui--hidden">
				<div class="pswp__top-bar">
					<div class="pswp__counter"></div>
					<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
					<button class="pswp__button pswp__button--share" title="Share"></button>
					<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
					<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
					<div class="pswp__preloader">
						<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
						</div>
					</div>
				</div>
				<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
					<div class="pswp__share-tooltip"></div> 
				</div>
				<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
				<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
				<div class="pswp__caption">
					<div class="pswp__caption__center"></div>
				</div>
			</div>
		</div>
	</div>
	<?php
}
add_action('wp_footer', 'add_photoswipe_structure');
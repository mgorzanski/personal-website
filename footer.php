    <footer class="site-footer">
		<nav class="site-nav">
			<div class="row center-lg center-md center-sm center-xs">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="box">
						<a href="#" id="pull-footer-menu">Menu</a>
						<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'site-menu footer-menu' ) ); ?>
					</div>
				</div>
			</div>
		</nav>

		<nav class="social-media-nav">
			<div class="row center-lg center-md center-sm center-xs">
				<div class="col-lg-3 col-md-3 col-sm-3 col-xs-4">
					<div class="box">
						<ul class="social-media-menu">
							<li><a href="http://twitter.com/gorzanski"><img class="sm-image" src="<?php echo get_template_directory_uri(); ?>/images/twitter.png" alt="Twitter"></a></li>
							<li><a href="http://github.com/mgorzanski"><img class="sm-image" src="<?php echo get_template_directory_uri(); ?>/images/github.png" alt="GitHub"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<p class="copyright-text">
			&copy; 2017, <a href="<?php echo get_home_url(); ?>">Mateusz Górzański</a>
		</p>
	</footer>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script>
		$(function() {
			var pullHeaderMenu 		= $('#pull-header-menu');
				pullFooterMenu 		= $('#pull-footer-menu');
				headerMenu 		= $('.header-menu');
				headerMenuHeight	= headerMenu.height();
				footerMenu 		= $('.footer-menu');
				footerMenuHeight	= footerMenu.height();

			$(pullHeaderMenu).on('click', function(e) {
				e.preventDefault();
				headerMenu.slideToggle();
			});

			$(pullFooterMenu).on('click', function(e) {
				e.preventDefault();
				footerMenu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w < 992 && headerMenu.is(':hidden')) {
        			headerMenu.removeAttr('style');
					footerMenu.removeAttr('style');
        		}
    		});
		});
    </script>
    <?php wp_footer(); ?>
</body>
</html>
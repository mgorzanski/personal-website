    <?php get_header(); ?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <section class="site-interlude different-devices">
		<h2 class="site-interlude-big-text">A young web developer with ambitions.</h2>
	</section>

	<main class="site-content">
		<div class="row center-lg center-md center-sm center-xs">
			<div class="col-lg-7 col-md-11 col-sm-11 col-xs-11">
				<div class="box">
					<section class="about-me">
						<div class="row center-xs">
							<div class="col-lg-4 col-md-4 col-sm-4 col-xs-11 profile-image">
								<div class="box">
									<img class="image" src="<?php echo get_template_directory_uri(); ?>/images/profile.jpg" alt="Profile photo">
								</div>
							</div>
							<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 profile-description">
								<div class="box">
                                    <h3 class="about-me_title">About me</h3>
                                    <div class="about-me_text intro-line">
                                        <?php the_content(); ?>
                                    </div>
                					<p class="about-me_readmore">Read more about me <a href="<?php echo get_site_url(); ?>/about-me/">here</a>.</p>
								</div>
							</div>
						</div>
					</section>

					<section class="portfolio portfolio-space">
						<h2 class="section-title">My last work</h2>
						<div class="row portfolio-items">
							<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
								<div class="box">
									<a class="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
										<img class="portfolio-item-thumbnail image" src="<?php echo get_template_directory_uri(); ?>/images/thumbnail.jpg" alt="Design for wordpress.com">
										<h4 class="portfolio-item-title">Design for wordpress.com</h4>
									</a>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
								<div class="box">
									<a class="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
										<img class="portfolio-item-thumbnail image" src="<?php echo get_template_directory_uri(); ?>/images/thumbnail.jpg" alt="Design for wordpress.com">
										<h4 class="portfolio-item-title">Design for wordpress.com</h4>
									</a>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
								<div class="box">
									<a class="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
										<img class="portfolio-item-thumbnail image" src="<?php echo get_template_directory_uri(); ?>/images/thumbnail.jpg" alt="Design for wordpress.com">
										<h4 class="portfolio-item-title">Design for wordpress.com</h4>
									</a>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
								<div class="box">
									<a class="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
										<img class="portfolio-item-thumbnail image" src="<?php echo get_template_directory_uri(); ?>/images/thumbnail.jpg" alt="Design for wordpress.com">
										<h4 class="portfolio-item-title">Design for wordpress.com</h4>
									</a>
								</div>
							</div>
						</div>
						<div class="row portfolio-show-all">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="box">
									<p class="portfolio-show-all-btn">
										<a href="/matgor4/portfolio">Show all</a>
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
    </main>

    <?php endwhile; endif; ?>
    <?php get_footer(); ?>
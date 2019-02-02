<?php
/*
Template Name: About Me Page
*/
?>

    <?php get_header(); ?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <main class="site-content empty-space">
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
                                    <h3 class="about-me_title"><?php the_title(); ?></h3>
                                    <div class="about-me_text">
                                        <?php the_content(); ?>
                                    </div>
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
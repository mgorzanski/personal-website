<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php bloginfo('name'); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/flexboxgrid.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Cairo" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Enriqueta" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
        <header class="site-header">
		<div class="site-logo">
			<div class="row center-lg center-md center-sm center-xs">
				<div class="col-lg-7 col-md-8 col-sm-10 col-xs-12">
					<div class="box">
						<h1 class="site-logo-title">
							<a href="<?php echo get_home_url(); ?>">Mateusz Górzański</a>
						</h1>
					</div>
				</div>
			</div>
		</div>

		<nav class="site-nav">
			<div class="row center-lg center-md center-sm center-xs">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="box">
						<a href="#" id="pull-header-menu">Menu</a>
						<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'site-menu header-menu' ) ); ?>
					</div>
				</div>
			</div>
		</nav>
	</header>
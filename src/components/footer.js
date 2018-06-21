import React from 'react';
import TwitterIcon from './../images/twitter.png';
import GithubIcon from './../images/github.png';
import Link from 'gatsby-link';

const Footer = () => (
    <footer classNameName="site-footer">
		<nav className="site-nav">
			<div className="row center-lg center-md center-sm center-xs">
				<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div className="box">
						<a href="#" id="pull-footer-menu">Menu</a>
						<ul className="site-menu footer-menu">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/portfolio/">Portfolio</Link></li>
							<li><Link to="/about-me/">About Me</Link></li>
							<li><Link to="/contact-me/">Contact Me</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<nav className="social-media-nav">
			<div className="row center-lg center-md center-sm center-xs">
				<div className="col-lg-3 col-md-3 col-sm-3 col-xs-4">
					<div className="box">
						<ul className="social-media-menu">
							<li><a href="http://twitter.com/gorzanski"><img className="sm-image" src={TwitterIcon} alt="Twitter" /></a></li>
							<li><a href="http://github.com/mgorzanski"><img className="sm-image" src={GithubIcon} alt="GitHub" /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<p className="copyright-text">
			&copy; 2017, <Link to="/">Mateusz Górzański</Link>
		</p>
	</footer>
);

export default Footer;
import React from 'react';
import Link from 'gatsby-link';
import ProfilePhoto from './../images/profile.jpg';

const AboutMePage = () => (
    <main className="site-content empty-space">
		<div className="row center-lg center-md center-sm center-xs">
			<div className="col-lg-7 col-md-11 col-sm-11 col-xs-11">
				<div className="box">
					<section className="about-me">
						<div className="row center-xs">
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-11 profile-image">
								<div className="box">
									<img className="image" src={ProfilePhoto} alt="Profile photo" />
								</div>
							</div>
							<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 profile-description">
								<div className="box">
									<h3 className="about-me_title">About me</h3>
									<p className="about-me_text">Hello,<br />My name is Mateusz, I’m a high school student, always looking for new opportunities. I’m interested in computers since childhood, learning new things everyday. Currently most of the time doing web development and trying new things.</p>
                					
                					<p className="about-me_text">I love working with React and JavaScript, I have done a lot of things in PHP and MySQL, I’m proficient in HTML5, CSS3 and Responsive Web Design, I have basic skills in GIT and overview in C++, Python and Java.</p>

                					<p className="about-me_text">Do you want to contact me? Look <Link to="/contact-me/">here</Link>.</p>
                					<p className="about-me_text">You can also check my GitHub <a href="http://github.com/mgorzanski">here</a>.</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	</main>
);

export default AboutMePage;
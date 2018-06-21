import React from 'react';
import ProfilePhoto from './../images/profile.jpg';
import PortfolioThumbnail from './../images/thumbnail.jpg';
import Portfolio2048 from './../images/portfolio/2048.png';
import Link from 'gatsby-link';

const IndexPage = () => (
  <React.Fragment>
    <section className="site-interlude different-devices">
      <h2 className="site-interlude-big-text">aspiring full stack web dev</h2>
    </section>

    <main className="site-content">
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
                    <p className="about-me_text intro-line">My name is Mateusz, I’m a high school student, always looking for new opportunities. I’m interested in computers since childhood, learning new things everyday.</p>
                            <p className="about-me_readmore">Read more about me <Link to="/about-me/">here</Link>.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="portfolio portfolio-space">
              <h2 className="section-title">My last work</h2>
              <div className="row portfolio-items">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a className="portfolio-item-link" href="https://github.com/mgorzanski/2048/">
                      <img className="portfolio-item-thumbnail image" src={Portfolio2048} alt="2048" />
                      <h4 className="portfolio-item-title">2048</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a className="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
                      <img className="portfolio-item-thumbnail image" src={PortfolioThumbnail} alt="Design for wordpress.com" />
                      <h4 className="portfolio-item-title">Design for wordpress.com</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a className="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
                      <img className="portfolio-item-thumbnail image" src={PortfolioThumbnail} alt="Design for wordpress.com" />
                      <h4 className="portfolio-item-title">Design for wordpress.com</h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a className="portfolio-item-link" href="/matgor4/portfolio/item/design-for-wordpress-com">
                      <img className="portfolio-item-thumbnail image" src={PortfolioThumbnail} alt="Design for wordpress.com" />
                      <h4 className="portfolio-item-title">Design for wordpress.com</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row portfolio-show-all">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="box">
                    <p className="portfolio-show-all-btn">
                      <Link to="/portfolio/">Show all</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </React.Fragment>
);

export default IndexPage;

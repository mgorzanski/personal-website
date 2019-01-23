import React from 'react'
import ProfilePhoto from './../images/profile.jpg'
import ThumbnailMatgor from './../images/portfolio/matgor.png'
import ThumbnailDanceHouse from './../images/portfolio/dance-house.png'
import ThumbnailDevbees from './../images/portfolio/devbees.png'
import ThumbnailRSSApp from './../images/portfolio/rss-app.png'
import { Link } from 'gatsby'
import Layout from './../components/layout'

const IndexPage = () => (
  <Layout>
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
                    <img
                      className="image"
                      src={ProfilePhoto}
                      alt="About me"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 profile-description">
                  <div className="box">
                    <h3 className="about-me_title">About me</h3>
                    <p className="about-me_text intro-line">
                      My name is Mateusz, I’m a high school student, always
                      looking for new opportunities. I’m interested in computers
                      since childhood, learning new things everyday.
                    </p>
                    <p className="about-me_readmore">
                      Read more about me <Link to="/about-me/">here</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="portfolio portfolio-space">
              <h2 className="section-title">My work</h2>
              <div className="row portfolio-items">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a
                      className="portfolio-item-link"
                      href="http://mateuszgorzanski.pl/"
                    >
                      <img
                        className="portfolio-item-thumbnail image"
                        src={ThumbnailMatgor}
                        alt="This website"
                      />
                      <p className="portfolio-item-hidden-description">
                        The website you are looking at; my personal website, builded using GatsbyJS, hosted on Netlify.
                      </p>
                      <h4 className="portfolio-item-title">
                        This website
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a
                      className="portfolio-item-link"
                      href="http://dancehouse.com.pl/"
                    >
                      <img
                        className="portfolio-item-thumbnail image"
                        src={ThumbnailDanceHouse}
                        alt="Dance House"
                      />
                      <p className="portfolio-item-hidden-description">
                        Website built for my client, a dance studio.
                      </p>
                      <h4 className="portfolio-item-title">
                        Dance House - dance studio
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a
                      className="portfolio-item-link"
                      href="http://sharku.ct8.pl/devbees/"
                    >
                      <img
                        className="portfolio-item-thumbnail image"
                        src={ThumbnailDevbees}
                        alt="devbees"
                      />
                      <p className="portfolio-item-hidden-description">
                        Website built for a team I'm part of
                      </p>
                      <h4 className="portfolio-item-title">
                        devbees - team website
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a
                      className="portfolio-item-link"
                      href="https://github.com/mgorzanski/rss-app"
                    >
                      <img
                        className="portfolio-item-thumbnail image"
                        src={ThumbnailRSSApp}
                        alt="Today"
                      />
                      <p className="portfolio-item-hidden-description">
                        Built using Laravel 5. Currently I cannot provide a link to the working app.
                      </p>
                      <h4 className="portfolio-item-title">
                        Today - a RSS reader web app
                      </h4>
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
  </Layout>
)

export default IndexPage

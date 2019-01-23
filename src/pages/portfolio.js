import React from 'react'
import ThumbnailMatgor from './../images/portfolio/matgor.png'
import ThumbnailDanceHouse from './../images/portfolio/dance-house.png'
import ThumbnailDevbees from './../images/portfolio/devbees.png'
import ThumbnailRSSApp from './../images/portfolio/rss-app.png'
import ThumbnailPomodoro from './../images/portfolio/pomodoro.png'
import ThumbnailCalendarApp from './../images/portfolio/calendar-app.png'
import Layout from './../components/layout'

const PortfolioPage = () => (
  <Layout>
    <main className="site-content empty-space">
      <div className="row center-lg center-md center-sm center-xs">
        <div className="col-lg-7 col-md-11 col-sm-11 col-xs-11">
          <div className="box">
            <section className="portfolio">
              <h2 className="section-title">Portfolio</h2>
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a
                      className="portfolio-item-link"
                      href="https://github.com/mgorzanski/pomodoro"
                    >
                      <img
                        className="portfolio-item-thumbnail image"
                        src={ThumbnailPomodoro}
                        alt="Pomodoro"
                      />
                      <p className="portfolio-item-hidden-description">
                        Simple app built using React and Electron
                      </p>
                      <h4 className="portfolio-item-title">
                        Pomodoro desktop app
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 portfolio-item">
                  <div className="box">
                    <a
                      className="portfolio-item-link"
                      href="https://github.com/mgorzanski/calendar-app"
                    >
                      <img
                        className="portfolio-item-thumbnail image"
                        src={ThumbnailCalendarApp}
                        alt="Calendar desktop app"
                      />
                      <p className="portfolio-item-hidden-description">
                        My current project. Coming soon...
                      </p>
                      <h4 className="portfolio-item-title">
                        Calendar desktop app
                      </h4>
                    </a>
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

export default PortfolioPage

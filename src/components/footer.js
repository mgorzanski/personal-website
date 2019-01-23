import React from 'react'
import TwitterIcon from './../images/twitter.png'
import GithubIcon from './../images/github.png'
import { Link } from 'gatsby'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBottomMenu: false }
  }

  render() {
    return (
      <footer className="site-footer">
        <nav className="site-nav">
          <div className="row center-lg center-md center-sm center-xs">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="box">
                <button
                  id="pull-footer-menu"
                  onClick={() =>
                    this.setState({
                      showBottomMenu: !this.state.showBottomMenu,
                    })
                  }
                >
                  Menu
                </button>
                <ul
                  className={
                    this.state.showBottomMenu
                      ? 'site-menu footer-menu site-menu-display'
                      : 'site-menu footer-menu'
                  }
                >
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/portfolio/">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/about-me/">About Me</Link>
                  </li>
                  <li>
                    <Link to="/contact-me/">Contact Me</Link>
                  </li>
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
                  <li>
                    <a href="http://github.com/mgorzanski">
                      <img className="sm-image" src={GithubIcon} alt="GitHub" />
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/gorzanski">
                      <img
                        className="sm-image"
                        src={TwitterIcon}
                        alt="Twitter"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <p className="copyright-text">
          &copy; 2017 - 2019, <Link to="/">Mateusz Górzański</Link>
        </p>
      </footer>
    )
  }
}

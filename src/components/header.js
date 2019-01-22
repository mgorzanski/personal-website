import React from 'react'
import { Link } from 'gatsby'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showTopMenu: false }
  }

  render() {
    return (
      <header className="site-header">
        <div className="site-logo">
          <div className="row center-lg center-md center-sm center-xs">
            <div className="col-lg-7 col-md-8 col-sm-10 col-xs-12">
              <div className="box">
                <h1 className="site-logo-title">
                  <Link to="/">Mateusz Górzański</Link>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <nav className="site-nav">
          <div className="row center-lg center-md center-sm center-xs">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="box">
                <button
                  id="pull-header-menu"
                  onClick={() =>
                    this.setState({ showTopMenu: !this.state.showTopMenu })
                  }
                >
                  Menu
                </button>
                <ul
                  className={
                    this.state.showTopMenu
                      ? 'site-menu header-menu site-menu-display'
                      : 'site-menu header-menu'
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
      </header>
    )
  }
}

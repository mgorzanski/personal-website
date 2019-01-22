import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'
import './flexboxgrid.css'
import './layout.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer />
      </>
    )}
  />
)

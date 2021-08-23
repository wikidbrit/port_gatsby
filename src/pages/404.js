import * as React from "react"
import { graphql, Link } from "gatsby"

// import Layout from "../components/layout"
import Seo from "../components/seo"
import Background from "../components/background"
import Nav from "../components/nav"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className='navSpace' location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Nav />
      <h1
        style={{
          margin: "100px auto",
        }}
      >
        404: Page Not Found
      </h1>
      <p>Unlucky mate, you picked a route that doesn't exist...</p>
      <div
        style={{
          margin: "60px 0",
          padding: "16px 28px ",
          borderRadius:'3px',
          border:'3px solid #00B4D6',
          width:'128px',
          textAlign:'center',
        }}
      >
        {" "}
        <Link to="/">
          Go Home
          <div className="button404"></div>
        </Link>
      </div>
      <Background />
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

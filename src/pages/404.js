import * as React from "react"
import { graphql, Link } from "gatsby"

import Seo from "../components/seo"
import Background from "../components/background"
import Nav from "../components/nav"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className='navSpace' location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Nav />
      <section style={{
        display: "flex",
        flexDirection: 'column',
        paddingTop: '100px'
      }}>
        {/* <SvgLogo style={{left: '0'}}/> */}
        <h1 style={{margin:'100px auto 15% auto', color:'white', fontSize:'30vw'}}>404</h1>
        <h3 style={{margin:'20px auto 0px auto', fontFamily: 'Source Sans Pro', color:'white'}} >Page Not Found</h3>
        <p style={{margin:'10px auto', fontFamily: 'Source Sans Pro', color:'white'}}>You have landed on a page that doesn't exist</p>
        <Link className='button404' to="/">
          Home
        </Link>
      </section>
      {/* <h1
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
      </div> */}
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

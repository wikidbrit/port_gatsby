import * as React from "react"
import { graphql } from "gatsby"
import { useEffect } from "react"

import Seo from "../components/seo"
import HeaderGrid from "../components/headerGrid"
import Footer from "../components/footer"
import About from "../components/about"
import Spacer from "../components/spacer"
import Projects from "../components/projects"
import Form from "../components/form"
import Background from "../components/background"
import Nav from "../components/nav"

import Aos from "aos"
import "aos/dist/aos.css"

const BlogIndex = ({ data }) => {
  
  useEffect(() => {
    let maxWidth = "960px"
    Aos.init({ 
      duration: 1400, 
      disable: `window.innerWidth < ${maxWidth}`,
     })
  }, [])

  return (
    <div>
      <Seo title="Home" />
      <Nav />
      <div className="navSpace">
        <HeaderGrid />
        <Spacer />
        <About />
        <Projects id="projects" data={data} />
        <Spacer />
        <Spacer />
        <Form />
        <Spacer />
        <Footer />
      </div>
      <Background />
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    allContentfulProjects {
      edges {
        node {
          slug
          title
          category
          createdAt(formatString: "de MMMM, YYYY")
          coverimage {
            id
            file {
              url
              fileName
            }
          }
        }
      }
    }
  }
`

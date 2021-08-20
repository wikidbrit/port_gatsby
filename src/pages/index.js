import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import HeaderGrid from "../components/headerGrid"
import Footer from "../components/footer"
import About from "../components/about"
import Spacer from "../components/spacer"
import Projects from "../components/projects"
import Form from "../components/form"
import Background from "../components/background"


const BlogIndex = ({ data }) => {
  return (
    <div>
      <Seo title="Home" />
      <HeaderGrid />
      <Spacer />
      <About />
      <Spacer />
      <Projects id="projects" data={data} />
      <Spacer />
      <Form />
      <Spacer />
      <Background/>
      <Footer />
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

import * as React from "react"
import { graphql } from "gatsby"

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.allContentfulProjects.edges[0].node
  const siteTitle = data.allContentfulProjects?.title || "Title"

  console.log(post.title)

  return (
    <div id="blogPost" location={location} title={siteTitle}>
      <h1>{post.title}</h1>

      <p>Testing</p>
    </div>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    allContentfulProjects(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          contentfulid
          title
          category
          overview {
            internal {
              content
            }
          }
          solution {
            internal {
              content
            }
          }
          roletext {
            internal {
              content
            }
          }
          conclusion {
            internal {
              content
            }
          }
          coverimage {
            id
            file {
              url
              fileName
            }
          }
          image1 {
            file {
              url
              fileName
            }
          }
          image2 {
            file {
              url
              fileName
            }
          }
          image3 {
            file {
              url
              fileName
            }
          }
          createdAt(formatString: "DD 'de' MMMM, YYYY")
        }
      }
    }
  }
`

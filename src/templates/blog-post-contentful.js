import * as React from "react"
import { graphql } from "gatsby"

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.allContentfulProjects.edges[0].node
  const siteTitle = data.allContentfulProjects?.title || "Title"
  const coverImageUrl = 'https:'+post.coverimage.file.url
  const coverImageAlt = post.coverimage.file.filename
  const overviewText = post.overview.internal.content
  const image1Url = 'https:'+post.image1.file.url
  const image1Alt = post.image1.file.filename
  const image2Url = 'https:'+post.image2.file.url
  const image2Alt = post.image2.file.filename
  const image3Url = 'https:'+post.image3.file.url
  const image3Alt = post.image3.file.filename
  const solutionText = post.solution.internal.content
  const roleText = post.roletext.internal.content
  const conclusionText = post.conclusion.internal.content


  return (
    <div id="blogPost" location={location} title={siteTitle}>
      <img alt={coverImageAlt} src={coverImageUrl}></img>
      <h1>{post.title}</h1>
      <p>{overviewText}</p>
      <img alt={image1Alt} src={image1Url}></img>
      <h2>Our Solution</h2>
      <p>{solutionText}</p>
      <img alt={image2Alt} src={image2Url}></img>
      <h2>My Role</h2>
      <p>{roleText}</p>
      <img alt={image3Alt} src={image3Url}></img>
      <h2>Conclusion</h2>
      <p>{conclusionText}</p>
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

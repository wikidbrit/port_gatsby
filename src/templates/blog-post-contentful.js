import * as React from "react"
import { graphql } from "gatsby"
import Spacer from "../components/spacer"
import Footer from "../components/footer"

const BlogPostContentfulTemplate = ({ data, location }) => {

  const post = data.allContentfulProjects.edges[0].node
  const siteTitle = data.allContentfulProjects?.title || "Title"
  const coverImageUrl = "https:" + post.coverimage.file.url
  const coverImageAlt = post.coverimage.file.filename
  const overviewText = post.overview.internal.content
  const image1Url = "https:" + post.image1.file.url
  const image1Alt = post.image1.file.filename
  const image2Url = "https:" + post.image2.file.url
  const image2Alt = post.image2.file.filename
  const image3Url = "https:" + post.image3.file.url
  const image3Alt = post.image3.file.filename
  const solutionText = post.solution.internal.content
  const roleText = post.roletext.internal.content
  const conclusionText = post.conclusion.internal.content

  return (
    <div id="blogPost" location={location} title={siteTitle}>
      <img className="coverImage" alt={coverImageAlt} src={coverImageUrl}></img>
      <Spacer />
      <h1>{post.title}</h1>
      <Spacer />
      <p dangerouslySetInnerHTML={{ __html: overviewText }} />
      <Spacer />
      <img className="image1" alt={image1Alt} src={image1Url}></img>
      <Spacer />
      <h2>Our Solution</h2>
      <Spacer />
      <p dangerouslySetInnerHTML={{ __html: solutionText }} />
      <Spacer />
      <img className="image2" alt={image2Alt} src={image2Url}></img>
      <Spacer />
      <h2>My Role</h2>
      <Spacer />
      <p dangerouslySetInnerHTML={{ __html: roleText }} />
      <Spacer />
      <img className="image3" alt={image3Alt} src={image3Url}></img>
      <Spacer />
      <h2>Conclusion</h2>
      <Spacer />
      <p dangerouslySetInnerHTML={{ __html: conclusionText }} />
      <Spacer />
      <Footer />
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

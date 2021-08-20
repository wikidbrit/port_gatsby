import * as React from "react"
import { graphql, Link } from "gatsby"
import Spacer from "../components/spacer"
import Footer from "../components/footer"
import Background from "../components/background"

import "../style.css"

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

  // const GitHubIcon;

  // if(post.githublink) {
  //   GitHubIcon = (
  //     <img src={}></img>
  //   )
  // }

  return (
    <div location={location} title={siteTitle}>
      <div  id="blogPost" >
      <img className="coverImage" alt={coverImageAlt} src={coverImageUrl}></img>
      <Spacer />
      <h1 className="templateh1">{post.title}</h1>
      <Spacer />
      <p
        className="overviewText templateText"
        dangerouslySetInnerHTML={{ __html: overviewText }}
      />
      <Spacer />
      <img
        className="image1 templateImage"
        alt={image1Alt}
        src={image1Url}
      ></img>
      <Spacer />
      <h2 className="templateHeader solution">Solution</h2>
      <Spacer />
      <p
        className="solutionText templateText"
        dangerouslySetInnerHTML={{ __html: solutionText }}
      />
      <Spacer />
      <img
        className="image2 templateImage"
        alt={image2Alt}
        src={image2Url}
      ></img>
      <Spacer />
      <h2 className="templateHeader">My Role</h2>
      <Spacer />
      <p
        className="roleText templateText"
        dangerouslySetInnerHTML={{ __html: roleText }}
      />
      <Spacer />
      <img
        className="image3 templateImage"
        alt={image3Alt}
        src={image3Url}
      ></img>
      <Spacer/>
      <h2 className="templateHeader conclusion">Conclusion</h2>
      <Spacer className="deskHidden" />
      <p
        className="conclusionText templateText"
        dangerouslySetInnerHTML={{ __html: conclusionText }}
      />
      <Link className="return" to="/#projects" itemProp="url">
        Return
      </Link>
      </div>
      <Footer />
      <Background />
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

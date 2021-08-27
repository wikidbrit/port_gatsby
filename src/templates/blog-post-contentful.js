import * as React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Footer from "../components/footer"
import Background from "../components/background"
import Seo from "../components/seo"
import Nav from "../components/nav"

import GitHubLogo from "../images/icons/github-01.png"
import BehanceLogo from "../images/icons/behanceLogo.png"

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.allContentfulProjects.edges[0].node
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
    <div location={location}>
      <Seo title={post.title} />
      <Nav style={{ zIndex: "1" }} />
      <div id="blogPost" style={{ zIndex: "0" }}>
        <img
          className="coverImage"
          alt={coverImageAlt}
          src={coverImageUrl}
        ></img>

        <div className="templateHeaderText">
          <p className=" templateCode buttonTag code">{"<h1>"}</p>
          <h1 className="templateh1">{post.title}</h1>

          <p className=" templateCode buttonTag code">{"</h1>"}</p>
        </div>

        <div className="overviewText ">
          <p className=" templateCodeBody right buttonTag code">{"<p>"}</p>

          <p
            className="templateText o1"
            dangerouslySetInnerHTML={{ __html: overviewText }}
          />
          <p className=" templateCodeBody right buttonTag code">{"</p>"}</p>
        </div>

        <img
          className="image1 templateImage"
          alt={image1Alt}
          src={image1Url}
        ></img>

        <h2 className="templateHeader solution">Solution</h2>

        <div className="solutionText ">
          <p className=" templateCodeBody buttonTag code">{"<p>"}</p>
          <p
            className="templateText"
            dangerouslySetInnerHTML={{ __html: solutionText }}
          />
          <p className=" templateCodeBody buttonTag code">{"</p>"}</p>
        </div>

        <img
          className="image2 templateImage"
          alt={image2Alt}
          src={image2Url}
        ></img>

        <h2 className="templateHeader role">My Part</h2>
        <div className="roleText">
          <p className=" templateCodeBody buttonTag code">{"<p>"}</p>
          <p
            className="templateText o1"
            dangerouslySetInnerHTML={{ __html: roleText }}
          />
          <p className=" templateCodeBody buttonTag code">{"</p>"}</p>
        </div>

        <img
          className="image3 templateImage"
          alt={image3Alt}
          src={image3Url}
        ></img>

        <div className=" conclusion">
          <p className=" templateCode buttonTag code">{"<h2>"}</p>
          <h2 className="conHeader">To Sum It Up</h2>
          <p className=" templateCode buttonTag code">{"</h2>"}</p>
          <p className=" templateCode buttonTag code">{"<p>"}</p>
          <p
            className="conBody templateText"
            dangerouslySetInnerHTML={{ __html: conclusionText }}
          />{" "}
          {post.githubUrl && (
            <div className="renderedIcon">
              <p>
                View the GitHub repository <br></br>
                <a href={post.githubUrl}>
                  <img
                    className="gitHubIcon"
                    src={GitHubLogo}
                    alt="github icon"
                  ></img>
                </a>
              </p>
            </div>
          )}
          {post.behanceUrl && (
            <div className="renderedIcon">
              <p>
                View the project on Behance <br></br>
                <a href={post.behanceUrl}>
                  <img
                    className="gitHubIcon"
                    src={BehanceLogo}
                    alt="behance icon"
                  ></img>
                </a>
              </p>
            </div>
          )}
          <p className=" templateCode buttonTag code">{"</p>"}</p>
        </div>

        <AniLink
          cover
          bg="linear-gradient(45deg, #0c303f, #400f41)"
          direction="right"
          className="return"
          to="/#projects"
          itemProp="url"
        >
          Return
        </AniLink>
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
          githubUrl
          behanceUrl
        }
      }
    }
  }
`

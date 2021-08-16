import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderGrid from "../components/headerGrid"
import Footer from "../components/footer"
import About from "../components/about"
import Spacer from "../components/spacer"
import Projects from "../components/projects"


const BlogIndex = ({ data }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allContentfulProjects.edges

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="All posts" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    // <Layout location={location} title={siteTitle}>
    <div>
      <Seo title="All posts" />
      <HeaderGrid />
      <Spacer />
      <About />
      <Spacer />
      <Projects />
      <Spacer />
      <Footer />
      {/* <Header /> */}
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          console.log(post.node.overview.internal.content)
          return (
            <li key={post.node.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.node.slug} itemProp="url">
                      <span itemProp="headline">{post.node.title}</span>
                    </Link>
                  </h2>
                </header>
                <section>
                  <p>{post.node.overview.internal.content}</p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    {/* </Layout> */}
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql
`
{
  allContentfulProjects {
    edges {
      node {
        slug
        title
        author
        overview {
          internal {
            content
          }
        }
      }
    }
  }
}
`

import * as React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import HeaderGrid from "../components/headerGrid"
import Footer from "../components/footer"
import About from "../components/about"
import Spacer from "../components/spacer"
import Projects from "../components/projects"

const BlogIndex = ({ data }) => {
  const posts = data.allContentfulProjects.edges

  return (
    <div>
      <Seo title="All posts" />
      <HeaderGrid />
      <Spacer />
      <About />
      <Spacer />
      <Projects />
      <Spacer />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
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
                  <p>{post.node.category}</p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <Spacer />
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
        }
      }
    }
  }
`

import React from "react"
import { Link } from "gatsby"

import Spacer from "../components/spacer"
import Line from '../components/line'

export default function projects(props) {
  const posts = props.data.allContentfulProjects.edges

  return (
    <div>
      <h2 className="percent">Projects</h2>
      <Line />
      <Spacer />
      <ol>
        {posts.map(post => {
          return (
            <li key={post.node.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="projectWrapper">
                  <h2>
                    <Link to={post.node.slug} itemProp="url">
                      <span className="projectTitle" itemProp="headline">
                      <span className="projectArrow">► </span>{post.node.title}
                      </span>
                    </Link>
                  </h2>
                  <section>
                    <p className="categoryText">{post.node.category}</p>
                    <p className="date">{post.node.createdAt}</p>
                  </section>
                </header>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

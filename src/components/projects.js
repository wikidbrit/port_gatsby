import React from "react"
import { Link } from "gatsby"

import Spacer from "../components/spacer"
import Line from "../components/line"

export default function projects(props) {
  const posts = props.data.allContentfulProjects.edges

  // const coverImageUrl = "https:" + posts.coverimage.file.url

  return (
    <div id="projects">
      <h2 className="percent projectHeader">Projects</h2>
      <Line />
      <Spacer />
      <ol>
        {posts.map(post => {
          console.log(post.node.coverimage.file.url)
          return (
            <li className="list" key={post.node.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.node.slug} itemProp="url">
                  <div
                    className="projectWrapper"
                    style={{
                      padding: "5px 25px",
                      height: "80px",
                      margin: "20px auto",
                      backgroundImage:
                        "url(https://" + post.node.coverimage.file.url + ")",
                    }}
                  >
                    <h2>
                      <span className="projectTitle" itemProp="headline">
                        {post.node.title}
                      </span>
                    </h2>
                    <p className="date">{post.node.createdAt}</p>
                  </div>
                </Link>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

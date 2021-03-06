import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Spacer from "../components/spacer"

// import Slide from "../images/transitionSlide.png"
// Need to find a way to center the cover image during the transition. 

export default function projects(props) {
  const posts = props.data.allContentfulProjects.edges

  // const coverImageUrl = "https:" + posts.coverimage.file.url

  return (
    <div id="projects">
      <div
        className="percent projectHeader"
        data-aos="fade-right"
        data-aos-once="true"
      >
        <p
          className=" buttonTag code"
          data-aos="fade-right"
          data-aos-once="true"
        >
          {"<h2>"}
        </p>
        <h2
          className="twoper"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
        >
          Projects
        </h2>
        <p
          className=" buttonTag code"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="600"
        >
          {"</h2>"}
        </p>
      </div>

      <Spacer />
      <ol>
        {posts.map(post => {
          return (
            <li
              className="list"
              key={post.node.slug}
              data-aos="fade-right"
              data-aos-once="true"
            >
              <p
                className=" article code"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="300"
              >
                {"<article>"}
              </p>
              <article
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="600"
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <AniLink
                  cover 
                  bg="linear-gradient(45deg, #0c303f, #400f41)"
                  // bg={"url(" + Slide + ")"}
                  direction="left"
                  to={post.node.slug}
                  itemProp="url"
                >
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    data-aos-delay="300"
                    className="projectWrapper"
                    style={{
                      padding: "5px 25px",
                      height: "80px",
                      margin: "20px auto",
                      backgroundImage:
                        "url(https://" + post.node.coverimage.file.url + ")",
                      backgroundPosition: "center",
                    }}
                  >
                    <h2>
                      <span className="projectTitle" itemProp="headline">
                        {post.node.title}
                      </span>
                    </h2>
                    <p className="date">{post.node.createdAt}</p>
                  </div>
                </AniLink>
              </article>
              <p
                className="article code"
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="600"
              >
                {"</article>"}
              </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

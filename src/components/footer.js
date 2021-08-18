import React from "react"

import Line from "../components/line"

export default function footer() {
  return (
    <footer>
      <div className="footwrap percent">
        <a href="https://github.com/wikidbrit" target="_blank" rel="noreferrer">
          GitHub /
        </a>
        <p> </p>
        <a
          href="https://www.instagram.com/pfwikid/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram /
        </a>
        <p> </p>
        <a
          href="https://www.linkedin.com/in/pflemingonline/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <Line />
      <p className="percent">©2021 Paul Fleming</p>
      <p className="percent references">
        Made with{" "}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        <br></br>
        Content managed by{" "}
        <a href="https://www.contentful.com/" target="_blank" rel="noreferrer">
          Contentful
        </a>
        <br></br>
        Form powered by{" "}
        <a href="https://getform.io/" target="_blank" rel="noreferrer">
          GetForm
        </a>
      </p>
    </footer>
  )
}

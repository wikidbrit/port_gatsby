import React from "react"

import GitHubIcon from '../images/icons/github-01.png'
import InstagramIcon from '../images/icons/instagram-01.png'
import LinkedInIcon from '../images/icons/linkedin-01.png'

export default function footer() {
  return (
    <footer>
      <div className="footwrap percent">
        <a
          href="https://github.com/wikidbrit/port_gatsby"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Link to Git hub Profile" src={GitHubIcon} style={{height:'30px', margin:'5px'}}></img>
        </a>
        <a
          href="https://www.instagram.com/pfwikid/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="link to instagram account" src={InstagramIcon} style={{height:'30px', margin:'5px'}}></img>
        </a>
        <a
          href="https://www.linkedin.com/in/pflemingonline/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="link to linked in account" src={LinkedInIcon} style={{height:'30px', margin:'5px'}}></img>
        </a>
      </div>
      <p className="percent">© 2021 Paul Fleming</p>
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

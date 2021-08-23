import React from "react"
import { Link } from "gatsby"
// import Logo from "../components/logo"
import SvgLogo from "../components/logoSvg"
import Resume from "../components/pdfs/paulFleming_resume.pdf"

import "/src/styles/svgLogoStyle.css"

export default function headerGrid() {
  return (
    <div className="wrapper">
      <div className="section_1">
        <p className="outerTag code bottom">{"<!DOCTYPE HTML>"}</p>
        <p className="bodyTag code">{"<body>"}</p>
      </div>
      <div className="headerTextGrid">
        <p className="innerTag code ">{"<h1 className='getTheirAttention'>"}</p>
        <h1 className="landingText">
          Hey!<span className="wave"></span>
          <br></br>I'm
          <span className="paulText"> Paul,</span>
          <br></br>Web Developer<br></br>&amp; Designer.
        </h1>
        <p className="innerTag code">{"</h1>"}</p>
      </div>

      <div className="buttonArea">
        <p className="buttonTag code">
          {"<button className='pressAllTheButtons'>"}
        </p>
        <div className="buttons">
          {" "}
          <Link to="#contact" className="contactButton landingButton">
            CONTACT
          </Link>
          <a href={Resume} download className="resumeButton landingButton">RESUME</a>
        </div>

        <p className=" buttonTag code">{"</button>"}</p>
      </div>
      {/* <SvgLogo className="display2" /> */}
      {/* <Logo /> */}
    </div>
  )
}

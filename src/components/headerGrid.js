import React from "react"
import SvgLogo from "../components/logoSvg"


import "/src/styles/svgLogoStyle.css"



export default function headerGrid() {


  return (
    <div className="wrapper">
      <div className="section_1">
        <p className="outerTag code bottom">{"<!DOCTYPE HTML>"}</p>
        <p className="bodyTag code">{"<body>"}</p>
      </div>
      <SvgLogo />
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
          <a href="#contact">
            <button className="contactButton">
              CONTACT<span className="icon-right1"></span>
              <span className="icon-right1 after"></span>
            </button>
          </a>
          <a href="https://www.dropbox.com/s/zrs00ospiod5jfe/flemingPaul_Resume.pdf?dl=0" target="_blank" rel="noreferrer" className="landingButton">
            <button className="resumeButton">
              RESUME<span className="icon-right2"></span>
              <span className="icon-right2 after"></span>
            </button>
          </a>
        </div>

        <p className=" buttonTag code">{"</button>"}</p>
      </div>
    </div>
  )
}

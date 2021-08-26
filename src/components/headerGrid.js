import React from "react"
import SvgLogo from "../components/logoSvg"
import { useEffect } from "react"

import "/src/styles/svgLogoStyle.css"

import Aos from "aos"
import "aos/dist/aos.css"

export default function HeaderGrid() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      dataAosOnce: true,
    })
  }, [])

  return (
    <div className="wrapper">
      <div className="section_1" data-aos="fade-right">
        <p className="outerTag code bottom">{"<!DOCTYPE HTML>"}</p>
        <p className="bodyTag code">{"<body>"}</p>
      </div>
      <SvgLogo data-aos="fade-down-right" />
      <div className="headerTextGrid">
        <p className="innerTag code" data-aos="fade-right" data-aos-delay="300">
          {"<h1 className='getTheirAttention'>"}
        </p>
        <h1 className="landingText" data-aos="fade-right" data-aos-delay="600">
          Hey!<span className="wave"></span>
          <br></br>I'm
          <span className="paulText"> Paul,</span>
          <br></br>Web Developer<br></br>&amp; Designer.
        </h1>
        <p className="innerTag code" data-aos="fade-right" data-aos-delay="900">
          {"</h1>"}
        </p>
      </div>

      <div className="buttonArea" data-aos="fade-right" data-aos-delay="1200">
        <p className="buttonTag code" style={{ marginTop: "10px" }}>
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
          <a
            href="https://www.dropbox.com/s/zrs00ospiod5jfe/flemingPaul_Resume.pdf?dl=0"
            target="_blank"
            rel="noreferrer"
            className="landingButton"
          >
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

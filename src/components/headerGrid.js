import React from "react"
import Logo from "../components/logo"

export default function headerGrid() {
  return (
    <div className="wrapper">
      <div className="section_1">
        <p className="outerTag code">{"<!DOCTYPE HTML>"}</p>
        <p className="bodyTag code">{"<body>"}</p>
      </div>
      <div className="headerTextGrid">
        <p className="innerTag code ">{"<h1>"}</p>
        <h1 className="landingText">
          Hey!<span className="wave"></span>
          <br></br>I'm <span className="paul">Paul,</span>
          <br></br>a Web Developer<br></br>&amp; Designer.
        </h1>
        <p className="innerTag code">{"</h1>"}</p>
      </div>
      <div className="buttonArea">
        <p className="innerTag code">{"<button>"}</p>
        <a href="#contact" className="contactButton">
          CONTACT
        </a>
        <p className="innerTag code">{"</button>"}</p>
      </div>
      <Logo />
    </div>
  )
}

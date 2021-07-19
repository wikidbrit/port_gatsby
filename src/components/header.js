import React from 'react'
import Logo  from "../components/logo"

export default function header() {
    return (
        <header>    
            
            <div className="landingLeft">      
            <p className="outerTag code">{'<!DOCTYPE HTML>'}</p>
            <p className="bodyTag code">{'<body>'}</p>
            <p className="innerTag code">{'<h1>'}</p>
            <h1 className="landingText">Hey!<span className="wave"></span><br></br>I'm <span className="paul">Paul</span><br></br>a Web Developer<br></br>&amp; Designer</h1>
            <p className="innerTag code">{'</h1>'}</p>
            <p className="innerTag code">{'<button>'}</p>
            <button className="contactButton">Contact</button>
            <p className="innerTag code">{'</button>'}</p>
            
            </div>

            <Logo />
        </header>
    )
}

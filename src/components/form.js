import React from "react"

import Spacer from "../components/spacer"

export default function form() {
  return (
    <div id="contact" className="formContainer">
      <p className=" formTag code">{"<h2>"}</p>
      <h2 className="percent formHeader">Reach Out</h2>
      <p className=" formTag  code">{"<h2>"}</p>
      <p className=" formTag  code">{"<p>"}</p>
      <p className="formSubheader display">
        Please get in touch if I can help you reach your vision
      </p>
      <p className=" formTag  code">{"</p>"}</p>
      <Spacer />
      <p className=" formTag  code">{"<form className='youKnowYouWantTo'>"}</p>

      <form
        name="contact"
        className="formBox"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="contact" value="contact" />
        <p>
          <label htmlFor="name" className="inputField"></label> <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </p>
        <p>
          <label htmlFor="email" className="inputField"></label> <br />
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
        </p>
        <p>
          <label htmlFor="message" className="inputField messageField"></label>{" "}
          <br />
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </p>
        <p>
          <input type="submit" value="SEND" className="formButton" />
        </p>
      </form>
      <p className=" formTag  code">{"</form>"}</p>
    </div>
  )
}

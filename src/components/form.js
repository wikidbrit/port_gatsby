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
        className="formBox"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="contact"
          value="contact"
          data-netlify="true"
        />
        <input
          className="inputField nameField"
          type="text"
          data-netlify="true"
          placeholder="Name"
          name="contact"
          required
        />
        <input
          className="inputField emailField"
          type="Email"
          data-netlify="true"
          placeholder="Email"
          name="contact"
          required
        />
                <input
          className="inputField emailField"
          type="Email"
          data-netlify="true"
          placeholder="Email"
          name="contact"
          required
        />
        <textarea
          className="inputField messageField"
          type="text"
          data-netlify="true"
          placeholder="Message"
          name="contact"
          required
          minLength="20"
        />
        <button className="formButton" name="contact" type="submit">
          SEND
        </button>
      </form>
      <p className=" formTag  code">{"</form>"}</p>
    </div>
  )
}

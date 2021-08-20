import React from "react"

import Spacer from "../components/spacer"
import Line from "../components/line"

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
      <Line />
      <Spacer />
      <p className=" formTag  code">{"<form className='youKnowYouWantTo'>"}</p>
      <form
        className="formBox"
        action="https://getform.io/f/a6aa5e0f-9b6d-4a9c-b4c1-61b0c22126d7"
        method="POST"
      >
        <input
          className="inputField nameField"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="inputField emailField"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="inputField messageField"
          type="text"
          placeholder="Message"
          name="message"
          required
          minLength="20"
        />
        <button className="formButton" type="submit">
          SEND
        </button>
      </form>
      <p className=" formTag  code">{"</form>"}</p>
    </div>
  )
}

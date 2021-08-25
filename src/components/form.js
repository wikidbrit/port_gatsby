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

      <form name="contact" method="post" className="formBox" data-netlify="true">
        <input type="hidden" name="contact" value="contact" />
        <p>
          <label htmlFor="name" lassName="inputField"></label> <br />
          <input type="text" id="name" name="contact" placeholder='Name' required />
        </p>
        <p>
          <label htmlFor="email" className="inputField"></label> <br />
          <input type="email" id="email"  placeholder='Email'  name="contact" required />
        </p>
        <p>
          <label htmlFor="message" className="inputField messageField"></label> <br />
          <textarea id="message" placeholder='Message'  name="contact" required></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" className="formButton"/>
        </p>
      </form>

      {/* <form
        className="formBox"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="contact" value="contact" />
        <input
          className="inputField nameField"
          type="text"
          placeholder="Name"
          name="contact"
          required
        />
        <input
          className="inputField emailField"
          type="Email"
          placeholder="Email"
          name="contact"
          required
        />
        <input
          className="inputField emailField"
          type="Email"
          placeholder="Email"
          name="contact"
          required
        />
        <textarea
          className="inputField messageField"
          type="text"
          placeholder="Message"
          name="contact"
          required
          minLength="20"
        />
        <button className="formButton" type="submit">
          SEND
        </button>
      </form> */}
      <p className=" formTag  code">{"</form>"}</p>
    </div>
  )
}

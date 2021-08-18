import React from "react"

import Spacer from "../components/spacer"
import Line from '../components/line'

export default function form() {
  return (
    <div className="formContainer">
      <h2 className="percent">Contact Me</h2>
      <Line />
      <Spacer />
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
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

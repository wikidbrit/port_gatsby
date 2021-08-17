import React from 'react'

export default function form() {
    return (
    <div className="formContainer">
        <form className="formBox" action="https://getform.io/f/a6aa5e0f-9b6d-4a9c-b4c1-61b0c22126d7" method="POST">
            <input className="inputField nameField" type="text" placeholder="Name" name="name"/>
            <input className="inputField emailField"  type="email" placeholder="Email" name="email"/>
            <input className="inputField messageField"  type="text" placeholder="Message" name="message"/>
        <button type="submit">Send</button>
        </form>
    </div>
    )
}

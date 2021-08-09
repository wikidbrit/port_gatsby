import React from 'react'
import "../styles/style2.css"
import ProfileImage from "../images/profileimage2.png"

export default function about() {
    return (
        <div className="aboutWrapper">
            <h2 className="whoIAm">Who I am</h2>
            <img className="paul" src={ProfileImage} alt="Paul Fleming Posing in a Circle"></img>
            <p className="aboutText">I am a Front End Developer and Digital Designer currently studying in Stockholm, Sweden. I enjoy working with design and seeing through what I create.
                <br></br><br></br>
                    I am a self driven and motivated to learn more about the skills needed to be not only sucessful, but a leader in this industry.
                <br></br><br></br>
                    My hobbies include watching science fiction, skateboarding, following the aerospace industry, and watching esports. </p>
        </div>
    )
}

import React from 'react'

import "../styles/style2.css"
import ProfileImage from "../images/profileimage2.png"
import Line from '../components/line'

export default function about() {
    return (
        <div className="aboutWrapper">
            <h2 className="whoIAm percent">Who I am</h2>
            <Line />
            <img className="paul" src={ProfileImage} alt="Paul Fleming Posing in a Circle"></img>
            <p className="aboutText">I am a Digital Designer and aspiring Front End Developer currently studying in Stockholm, Sweden. 
                <br></br><br></br>
                    I am a self driven and motivated to learn more about the skills needed to be not only successful, but a leader in this industry.
                <br></br><br></br>
                    My hobbies include watching science fiction, skateboarding, cycling, and following the aerospace industry. </p>
        </div>
    )
}

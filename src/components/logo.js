import React from 'react'
import LogoTop from '../images/LogoLarge-01.png'
import LogoMiddle from '../images/LogoLarge-02.png'
import LogoBottom from '../images/LogoLarge-03.png'
import BlurGradient from '../images/LogoLarge-03.png'

export default function logo() {
    return (
        <div className="landingRight">
            <img className="logoTop" src={LogoTop}></img>
            <img className="logoMiddle" src={LogoMiddle}></img>
            <img className="logoBottom" src={LogoBottom}></img>
            <img className="blurGradient" src={BlurGradient}></img>
            <img className="blurGradient2" src={BlurGradient}></img>
        </div>
    )
}

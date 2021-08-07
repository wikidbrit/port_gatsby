import React from 'react'
import LogoTop from '../images/LogoLarge-01.png'
import LogoMiddle from '../images/LogoLarge-02.png'
import LogoBottom from '../images/LogoLarge-03.png'
import WhiteOutline from '../images/LogoLarge-04.png'

export default function logo() {
    return (
        <div className="landingRight">
            <img className="logoTop" src={LogoTop} alt="part of the logo stack"></img>
            <img className="outlineMiddle" src={WhiteOutline} alt="part of the logo stack"></img>
            <img className="blurGradient" src={LogoBottom} alt="part of the logo stack"></img>
            <img className="logoMiddle" src={LogoMiddle} alt="part of the logo stack"></img>
            
            <img className="logoBottom" src={LogoBottom} alt="part of the logo stack"></img>
            <img className="outlineBottom" src={WhiteOutline} alt="part of the logo tack"></img>
            <img className="blurGradient2" src={LogoBottom} alt="part of the logo stack"></img>
        </div>
    )
}

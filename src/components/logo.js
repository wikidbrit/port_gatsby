import React from "react"

import AngledTop from "../images/angledTop.png"
import AngledMiddle from "../images/angledMiddle.png"
import AngledBottom from "../images/angledBottom.png"

export default function logo() {
  return (
    <div className="landingRight">
      <img className="angledTop" alt={" "} src={AngledTop}></img>
      <img className="angledMiddle" alt={" "} src={AngledMiddle}></img>
      <img className="angledBottom" alt={" "} src={AngledBottom}></img>
    </div>
  )
}

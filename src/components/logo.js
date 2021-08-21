import React from "react"
import { useState, useEffect } from "react"

import AngledTop from "../images/angledTop.png"
import AngledMiddle from "../images/angledMiddle.png"
import AngledBottom from "../images/angledBottom.png"

import "../styles/logoAnimate.css"

function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  })

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener("mousemove", handle)
    return () => document.removeEventListener("mousemove", handle)
  })

  return mousePosition
}

const angledTop = {
  alignSelf: "center",
  position: "absolute",
  height: "60vw",
  maxHeight: "900px",
  transform: "translate(-10%, 5%) rotate(0deg)",
  zIndex: "3",
}

const angledMiddle = {
  alignSelf: "center",
  position: "absolute",
  height: "60vw",
  maxHeight: "900px",
  transform: "translate(-10%, 5%) rotate(0deg)",
  zIndex: "2",
  mixBlendMode: "overlay",
  opacity: "1",
}

const angledBottom = {
  alignSelf: "center",
  position: "absolute",
  height: "60vw",
  maxHeight: "900px",
  transform: "translate(-10%, 5%) rotate(0deg)",
  zIndex: "1",
}

export default function Logo() {
  const { x, y } = useMouse()

  return (
    <div className="landingRight">
      <img
        style={angledTop}
        className="angledTop"
        alt={" "}
        src={AngledTop}
      ></img>
      <img
        style={angledMiddle}
        className="angledMiddle"
        alt={" "}
        src={AngledMiddle}
      ></img>
      <img
        style={angledBottom}
        className="angledBottom"
        alt={" "}
        src={AngledBottom}
      ></img>
      <p>{x}</p>
      <br></br>
      <p>" " {y}</p>
    </div>
  )
}

import React from "react"
import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import styled from "styled-components"

import "/src/styles/svgLogoStyle.css"

const MouseArea = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 500;
`

export default function LogoSvg(props) {
  const [windowHeight, setWindowHeight] = useState()
  const [windowWidth, setWindowWidth] = useState()
  const x = useMotionValue(windowWidth)
  const y = useMotionValue(windowHeight)

  const topLayerY = useTransform(y, [0, windowHeight], [-20, 20])
  const topLayerX = useTransform(x, [0, windowWidth], [-20, 20])

  const middleLayerY = useTransform(y, [0, windowHeight], [-15, 15])
  const middleLayerX = useTransform(x, [0, windowWidth], [-15, 15])

  const bottomLayerY = useTransform(y, [0, windowHeight], [-10, 10])
  const bottomLayerX = useTransform(x, [0, windowWidth], [-10, 10])

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateWindowDimensions)
    updateWindowDimensions()
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [])

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (

    <div className="svgContainer">
      <MouseArea onMouseMove={handleMouse}></MouseArea>
      {/* Top Aesthetic Gradient Layer */}
      <motion.svg
        style={{
          zIndex: "10",
          translateY: topLayerY,
          translateX: topLayerX,
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <linearGradient
            id="c"
            x1={211.38298}
            y1={153.84769}
            x2={164.33863}
            y2={474.44622}
            gradientTransform="rotate(-4.337 -1754.573 2100.587)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#c3dee3" />
          </linearGradient>
          <linearGradient
            id="d"
            x1={351.9556}
            y1={161.9516}
            x2={323.35}
            y2={356.89346}
            xlinkHref="#c"
          />
        </defs>
        <g opacity={0.75}>
          <path
            fill="url(#c)"
            d="M3.337 339.431L58.52 335.246 90.582 11.898 35.399 16.084 3.337 339.431z"
          />
          <path
            d="M264.06 93.397c-6.63-6.92-10.915-16.16-12.738-27.465l-.44-2.585-.087.003a77.602 77.602 0 00-5.837-17.412 65.054 65.054 0 00-30.99-31.339c-14.039-6.937-31.11-9.7-50.741-8.21L132.01 8.755l-5.33 53.749 31.728-2.407c8.022-.608 15.007.736 20.762 3.995a29.28 29.28 0 0112.832 15.005c.372.923.714 1.912 1.075 3.11l.047.155.062.147a37.37 37.37 0 0011.852 15.59l3.039 2.332-2.991 2.392a66.621 66.621 0 00-15.728 18.228l-.062.105-.054.11a50.965 50.965 0 01-1.797 3.402 47.909 47.909 0 01-15.472 16.39 45.007 45.007 0 01-21.243 7.034l-32.782 2.487-5.33 53.747 30.162-2.288c19.722-1.496 37.721-6.92 53.496-16.121a111.131 111.131 0 0038.351-36.963 113.253 113.253 0 0010.847-22.286l1.168-3.179.062.031 1.283-2.821a75.895 75.895 0 0116.003-23.081l2.128-2.076z"
            fill="url(#d)"
          />
        </g>
      </motion.svg>
      {/* Top Main Layer */}
      <motion.svg
        style={{
          zIndex: "9",
          translateY: topLayerY,
          translateX: topLayerX,
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <style>{".topMain{fill:#fff}"}</style>
        </defs>
        <path
          className="topMain"
          d="M32.663 13.283L93.92 8.637 61.257 338.047 0 342.693 32.663 13.283z"
        />
        <path
          className="topMain"
          d="M254.268 65.358l-.026-.014v.002a81.196 81.196 0 00-6.578-20.702 68.544 68.544 0 00-32.367-32.734Q193.406 1.092 163 3.397l-33.727 2.558-5.93 59.811 35.292-2.677q11.177-.847 19.057 3.615A26.236 26.236 0 01189.22 80.22a34.79 34.79 0 011.072 3.144 40.74 40.74 0 0012.92 17.117 69.34 69.34 0 00-16.565 19.263 49.679 49.679 0 01-1.795 3.416 44.725 44.725 0 01-14.505 15.377 41.85 41.85 0 01-19.844 6.565l-35.292 2.677-5.93 59.81 33.726-2.559q30.401-2.305 54.78-16.521a113.586 113.586 0 0039.375-37.95 115.807 115.807 0 0011.145-22.902l.05.025q7.402-19.976 22.55-32.193-13.476-10.225-16.639-30.131z"
        />
      </motion.svg>
      {/* Top Gradient Blur */}
      <motion.svg
        style={{
          zIndex: "8",
          translateY: topLayerY,
          translateX: topLayerX,
          filter: "blur(15px)",
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <linearGradient
            id="e"
            x1={212.75413}
            y1={9.87043}
            x2={-41.62138}
            y2={264.24594}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff00de" />
            <stop offset={1} stopColor="#00afd1" />
          </linearGradient>
          <linearGradient
            id="f"
            x1={233.50687}
            y1={30.62318}
            x2={-20.86864}
            y2={284.99869}
            xlinkHref="#e"
          />
        </defs>
        <path
          fill="url(#e)"
          d="M3.337 339.431L58.52 335.246 90.582 11.898 35.399 16.084 3.337 339.431z"
        />
        <path
          d="M264.06 93.397c-6.63-6.92-10.915-16.16-12.738-27.465l-.44-2.585-.087.003a77.602 77.602 0 00-5.837-17.412 65.054 65.054 0 00-30.99-31.339c-14.039-6.937-31.11-9.7-50.741-8.21L132.01 8.755l-5.33 53.749 31.728-2.407c8.022-.608 15.007.736 20.762 3.995a29.28 29.28 0 0112.832 15.005c.372.923.714 1.912 1.075 3.11l.047.155.062.147a37.37 37.37 0 0011.852 15.59l3.039 2.332-2.991 2.392a66.621 66.621 0 00-15.728 18.228l-.062.105-.054.11a50.965 50.965 0 01-1.797 3.402 47.909 47.909 0 01-15.472 16.39 45.007 45.007 0 01-21.243 7.034l-32.782 2.487-5.33 53.747 30.162-2.288c19.722-1.496 37.721-6.92 53.496-16.121a111.131 111.131 0 0038.351-36.963 113.253 113.253 0 0010.847-22.286l1.168-3.179.062.031 1.283-2.821a75.895 75.895 0 0116.003-23.081l2.128-2.076z"
          fill="url(#f)"
        />
      </motion.svg>
      {/* MiddleOverlay */}
      <motion.svg
        style={{
          zIndex: "7",
          translateY: middleLayerY,
          translateX: middleLayerX,
          transition: ".3s ease-out",
          mixBlendMode:'overlay',
          filter: 'drop-shadow(inset 0px 0px 24px 5px #FFFFFF)',     
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <style>{".cls-3{fill:#ededed"}</style>

        </defs>
        <g
          style={{
            isolation: "isolate",
          }}
        >
          <g data-name="Layer 1">
            <path
              className="cls-3"
              d="M42.757 33.81L103.786 26.776 84.009 357.21 22.98 364.244 42.757 33.81z"
            />
            <path
              className="cls-3"
              d="M266.227 77.194l-.026-.012v.001a81.196 81.196 0 00-7.382-20.429A68.544 68.544 0 00225.2 25.31q-22.297-9.955-52.59-6.465l-33.6 3.872-3.591 59.997 35.16-4.052q11.135-1.284 19.183 2.867a26.236 26.236 0 0112.048 13.056c.448.998.834 2.039 1.193 3.1a40.74 40.74 0 0013.58 16.6 69.34 69.34 0 00-15.802 19.894 49.68 49.68 0 01-1.66 3.484 44.725 44.725 0 01-13.893 15.932 41.85 41.85 0 01-19.573 7.335l-35.16 4.052-3.591 59.995 33.6-3.872q30.288-3.491 54.093-18.648a113.586 113.586 0 0037.864-39.459 115.807 115.807 0 0010.242-23.318l.05.022q6.618-20.25 21.278-33.049-13.865-9.69-17.803-29.458z"
            />
          </g>
        </g>
      </motion.svg>
      {/* Middle Stroke Layer */}
      <motion.svg
        style={{
          zIndex: "6",
          translateY: middleLayerY,
          translateX: middleLayerX,
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <style>
            {".middleStroke{fill:none;stroke:#fff;stroke-miterlimit:10}"}
          </style>
        </defs>
        <path
          className="middleStroke"
          d="M42.757 33.81L103.786 26.776 84.009 357.21 22.98 364.244 42.757 33.81z"
        />
        <path
          className="middleStroke"
          d="M266.227 77.194l-.026-.012v.001a81.196 81.196 0 00-7.382-20.429A68.544 68.544 0 00225.2 25.31q-22.297-9.955-52.59-6.465l-33.6 3.872-3.591 59.997 35.16-4.052q11.135-1.284 19.183 2.867a26.236 26.236 0 0112.048 13.056c.448.998.834 2.039 1.193 3.1a40.74 40.74 0 0013.58 16.6 69.34 69.34 0 00-15.802 19.894 49.68 49.68 0 01-1.66 3.484 44.725 44.725 0 01-13.893 15.932 41.85 41.85 0 01-19.573 7.335l-35.16 4.052-3.591 59.995 33.6-3.872q30.288-3.491 54.093-18.648a113.586 113.586 0 0037.864-39.459 115.807 115.807 0 0010.242-23.318l.05.022q6.618-20.25 21.278-33.049-13.865-9.69-17.803-29.458z"
        />
      </motion.svg>
      {/* Back Gradient Layer */}
      <motion.svg
        style={{
          zIndex: "5",
          translateY: bottomLayerY,
          translateX: bottomLayerX,
          filter: "blur(10px)",
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <linearGradient
            id="a"
            x1={285.38236}
            y1={312.68609}
            x2={-21.07225}
            y2={619.1407}
            gradientTransform="rotate(-8.766 -1733.13 539.52)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff00de" />
            <stop offset={1} stopColor="#00afd1" />
          </linearGradient>
          <linearGradient
            id="b"
            x1={314.03122}
            y1={341.33495}
            x2={7.57661}
            y2={647.78956}
            xlinkHref="#a"
          />
        </defs>
        <path
          fill="url(#a)"
          d="M51.968 49.578L112.684 40.217 105.549 371.165 44.833 380.526 51.968 49.578z"
        />
        <path
          d="M276.932 84.39l-.026-.011a81.197 81.197 0 00-8.157-20.13 68.544 68.544 0 00-34.797-30.139q-22.662-9.095-52.799-4.45l-33.428 5.154-1.296 60.09 34.98-5.393q11.078-1.708 19.28 2.132a26.236 26.236 0 0112.537 12.586c.486.98.912 2.005 1.311 3.052a40.74 40.74 0 0014.203 16.07 69.34 69.34 0 00-15.029 20.483 49.68 49.68 0 01-1.525 3.544 44.725 44.725 0 01-13.275 16.452 41.85 41.85 0 01-19.278 8.077l-34.98 5.393-1.296 60.089 33.429-5.154q30.132-4.646 53.34-20.701a113.586 113.586 0 0036.329-40.877 115.807 115.807 0 009.343-23.693l.051.02q5.839-20.487 20-33.838-14.226-9.153-18.917-28.756z"
          fill="url(#b)"
        />
      </motion.svg>
      {/* Back Stroke Layer */}
      <motion.svg
        style={{
          zIndex: "4",
          translateY: bottomLayerY,
          translateX: bottomLayerX,
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <style>
            {".backStroke{fill:none;stroke:#fff;stroke-miterlimit:10}"}
          </style>
        </defs>
        <path
          className="backStroke"
          d="M51.968 49.578L112.684 40.217 105.549 371.165 44.833 380.526 51.968 49.578z"
        />
        <path
          className="backStroke"
          d="M276.932 84.39l-.026-.011a81.197 81.197 0 00-8.157-20.13 68.544 68.544 0 00-34.797-30.139q-22.662-9.095-52.799-4.45l-33.428 5.154-1.296 60.09 34.98-5.393q11.078-1.708 19.28 2.132a26.236 26.236 0 0112.537 12.586c.486.98.912 2.005 1.311 3.052a40.74 40.74 0 0014.203 16.07 69.34 69.34 0 00-15.029 20.483 49.68 49.68 0 01-1.525 3.544 44.725 44.725 0 01-13.275 16.452 41.85 41.85 0 01-19.278 8.077l-34.98 5.393-1.296 60.089 33.429-5.154q30.132-4.646 53.34-20.701a113.586 113.586 0 0036.329-40.877 115.807 115.807 0 009.343-23.693l.051.02q5.839-20.487 20-33.838-14.226-9.153-18.917-28.756z"
        />
      </motion.svg>
      {/* Back Gradient Blur */}
      <motion.svg
        style={{
          zIndex: "3",
          translateY: bottomLayerY,
          translateX: bottomLayerX,
          transition: ".3s ease-out",
        }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 296.09057 381.31465"
        {...props}
      >
        <defs>
          <linearGradient
            id="a"
            x1={285.38236}
            y1={312.68609}
            x2={-21.07225}
            y2={619.1407}
            gradientTransform="rotate(-8.766 -1733.13 539.52)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff00de" />
            <stop offset={1} stopColor="#00afd1" />
          </linearGradient>
          <linearGradient
            id="b"
            x1={314.03122}
            y1={341.33495}
            x2={7.57661}
            y2={647.78956}
            xlinkHref="#a"
          />
        </defs>
        <path
          fill="url(#a)"
          d="M51.968 49.578L112.684 40.217 105.549 371.165 44.833 380.526 51.968 49.578z"
        />
        <path
          d="M276.932 84.39l-.026-.011a81.197 81.197 0 00-8.157-20.13 68.544 68.544 0 00-34.797-30.139q-22.662-9.095-52.799-4.45l-33.428 5.154-1.296 60.09 34.98-5.393q11.078-1.708 19.28 2.132a26.236 26.236 0 0112.537 12.586c.486.98.912 2.005 1.311 3.052a40.74 40.74 0 0014.203 16.07 69.34 69.34 0 00-15.029 20.483 49.68 49.68 0 01-1.525 3.544 44.725 44.725 0 01-13.275 16.452 41.85 41.85 0 01-19.278 8.077l-34.98 5.393-1.296 60.089 33.429-5.154q30.132-4.646 53.34-20.701a113.586 113.586 0 0036.329-40.877 115.807 115.807 0 009.343-23.693l.051.02q5.839-20.487 20-33.838-14.226-9.153-18.917-28.756z"
          fill="url(#b)"
        />
      </motion.svg>
    </div>
  )
}

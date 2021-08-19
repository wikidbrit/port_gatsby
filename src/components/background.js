import React from 'react'

export default function background() {
    return (
        <div className="background" style={{
            height:"100vh",
            width:"100vw",
            background: "linear-gradient(45deg, #0C303F, #400F41)",
            position:"fixed",
            left: 0,
            top: 0,
            zIndex: -1,
        }}>
            
        </div>
    )
}

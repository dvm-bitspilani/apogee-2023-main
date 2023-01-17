import React, { useEffect, useRef, useState } from 'react'
import "../CSS/Switch.css"

function Switch() {
    let switch1 = useRef(null)
    let switch2 = useRef(null)
    function toggleActive() {
    
        switch2.classList.toggle('active')
        switch1.classList.toggle('active')
    }
    return (
        <div className='switchContainer'>
            <div ref={el => switch1 = el} className='switch active' onClick={toggleActive}>2D</div>
            <div ref={el => switch2 = el} className="switch" onClick={toggleActive}>Explore 3D</div>
        </div>
    )
}

export default Switch
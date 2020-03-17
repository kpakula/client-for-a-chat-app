import React from 'react'

// import onIcon from '../../icons/on.png'
// import offIcon from '../../icons/off.png'

import './Bar.css'

export default function Bar({ room }) {
    return (
        <div className="info">
            <div className="leftInnerContainer">
                <img className="onlineIcon"  alt="on"/>
                <h4>{room}</h4>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img  alt="off"/></a>
            </div>
        </div>
    )
}

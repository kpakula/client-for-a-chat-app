import React from 'react'

import onIcon from '../../icons/on.png'
import offIcon from '../../icons/off.png'

import './Bar.css'

export default function Bar({ room }) {
    return (
        <div className="info">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onIcon} alt="on"/>
                <h4>{room}</h4>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={offIcon} alt="off"/></a>
            </div>
        </div>
    )
}

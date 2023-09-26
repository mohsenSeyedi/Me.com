import React from 'react'
import "./Box.css"

export default function Box({title , year}) {
  return (
    <div className="box">
        <span>{year}</span>
        <h4>{title}</h4>
        <h6>CAMBRIDGE UNIVERSITY</h6>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    </div>
  )
}


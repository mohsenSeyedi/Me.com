import React from 'react'
import "./Box.css"

export default function Box({title , icon}) {
  return (
    <div className="box-services">
        <span className="icon">
            <i>{icon}</i>
        </span>
        <div className="desc">
            <h4>{title}</h4>
            <hr/>
        </div>
    </div>
  )
}

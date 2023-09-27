import React from 'react'
import "./Progress.css"

export default function Progress({title , percent , width}) {
  return (
    <div className="animate-box">
        <div className="animate-box-text">
          <span>{title}</span>
          <span>{percent}</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{width: `${width}`}}></div>
        </div>
    </div>
  )
}

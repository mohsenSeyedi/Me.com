import React from 'react'
import "./Skills.css"
import Progress from './Progress'

export default function Skills() {
  return (
    <div className="skills">
    <div className="skills-container">
        <div className="skills-head">
            <h4 className="section-text-head">My skills</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="skills-boxes">
          <Progress width={"50%"} title="Photoshop" percent="50%"></Progress>
          <Progress width={"75%"} title="js" percent="75%"></Progress>
          <Progress width={"92%"} title="HTML" percent="92%"></Progress>
          <Progress width={"90%"} title="CSS" percent="90%"></Progress>
          <Progress width={"80%"} title="Tailwind" percent="80%"></Progress>
          <Progress width={"30%"} title="React" percent="30%"></Progress>
        </div>
    </div>
</div>
  )
}

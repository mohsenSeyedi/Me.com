import React from 'react'
import Progress from './Progress'

export default function Skills() {
  return (
    <div id="skills" className="w-full mt-40 flex items-center justify-center">
    <div className="w-[95%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <h4 className="header-text before:content-['Myskills'] before:left-[-5rem] before:mt-[-2rem]">My skills</h4>
            <p className="text-3xl text-center mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="w-[95%] grid grid-cols-2 gap-12 mt-20">
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

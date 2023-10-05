import React,{useState} from 'react'
import Progress from './Progress'
import skillsData from "./data"

export default function Skills() {

  const [skills , setSkills] = useState(skillsData)
  
  return (
    <div id="skills" className="w-full mt-40 flex items-center justify-center">
    <div className="w-[95%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <h4 className="header-text before:content-['Myskills'] before:left-[-5rem] before:mt-[-2rem]">My skills</h4>
            <p className="text-3xl text-center mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="w-[95%] grid grid-cols-2 gap-12 mt-20">
          {skills.map(skill => (
            <Progress key={skill.id} {...skill}></Progress>
          ))}
        </div>
    </div>
</div>
  )
}

import React,{useState,useEffect} from 'react'
import Progress from './Progress'
import skillsData from "./data"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {

  const [skills , setSkills] = useState(skillsData)

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div id="skills-section" className="w-full mt-40 flex items-center justify-center">
    <div className="w-[95%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <h4 className="header-text before:content-['Myskills'] before:left-[-5rem] before:mt-[-2rem]">My skills</h4>
            <p className="text-3xl text-center mt-14 md:w-[85%]">These percentages that I wrote here are all wrong, otherwise you cannot give a percentage to a skill</p>
        </div>
        <div className="w-[95%] grid grid-cols-2 gap-12 mt-20 md:w-[80%] sm:w-[95%] md:grid-cols-1" data-aos="fade-up" data-aos-duration="1000">
          {skills.map(skill => (
            <Progress key={skill.id} {...skill}></Progress>
          ))}
        </div>
    </div>
</div>
  )
}

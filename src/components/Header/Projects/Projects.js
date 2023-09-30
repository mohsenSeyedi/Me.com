import React from 'react'
import "./Projects.css"
import Project from './Project'

export default function Projects() {
    
  return (
    <div id="projects-section" className="w-full flex items-center justify-center mt-60">
        <div className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['Projects'] before:mt-[-1rem] before:left-[-3rem]">Our Projects</h4>
                <p className="text-3xl mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="w-full flex items-center justify-center mt-20">
                <div className="w-[95%] h-auto grid grid-cols-3 grid-rows-3 gap-12">
                    <Project id={"project-1"} classContainer={"col-span-1"} title={"Branding & Illustration Design"} subTitle={"Web Design"}/>
                    <Project id={"project-2"} classContainer={"col-span-2"} title={"Branding & Illustration Design"} subTitle={"Web Design"}/>
                    <Project id={"project-3"} classContainer={"col-span-2"} title={"Branding & Illustration Design"} subTitle={"Web Design"}/>
                    <Project id={"project-4"} classContainer={"col-span-1"} title={"Branding & Illustration Design"} subTitle={"Web Design"}/>
                    <Project id={"project-5"} classContainer={"col-span-1"} title={"Branding & Illustration Design"} subTitle={"Web Design"}/>
                    <Project id={"project-6"} classContainer={"col-span-2"} title={"Branding & Illustration Design"} subTitle={"Web Design"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "./Projects.css"
import 'swiper/css/navigation';
import projectData from './data';
import Project from './Project'

export default function Projects() {
    
    const [projects , setProjecs] = useState(projectData)

  return (
    <div id="projects-section" className="w-full flex items-center justify-center mt-60">
        <div className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['Projects'] before:mt-[-1rem] before:left-[-3rem]">Our Projects</h4>
                <p className="text-3xl mt-14 text-center">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-full mt-32">
                {projects.map(project => (
                    <SwiperSlide key={project.id} style={{ display : "flex" }} className="w-full justify-between md:flex-col-reverse md:items-center"><Project {...project} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

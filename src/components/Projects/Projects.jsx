import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import "./Projects.css"
import 'swiper/css/navigation';
import projectData from './data';
import Project from './Project'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"


export default function Projects() {
    const { t } = useTranslation();
    
    const [projects , setProjecs] = useState(projectData)

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div id="projects-section" className="w-full flex items-center justify-center mt-60">
        <div className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['Projects'] before:mt-[-1rem] before:left-[-3rem]">{t("projects.title")}</h4>
                <p className="text-3xl mt-14 text-center">{t("projects.subTitle")}</p>
            </div>
            <Swiper dir='ltr' navigation={true} modules={[Navigation]} className="mySwiper w-full h-full mt-32" data-aos="fade-up" data-aos-duration="1000">
                {projects.map(project => (
                    <SwiperSlide key={project.id} style={{ display : "flex" }} className="w-full justify-between md:flex-col-reverse md:items-center"><Project {...project} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

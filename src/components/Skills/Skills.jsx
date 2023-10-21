import React,{useState,useEffect} from 'react'
import Progress from './Progress'
import skillsData from "./data"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"

export default function Skills() {
  const { t } = useTranslation();

  const [skills , setSkills] = useState(skillsData)

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div id="skills-section" className="w-full mt-40 flex items-center justify-center">
    <div className="w-[95%] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <h4 className={`${i18n.language == "en" && "before:content-['Myskills']"} header-text before:left-[-5rem] before:mt-[-2rem]`}>{t("mySkills.title")}</h4>
            <p className="text-3xl text-center mt-14 md:w-[85%]">{t("mySkills.subTitle")}</p>
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

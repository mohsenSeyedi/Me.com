import React ,{useState,useEffect} from 'react'
import Box from './Box'
import "./Achievements.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"

export default function Achievements() {
  const { t } = useTranslation();

  const [achievements ,setAchievements] = useState([
    {id:1 , title:"Awards" , number:"20"},
    {id:2 , title:"Complete Projects" , number:"5"},
    {id:3 , title:"Happy Customers" , number:"very much"},
    {id:4 , title:"Cups of coffee" , number:"5000.."},
  ])

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="achievements" className="w-full h-auto flex flex-col items-center justify-center relative mt-32">
        <div id="achievements-boxes" className="w-11/12 grid grid-cols-4 gap-12 absolute top-36 lg:grid-cols-2 lg:top-4 sm:grid-cols-1 sm:bottom-80" data-aos="zoom-in-down" data-aos-duration="1000">
          {achievements.map(achievement => (
            <Box key={achievement.id} {...achievement} data-aos="zoom-in-down" data-aos-duration="1000"/>
          ))}
        </div>
        <div id="container" className="w-full h-[600px] flex items-center justify-center mt-64" >
            <div className="w-9/12 flex flex-col items-center justify-center text-center text-3xl mt-32 sm:hidden" data-aos="zoom-in" data-aos-duration="1000">
                <h3 className="text-7xl font-bold w-4/6 text-center ">I'm <span className="text-yellow-color">Available</span> for freelancing</h3>
                <p className="w-5/6 mt-12">{t("achievements.subTitle")}</p>
            </div>
        </div>
    </div>
  )
}

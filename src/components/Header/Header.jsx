import React,{useState , useEffect} from 'react'
import "./Header.css"
import NavBar from "./NavBar/NavBar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"



export default function Header () {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id="Header" className="w-full h-auto" >
            <NavBar></NavBar>
            <div id="section-img" dir={i18n.language == 'fa' ? 'rtl' : 'ltr'} className="w-full h-auto flex items-center relative" >
                <div id="section-img-text" className={`${i18n.language=='fa' && 'pr-16'} w-[40%] pb-24 pl-16 z-50 md:absolute md:w-[80%] md:ml-28 sm:w-full sm:ml-[-2rem]`}>
                    <p className="text-yellow-color text-4xl">{t('intro.hello')}</p>
                    <h3 className="text-[6rem] text-yellow-color font-bold"><span className="text-white">{t("intro.im")}</span> {t("intro.title")}</h3>
                    <p className={`${i18n.language=="fa" && "font-bold"} text-5xl text-white mt-6 lg:text-4xl md:text-5xl md:font-bold`}>{t("intro.myJob")}</p>
                    <div id="header-btns" className="w-full flex items-center text-xl mt-12">
                        <a href="#form-contact" className={`${i18n.language == "fa" && "text-2xl"} font-bold border border-yellow-color bg-yellow-color text-black py-6 px-14 rounded-full`}>{t("intro.hire")}</a>
                    </div>
                </div>
                <div className="section-img-content md:mx-auto md:opacity-60">
                
                </div>
            </div>
        </div>
    )
}
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"

export default function AboutMe () {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div id="aboutMe-section" className="w-full h-screen flex items-center justify-center mt-60 md:h-auto">
            <div className="w[95%] flex md:flex-col-reverse md:items-center">
                <div className={`${i18n.language == "fa" ? "ml-16" : "mr-16"} w-[45%]  md:hidden`}>
                    <img src="./img/me/msg317320486-21967_prev_ui.png" alt="" data-aos="fade-up" data-aos-duration="1000" />
                </div>
                <div className="w-[55%] h-auto text-4xl mt-12 lg:text-3xl md:w-[95%] md:text-4xl md:pl-32 sm:pl-4 sm:text-3xl vs:text-2xl" data-aos="fade-down" data-aos-duration="500">
                    <h4 className={`${i18n.language == "fa" ? "before:content-['']" : "before:content-['About']"} header-text`}>{t("aboutMe.title")}</h4>
                    <p className="text-gray-color text-3xl mt-20 lg:w-[80%] md:w-[90%] sm:w-full">{t("aboutMe.subTitle")}</p>
                    <ul className="w-full mt-14">
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">{t("aboutMe.nameTitle")}</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">{t("aboutMe.nameValue")}</span>
                        </li>
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">{t("aboutMe.dateOfBirthTitle")}</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">{t("aboutMe.dateOfBirthValue")}</span>
                        </li>
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">{t("aboutMe.addressTitle")}</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">{t("aboutMe.addressValue")}</span>
                        </li>
                
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">{t("aboutMe.emailTitle")}</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">mohsenseyedi@gmail.com</span>
                        </li>
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">{t("aboutMe.phoneTitle")}</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">09305859071</span>
                        </li>
                    </ul>
                    <h4 className="opacity-80 my-14"><span className="opacity-100 text-yellow-color pr-2 font-sans">{t("aboutMe.projectcompleteCount")}</span> {t("aboutMe.projectcomplete")}</h4>

                </div>
            </div>
        </div>
    )
}
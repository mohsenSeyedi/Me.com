import React, { useState ,useEffect  } from "react";
import "./NavBar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n"
import i18next from 'i18next';


export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [language, setLanguage] = useState('en')
  const { t } = useTranslation();

  const clickMenuHandler = () => {
    setIsActive(!isActive);
    if (isActive) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    i18n.language == 'en' ? document.documentElement.dir = 'ltr' : document.documentElement.dir = 'rtl'

  }, [language])

  const changeLanguageHandler = () => {
    setLanguage(i18next.language == 'en' ? 'fa' : 'en')
  }

  return (
    <>
      <div
        id="nav-bar"
        className="w-full  h-[80px] text-white z-50 bg-black flex items-center justify-center"
      >
        <div
          id="container-nav-bar"
          className="w-[95%] flex items-center justify-between"
        >
          <div className="nav-bar-logo flex items-center">
            <a href="#me" className="text-5xl font-bold font-sans ">
              MOHSEN
            </a>
            <div>
            <select onChange={changeLanguageHandler} className="w-28 bg-gray-color cursor-pointer text-yellow-color text-2xl rounded-md outline-none mx-2 mt-1">
                <option className="cursor-pointer" value="fa">en</option>
                <option className="cursor-pointer" value="en">fa</option>
              </select>
            </div>
          </div>
          <ul
            id="items-nav-bar"
            className="w-[70%] flex justify-evenly lg:w-[80%] md:hidden"
          >
            <li>
              <a
                href="#aboutMe-section"
                className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
              >
                {t("header.aboutMe")}
              </a>
            </li>
            <li>
              <a
                href="#skills-section"
                className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
              >
                {t("header.skills")}
              </a>
            </li>
            <li>
              <a
                href="#projects-section"
                className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
              >
                {t("header.projects")}
              </a>
            </li>
            <li>
              <a
                href="#blogs-section"
                className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
              >
                {t("header.Contact")}
              </a>
            </li>

          </ul>
          <button
            className="text-6xl hidden md:block"
            onClick={clickMenuHandler}
          >
            <BiMenuAltRight />
          </button>
        </div>
      </div>
      <div className={`${i18n.language=="fa" ? "side-bar-fa" : "side-bar-en"}  ${isActive ? "active" : ""}`}>
        <button
          className={`${i18n.language=="fa" ? "text-left pl-4" : "text-right pr-4"} w-full text-5xl  text-yellow-color`}
          onClick={clickMenuHandler}
        >
          x
        </button>
        <ul
          id="items-nav-bar"
          className="w-full pl-12 pt-12 gap-10 flex flex-col text-left justify-evenly"
        >
          <li>
            <a
              href="#aboutMe-section"
              className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
            >
              {t("header.aboutMe")}
            </a>
          </li>
          <li>
            <a
              href="#skills-section"
              className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
            >
              {t("header.skills")}
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
            >
              {t("header.projects")}
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              className="item-nav-bar-link opacity-90 text-3xl font-semibold relative"
            >
              {t("header.Contact")}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

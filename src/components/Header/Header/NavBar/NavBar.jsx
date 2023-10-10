import React,{useState} from 'react'
import "./NavBar.css"
import { BiMenuAltRight  } from 'react-icons/bi'


export default function NavBar () {
    const [isActive , setIsActive] = useState(false)

    const clickMenuHandler = () => {
       setIsActive(!isActive)
    }

    return (
        <>
            <div id="nav-bar" className="w-full h-[80px] text-white z-50 bg-black flex items-center justify-center">
                <div id="container-nav-bar" className="w-[95%] flex items-center justify-between">
                    <div className="nav-bar-logo">
                        <a href="#me" className="text-5xl font-bold font-sans">MOHSEN</a>
                    </div>
                    <ul id="items-nav-bar" className="w-[70%] pl-40 flex justify-evenly md:hidden">
                        <li><a href="#aboutMe-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">About-Me</a></li>
                        <li><a href="#skills-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Skills</a></li>
                        <li><a href="#projects-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Projects</a></li>
                        <li><a href="#blogs-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">My Blog</a></li>
                        <li><a href="#contact-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Contact</a></li>
                    </ul>
                    <button className="text-6xl hidden md:block" onClick={clickMenuHandler}>
                        <BiMenuAltRight/>
                    </button>
                </div>
            </div>
            <div className={`side-bar  ${isActive ? "active" : ""}`}>
                <button className="w-full text-5xl text-right pr-4 text-red-600" onClick={clickMenuHandler}>x</button>
                <ul id="items-nav-bar" className="w-full pl-12 pt-12 gap-10 flex flex-col text-left justify-evenly">
                    <li><a href="#aboutMe-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">About-Me</a></li>
                    <li><a href="#skills-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Skills</a></li>
                    <li><a href="#projects-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Projects</a></li>
                    <li><a href="#blogs-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">My Blog</a></li>
                    <li><a href="#contact-section" className="item-nav-bar-link opacity-90 text-3xl font-semibold relative">Contact</a></li>
                </ul>
            </div>
        </>
    )
}
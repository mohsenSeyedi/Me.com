import React,{useState} from 'react'
import "./Header.css"
import NavBar from "./NavBar/NavBar"


export default function Header () {
    

    return (
        <div id="Header" className="w-full h-auto">
            <NavBar></NavBar>
            <div id="section-img" className="w-full h-auto flex items-center relative">
                <div id="section-img-text" className="w-[40%] pb-24 pl-16 z-50 md:absolute md:w-[80%] md:ml-28 sm:w-full sm:ml-[-2rem]">
                    <p className="text-yellow-color text-4xl">HELLO !</p>
                    <h3 className="text-[6rem] text-yellow-color font-bold"><span className="text-white">I'm</span> Mohsen Seyedi</h3>
                    <p className="text-5xl text-white mt-6 lg:text-4xl md:text-5xl md:font-bold">A FrontEnd Developer</p>
                    <div id="header-btns" className="w-full flex items-center text-xl mt-12">
                        <a href="#form-contact" className="font-bold border border-yellow-color bg-yellow-color text-black py-6 px-14 rounded-full">HIRE ME</a>
                    </div>
                </div>
                <div className="section-img-content md:mx-auto md:opacity-60">
                
                </div>
            </div>
        </div>
    )
}
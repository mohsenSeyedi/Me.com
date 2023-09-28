import React from 'react'


export default function AboutMe () {
    return (
        <div id="aboutMe-section" className="w-full h-screen flex items-center justify-center mt-60">
            <div className="w[95%] flex">
                <div className="w-[45%]">
                    <img src="./img/me/msg317320486-21967_prev_ui.png" alt="" />
                </div>
                <div className="w-[55%] h-auto text-4xl mt-12">
                    <h4 className="header-text before:content-['About']">About Me</h4>
                    <p className="text-gray-color text-3xl mt-20">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul className="w-full mt-14">
                        <li className="w-full flex mt-4">
                            <span className="w-[40%] font-bold">Name:</span>
                            <span className="w-[40%] text-gray-color">Mohsen Seyedi</span>
                        </li>
                        <li className="w-full flex mt-4">
                            <span className="w-[40%] font-bold">Date of birth:</span>
                            <span className="w-[40%] text-gray-color">January 01, 1987</span>
                        </li>
                        <li className="w-full flex mt-4">
                            <span className="w-[40%] font-bold">Address:</span>
                            <span className="w-[40%] text-gray-color">Iran-Tabriz</span>
                        </li>
                        <li className="w-full flex mt-4">
                            <span className="w-[40%] font-bold">Zip code:</span>
                            <span className="w-[40%] text-gray-color">1000</span>
                        </li>
                        <li className="w-full flex mt-4">
                            <span className="w-[40%] font-bold">Email:</span>
                            <span className="w-[40%] text-gray-color">mohsenseyedi@gmail.com</span>
                        </li>
                        <li className="w-full flex mt-4">
                            <span className="w-[40%] font-bold">Phone:</span>
                            <span className="w-[40%] text-gray-color">09305859071</span>
                        </li>
                    </ul>
                    <h4 className="opacity-80 my-14"><span className="opacity-100 text-yellow-color pr-2 font-sans">20</span>Project complete</h4>
                    <a href="#" className="btn text-[1.4rem] py-5 px-12">Download cv</a>
                </div>
            </div>
        </div>
    )
}
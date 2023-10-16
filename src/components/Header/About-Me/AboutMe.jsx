import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe () {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div id="aboutMe-section" className="w-full h-screen flex items-center justify-center mt-60 md:h-auto">
            <div className="w[95%] flex md:flex-col-reverse md:items-center">
                <div className="w-[45%] md:hidden">
                    <img src="./img/me/msg317320486-21967_prev_ui.png" alt="" data-aos="fade-up" data-aos-duration="1000" />
                </div>
                <div className="w-[55%] h-auto text-4xl mt-12 lg:text-3xl md:w-[95%] md:text-4xl md:pl-32 sm:pl-4 sm:text-3xl vs:text-2xl" data-aos="fade-down" data-aos-duration="500">
                    <h4 className="header-text before:content-['About'] ">About Me</h4>
                    <p className="text-gray-color text-3xl mt-20 lg:w-[80%] md:w-[90%] sm:w-full">I wrote something about myself here.</p>
                    <ul className="w-full mt-14">
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">Name:</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">Mohsen Seyedi</span>
                        </li>
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">Date of birth:</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">30 - 1 - 2004</span>
                        </li>
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">Address:</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">Iran-Tabriz</span>
                        </li>
                
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">Email:</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">mohsenseyedi@gmail.com</span>
                        </li>
                        <li className="w-full flex mt-4 md:mt-10">
                            <span className="w-[40%] font-bold">Phone:</span>
                            <span className="w-[40%] text-gray-color sm:ml-6 vs:ml-12">09305859071</span>
                        </li>
                    </ul>
                    <h4 className="opacity-80 my-14"><span className="opacity-100 text-yellow-color pr-2 font-sans">5</span>Project complete</h4>

                </div>
            </div>
        </div>
    )
}
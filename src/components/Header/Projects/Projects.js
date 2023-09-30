import React from 'react'
import "./Projects.css"

export default function Projects() {
  return (
    <div id="projects-section" className="w-full flex items-center justify-center mt-60">
        <div className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['Projects'] before:mt-[-1rem] before:left-[-3rem]">Our Projects</h4>
                <p className="text-3xl mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="w-full flex items-center justify-center mt-20">
                <div className="w-[95%] h-auto grid grid-cols-3 grid-rows-3 gap-12">
                    <div className="col-span-1">
                        <div id="project-1" className="project w-full h-[30rem] relative flex items-center justify-center">
                            <div className="overlay"></div>
                            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                                <h4 className="text-4xl text-center">Branding & Illustration Design</h4>
                                <span className="uppercase pt-4 text-xl">Web Design</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div id="project-2" className="project w-full h-[30rem] relative flex items-center justify-center">
                            <div className="overlay"></div>
                            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                                <h4 className="text-4xl text-center">Branding & Illustration Design</h4>
                                <span className="uppercase pt-4 text-xl">Web Design</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div id="project-3" className="project w-full h-[30rem] relative flex items-center justify-center">
                            <div className="overlay"></div>
                            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                                <h4 className="text-4xl text-center">Branding & Illustration Design</h4>
                                <span className="uppercase pt-4 text-xl">Web Design</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div id="project-4" className="project w-full h-[30rem] relative flex items-center justify-center">
                            <div className="overlay"></div>
                            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                                <h4 className="text-4xl text-center">Branding & Illustration Design</h4>
                                <span className="uppercase pt-4 text-xl">Web Design</span>
                            </a>
                        </div>
                    </div>     
                    <div className="col-span-1">
                        <div id="project-6" className="project w-full h-[30rem] relative flex items-center justify-center">
                            <div className="overlay"></div>
                            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                                <h4 className="text-4xl text-center">Branding & Illustration Design</h4>
                                <span className="uppercase pt-4 text-xl">Web Design</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div id="project-5" className="project w-full h-[30rem] relative flex items-center justify-center">
                            <div className="overlay"></div>
                            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                                <h4 className="text-4xl text-center">Branding & Illustration Design</h4>
                                <span className="uppercase pt-4 text-xl">Web Design</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

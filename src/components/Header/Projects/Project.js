import React from 'react'


export default function Project(props) {
  return (
    <div className="">
        <div className="project w-full h-[30rem] relative flex items-center justify-center">
            <div className="overlay"></div>
            <a href="#" className="text flex items-center justify-center flex-col z-0 p-4 w-10/12 h-auto rounded-sm transition-all">
                <h4 className="text-4xl text-center"></h4>
                <span className="uppercase pt-4 text-xl"></span>
            </a>
        </div>
     </div>
  )
}

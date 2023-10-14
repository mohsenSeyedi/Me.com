import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi';

export default function Blog(props) {
  return (
    <div className="w-full">
        <div className="blog w-full">
            <a href="#" className="blog-img w-full h-[300px]" >
              <img className="w-full h-full object-cover" src={`${props.img}`} alt="" />
            </a>
            <div className="blog-text mt-8">
                <div className="w-9/12 flex items-center justify-between mt-4 text-2xl mb-8 lg:w-11/12 md:w-1/2 sm:w-10/12 vs:w-11/12">
                    <span className="text-yellow-color">JUNE 21, 2019</span>
                    <span className="text-yellow-color">ADMIN</span>
                    <a href="#" className="flex items-center text-yellow-color"> 
                    <BiMessageAltDetail className="fill-yellow-500 mr-1"/>
                    3
                    </a>
                </div>
                <a href="#" className="text-3xl font-bold hover:text-yellow-color">{props.title}</a>
                <p className="text-2xl mt-8 leading-9">{props.description}</p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { BiMessageAltDetail } from 'react-icons/bi';

export default function Blog({imgId}) {
  return (
    <div className="w-full">
        <div className="blog w-full">
            <a href="#" id={imgId} className="blog-img w-full h-[300px]" ></a>
            <div className="blog-text">
                <div className="w-9/12 flex items-center justify-between mt-4 text-2xl mb-8">
                    <span className="text-yellow-color">JUNE 21, 2019</span>
                    <span className="text-yellow-color">ADMIN</span>
                    <a href="#" className="flex items-center text-yellow-color"> 
                    <BiMessageAltDetail className="text-yellow-color mr-1"/>
                    3
                    </a>
                </div>
                <a href="#" className="text-3xl font-bold hover:text-yellow-color">Why Lead Generation is Key for Business Growth</a>
                <p className="text-2xl mt-8 leading-9">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
    </div>
  )
}

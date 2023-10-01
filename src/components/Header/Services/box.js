import React from 'react'
import "./Box.css"
import { AiFillAlert } from 'react-icons/ai';

export default function Box({title}) {
  return (
    <div id="box-services" className="w-[28rem] h-[20rem] p-12 text-5xl bg-[#1a1a1a] rounded-sm flex flex-col items-center justify-evenly text-center transition-all duration-300 hover:bg-yellow-color">
        <div >
            <AiFillAlert className="icon fill-yellow-500" size='4.5rem'/>
        </div>
        <div className="desc">
            <h4 className="text-2xl uppercase">{title}</h4>
            <hr className="w-[30%] bg-yellow-color text-center mt-8 mx-auto"/>
        </div>
    </div>
  )
}

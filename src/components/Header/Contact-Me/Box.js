import React from 'react'
import { PiMapPinFill } from 'react-icons/pi';


export default function Box({title , subTitle}) {

  return (
    <div className="contact-box w-full h-[300px] flex items-center justify-center ">
        <div className="w-full h-full flex flex-col items-center py-5">
            <div className="w-5/12 h-[100px] flex items-center justify-center rounded-full bg-[#191919]">
                <PiMapPinFill className="fill-yellow-color text-5xl"/>
            </div>
            <h4 className="text-2xl font-bold mt-12 uppercase">{title}</h4>
            <p className="text-center text-2xl w-full mt-12">{subTitle}</p>
        </div>
    </div>
  )
}

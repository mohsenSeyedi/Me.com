import React from 'react'



export default function Box({title , subTitle , icon }) {

  return (
    <div className="contact-box w-full h-[300px] flex items-center justify-center ">
        <div className="w-full h-full flex flex-col items-center py-5">
            <div className="w-[120px] h-[120px] flex items-center justify-center rounded-full bg-[#191919]">
                {icon}
            </div>
            <h4 className="text-2xl font-bold mt-12 uppercase">{title}</h4>
            <p className="text-center text-2xl w-full mt-12">{subTitle}</p>
        </div>
    </div>
  )
}

import React from 'react'


export default function Progress({title , percent , width}) {
  return (
    <div className="w-full flex flex-col">
        <div className="w-[90%] flex items-center justify-between text-[2rem]">
          <span>{title}</span>
          <span>{percent}</span>
        </div>
        <div className="w-full h-3 rounded-lg bg-[#1a1a1a] mt-4">
          <div className="h-full rounded-lg bg-yellow-color" style={{width: `${width}`}}></div>
        </div>
    </div>
  )
}

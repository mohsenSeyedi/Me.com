import React from 'react'

export default function Box({title , icon}) {
  return (
    <div className="p-12 text-center text-5xl bg-[#1a1a1a] rounded-2xl flex flex-col justify-center">
        <span className="font-bold text-yellow-color text-center">{icon}</span>
        <h4 className="text-5xl pt-6 lg:text-4xl">{title}</h4>
    </div>
  )
}


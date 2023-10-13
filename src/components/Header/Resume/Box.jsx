import React from 'react'


export default function Box({title , year}) {
  return (
    <div className="p-12 text-5xl bg-[#1a1a1a] rounded-2xl flex flex-col justify-around">
        <span className="font-bold text-yellow-color">{year}</span>
        <h4 className="text-5xl pt-6 lg:text-4xl">{title}</h4>
        <h6 className="text-gray-color font-bold text-2xl pt-6">CAMBRIDGE UNIVERSITY</h6>
        <p className="text-gray-color text-[1.7rem] pt-10 leading-9">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    </div>
  )
}


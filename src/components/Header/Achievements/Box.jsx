import React from 'react'

export default function Box(props) {
  return (
    <div className="achievements-box w-full flex items-center justify-center rounded-xl bg-[#191919]">
      <div className="w-full flex items-center justify-center py-16 px-8">
        <div className="text-5xl flex flex-col items-center">
          <strong className="text-yellow-color font-bold">{props.number}</strong>
          <span className="text-3xl pt-6 opacity-80">{props.title}</span>
        </div>
      </div>
    </div>
  )
}

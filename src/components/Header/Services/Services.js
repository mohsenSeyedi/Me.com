import React from 'react'
import Box from './Box'

export default function Services() {
  return (
    <div id="services" className="w-full mt-40 flex items-center justify-center">
        <div className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['services'] before:mt-[-2rem] before:left-[-6rem]">services</h4>
                <p className="text-3xl mt-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="grid grid-cols-3 gap-12 mt-20">
              <Box title="Web Design"></Box>
              <Box title="Phtography"></Box>
              <Box title="Product Strategy"></Box>
              <Box title="Web Design"></Box>
              <Box title="Phtography"></Box>
              <Box title="Product Strategy"></Box>
            </div>
        </div>
    </div>
  )
}

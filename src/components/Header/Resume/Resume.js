import React from 'react';
import "./Resume.css";
import Box from "./Box";

export default function Resume() {
  return (
    <div id="resume" className="w-full flex items-center justify-center mt40">
        <div id="resume-container" className="w-[95%] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h4 className="header-text before:content-['Resume'] before:top-[-2rem]">Resume</h4>
                <p className="w-[90%] text-center text-3xl mt-14">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div id="resume-boxes" className="grid grid-cols-2 gap-12 mt-24">
              <Box year="2014-2015" title="Master Degree of Design"></Box>
              <Box year="2014-2015" title="Art & Creative Director"></Box>
              <Box year="2017-2018" title="Bachelor's Degree of C.A"></Box>
              <Box year="2019-2020" title="UI/UX Designer"></Box>
              <Box year="2014-2015" title="Wordpress Developer"></Box>
              <Box year="2022-2023" title="Diploma in Computer"></Box>
            </div>
            <div className="mt-32">
                <a href="#" className="btn py-8 px-24 text-3xl">Download cv</a>
            </div>
        </div>
    </div>
  )
}

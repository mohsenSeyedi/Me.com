import React from 'react';
import "./Resume.css";
import Box from "./Box";

export default function Resume() {
  return (
    <div className="resume">
        <div className="resume-container">
            <div className="resume-head">
                <h4 className="section-text-head">Resume</h4>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className="resume-boxes">
              <Box year="2014-2015" title="Master Degree of Design"></Box>
              <Box year="2014-2015" title="Art & Creative Director"></Box>
              <Box year="2017-2018" title="Bachelor's Degree of C.A"></Box>
              <Box year="2019-2020" title="UI/UX Designer"></Box>
              <Box year="2014-2015" title="Wordpress Developer"></Box>
              <Box year="2022-2023" title="Diploma in Computer"></Box>
            </div>
            <div className="resume-btn">
                <a href="#">Download cv</a>
            </div>
        </div>
    </div>
  )
}

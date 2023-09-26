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
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </div>
            <div className="resume-btn">
                <a href="#">Download cv</a>
            </div>
        </div>
    </div>
  )
}

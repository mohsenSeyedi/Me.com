import React from 'react'
import "./Services.css"
import Box from './Box'

export default function Services() {
  return (
    <div className="services">
        <div className="services-container">
            <div className="services-head">
                <h4 className="section-text-head">services</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="services-boxes">
              <Box icon="dfsdf" title="Web Design"></Box>
              <Box icon="isadj" title="Phtography"></Box>
              <Box icon="dfsdf" title="Product Strategy"></Box>
              <Box icon="isadj" title="Web Design"></Box>
              <Box icon="dfsdf" title="Phtography"></Box>
              <Box icon="isadj" title="Product Strategy"></Box>
            </div>
        </div>
    </div>
  )
}

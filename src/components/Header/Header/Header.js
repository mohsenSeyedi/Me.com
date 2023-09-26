import React from 'react'
import "./Header.css"
import NavBar from "./NavBar/NavBar"

export default function Header () {
    return (
        <div className="Header">
            <NavBar></NavBar>
            <div className="section-img">
                <div className="section-img-text">
                    <p className="hi-text">HELLO !</p>
                    <h3><span>I'm</span> Mohsen Seyedi</h3>
                    <p className="role-text">A FrontEnd Developer</p>
                    <div className="header-btns">
                        <a href="#" id="header-btn-1">HIRE ME</a>
                        <a href="#" id="header-btn-2">MY WORKS</a>
                    </div>
                </div>
                <div className="section-img-content">
                
                </div>
            </div>
        </div>
    )
}
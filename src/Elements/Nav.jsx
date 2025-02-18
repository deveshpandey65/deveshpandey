import React from 'react'
import logo from '../assests/img/Untitled design.PNG';
import './index.css';
export default function Nav() {
  return (
    <div className="nav">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/projects">Projects</a>
            <a href="#services">Coding Profiles</a>
            
        </div>
    </div>
  )
}


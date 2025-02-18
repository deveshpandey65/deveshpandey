import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/img/Untitled design.PNG';
import './index.css';

export default function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <a href="#services">Coding Profiles</a>
      </div>
    </div>
  );
}

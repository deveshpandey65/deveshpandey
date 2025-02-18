import React, { useRef, useState, useEffect } from 'react';
import './index.css';

import personimg from '../assests/img/pperson.png'
export default function Intro() {
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width;
        const percentY = y / rect.height;

        const offsetX = (percentX - 0.5) * 30;
        const offsetY = (percentY - 0.5) * 30;

        if (imgRef.current) {
            imgRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (imgRef.current) {
            imgRef.current.style.transform = `translate(0, 0)`;
        }
    };
    return (
        <div className="header">
            <div className='side1'>
                <div className='header-content'>
                    <h1 style={{ fontSize: '40px' } }>
                        LET ME  <span style={{ color: 'blue',fontSize:60 }}>INTRODUCE</span> MYSELF
                    </h1>
                    <p style={{ fontSize: '20px', color: 'black' } }>
                        I am a Software Development Engineer Intern at Bluestock Fintech, where I worked on developing a production-level IPO web application and RESTful APIs to serve IPO-related data.
</p>
                    <p style={{ fontSize: '20px', color: 'black' }}>    I have experience in full-stack web development, specializing in ReactJS, NodeJS, REST APIs, MongoDB, Express, and MySQL. I have also worked extensively with Postman for API testing and Git for version control.
</p>
                    <p style={{ fontSize: '20px', color: 'black' }}>    I have built multiple projects, including Internshala Automation, which improved efficiency by 80%, and Envato Market, where I implemented a fluid simulation effect using WebGL. Additionally, I have developed a Flipkart Clone, a URL Shortener, and various other projects that showcase my expertise in modern web technologies.
</p>
                    <p style={{ fontSize: '20px', color: 'black' }}>    I actively participate in hackathons and competitive programming, securing 3rd place at Cohort 1.0 (MNNIT) and 4th place at U Hack 2.0. I am also proficient in Python, C, and JavaScript, with a 5-star rating in Python on HackerRank and over 140+ problems solved on LeetCode.
                    </p>
                    <div className='contact-btn'>
                        <button className='btn'>Contact Me</button>
                    </div>
                </div>
            </div>
            <div className='side2'>
                <div
                    className='personimg'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img style={{maxHeight:400}} ref={imgRef} src={personimg} alt="person" />
                </div>
            </div>
        </div>
    )
}

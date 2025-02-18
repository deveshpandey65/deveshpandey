import React, { useEffect, useRef, useState } from 'react';
import personimg from '../assests/img/pedrson.png';
import Nav from './Nav';
import Loading from './Loading';
import Skills from './Skills';
import Course from './Course';
import Achievement from './Achievement';
import Footer from './Footer';
import Connect from '../Connect';

export default function About() {
    const imgRef = useRef(null);
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500);
    
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return (
          <Loading/>
        );
      }

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
        <>
            {loading ?<Loading/>: <>
            <Nav/>
            <div className="header1">
                <div className="side11">
                    <div className="header1-content">

                        <p>
                            I'm <strong><span>Devesh Pandey</span></strong>, a passionate <span> Software Developer</span> based in Prayagraj, Uttar Pradesh.
                            With strong skills in Python and JavaScript, I specialize in building dynamic web applications using modern technologies such as ReactJS, NodeJS, REST APIs, MongoDB, Express,Redis,WebSocket and MySQL.
                        </p>
                        <p>
                            Recently, I interned at Bluestock Fintech where I contributed to the development of an IPO web application and RESTful APIs.
                            I have also delivered innovative projects such as Envato Market—implementing fluid simulation effects using the WebGL-Fluid library—and Internshala Automation, an automation tool that improved efficiency by 80%.
                        </p>
                        <p>
                            Beyond technical proficiency, I bring leadership, teamwork, and problem-solving skills to every project, ensuring a robust and scalable development process.
                        </p>
                        <div className="contact-btn">
                            <button className="btn">Connect On Linkedin</button>
                        </div>
                    </div>
                </div>
                <div className="side12">
                    <div
                        className="personimg"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img ref={imgRef} src={personimg} alt="person" />
                    </div>
                </div>
            </div>
            <Skills/>
            <Course/>
            <Achievement/>
            <Connect/>
            </>}
        </>
    );
}

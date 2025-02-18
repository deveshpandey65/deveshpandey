import React, { useRef, useState, useEffect } from 'react';
import './index.css';
import personimg from '../assests/img/person.png';

export default function Header() {
    const imgRef = useRef(null);
    const roles = ["Ex. SDE Intern","LeetCode: 140+ Questions Solved","Frontend Developer", "Backend Developer", "Fullstack Developer"];
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout = null;

        if (!isDeleting && text !== currentRole) {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, text.length + 1));
            }, 150);
        } else if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && text !== "") {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, text.length - 1));
            }, 100);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex, roles]);

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
            <div className="side1">
                <div className="header-content">
                    <h1 style={{ fontSize: '40px' }}>
                        Hi, I'm <span style={{ color: 'blue', fontSize: '60px' }}>Devesh</span>{' '}
                        <span style={{ color: 'red', fontSize: '60px' }}>Pandey</span>
                    </h1>
                    <p style={{ fontSize: '24px', color: 'red' }}>
                        {text}
                        <span className="cursor">|</span>
                    </p>
                    <div className="contact-btn">
                        <button className="btn">Download Resume</button>
                    </div>
                </div>
            </div>
            <div className="side2">
                <div
                    className="personimg"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img ref={imgRef} src={personimg} alt="person" />
                </div>
            </div>
        </div>
    );
}

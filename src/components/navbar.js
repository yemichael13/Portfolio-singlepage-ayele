import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className='nav-container'>
            <nav className={`navbar ${scrollDirection === "down" ? "hide" : "show"}`}>
                <div className='hero'>
                    <div className='hero-title'>
                        <a href="#home">Portfolio</a>
                    </div>
                    <div className='hero-links'>
                        <ul>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='btn'>
                        <a href="#contact">Let's Talk</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

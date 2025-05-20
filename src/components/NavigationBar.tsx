'use client';
import React, { useEffect } from 'react'; // Add useEffect import
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';

function NavigationBar() {
    // Initialize AOS in useEffect
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'linear',
            once: true, // Ensure animation only happens once
            mirror: false // Don't repeat animation when scrolling back up
        });
    }, []);

    return (

        <header
            className="header"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
        >
            <a href="#" className="companyName">SavanahTech</a>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
            <p className='logo text-yellow-500 text-bold'>Logo</p>
        </header>

    );
}

export default NavigationBar;
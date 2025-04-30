import React from 'react'

function NavigationBar() {
    return (
        <header className="header">
            <a href="#" className="companyName">
                SavanahTech
            </a>
            <img src="/logo.png" alt="Logo" className="logoIcon" />
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
            {/* <p className='logo'>
                Logo
            </p> */}
        </header>
    )
}

export default NavigationBar
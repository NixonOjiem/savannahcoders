import React from 'react'

function NavigationBar() {
    return (
        <header className="header">
            <img src="/logo.png" alt="Logo" className="logoIcon" />
            <a href="#" className="companyName">
                SavanahTech
            </a>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
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
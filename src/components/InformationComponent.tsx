import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';
import { useEffect } from 'react'; // Import useEffect

function InformationComponent() {
    // Initialize AOS in useEffect
    useEffect(() => {
        AOS.init({
            duration: 1500,
            // easing: 'linear',
            once: false, // Ensure animation only happens once
            mirror: true // Repeat animation when scrolling back up
        });
    }, []);

    return (
        <div className="InformationCompoent"
            data-aos='zoom-in-up'
        >
            <h2 className="Heading">About Us</h2>
            <br />
            <p className="Introduction-Text">Key features of our company</p>
            <div className="Information-Content" style={{ marginTop: "64px" }}>
                <div className="Information-Content-Item">
                    <FontAwesomeIcon icon={faClock} className='FontawsoemIicons' />
                    <p className="Item-Header"><b>Reliable</b></p>
                    <p className='Header'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div className="Information-Content-Item">
                    <FontAwesomeIcon icon={faFire} className='FontawsoemIicons' />
                    <p className="Item-Header"><b>Passionate</b></p>
                    <p className='Header'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div className="Information-Content-Item">
                    <FontAwesomeIcon icon={faPalette} className='FontawsoemIicons' />
                    <p className="Item-Header"><b>Design</b></p>
                    <p className='Header'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
                <div className="Information-Content-Item">
                    <FontAwesomeIcon icon={faTools} className='FontawsoemIicons' />
                    <p className="Item-Header"><b>Support</b></p>
                    <p className='Header'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default InformationComponent
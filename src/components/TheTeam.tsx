import React from 'react'
import Image from 'next/image';
import profilePicOne from '@/../public/images/46.jpg';
import profilePicTwo from '@/../public/images/54.jpg';
import profilePicThree from '@/../public/images/66.jpg';
import profilePicFour from '@/../public/images/68.jpg';

function TheTeam() {
    return (
        <div className='TheTeam'>
            <h2 className="Heading">The Team</h2>

            <div className="TeamMember">
                <div className='TeamMemberPicture'>
                    <Image src={profilePicOne} alt="Team Member" />
                </div>
                <div className='TeamMemberDetails'>
                    <h3 className='TeamMemberName'><b>John Doe</b></h3>
                    <p className='TeamMemberRole'>Software Engineer</p>
                    <p className='TeamMemberDescription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div className="TeamMember">
                <div className='TeamMemberPicture'>
                    <Image src={profilePicTwo} alt="Team Member" />
                </div>
                <div className='TeamMemberDetails'>
                    <h3 className='TeamMemberName'><b>John Doe</b></h3>
                    <p className='TeamMemberRole'>Software Engineer</p>
                    <p className='TeamMemberDescription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div className="TeamMember">
                <div className='TeamMemberPicture'>
                    <Image src={profilePicThree} alt="Team Member" />
                </div>
                <div className='TeamMemberDetails'>
                    <h3 className='TeamMemberName'><b>John Doe</b></h3>
                    <p className='TeamMemberRole'>Software Engineer</p>
                    <p className='TeamMemberDescription'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default TheTeam;
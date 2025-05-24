import React from 'react'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function OurStats() {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <>
            <div className='OurStats'>
                <h1 className="bg-white text-[#FFD700] py-16 flex justify-center font-bold text-5xl">Our Stats</h1>

                <div className="bg-white text-black py-16 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center" ref={ref}>
                        <div>
                            <span className="text-4xl font-bold">
                                {inView ? <CountUp start={0} end={14} duration={2} /> : 0}+
                            </span>
                            <br />Partners
                        </div>
                        <div>
                            <span className="text-4xl font-bold">
                                {inView ? <CountUp start={0} end={55} duration={2} /> : 0}+
                            </span>
                            <br />Projects Done
                        </div>
                        <div>
                            <span className="text-4xl font-bold">
                                {inView ? <CountUp start={0} end={89} duration={2} /> : 0}+
                            </span>
                            <br />Happy Clients
                        </div>
                        <div>
                            <span className="text-4xl font-bold">
                                {inView ? <CountUp start={0} end={150} duration={2} /> : 0}+
                            </span>
                            <br />Meetings
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStats
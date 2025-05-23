import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';
import myImage from '@/../public/images/banner.jpg'

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400',
});

function Banner() {
    return (
        <div className='Banner'>
            <div> {/* Wrap Image in a div for better z-index control */}
                <Image
                    src={myImage}
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h2 className={greatVibes.className}>
                Where Design Meets Impact. Your Vision, Our Code.
            </h2>
        </div>
    );
}

export default Banner;
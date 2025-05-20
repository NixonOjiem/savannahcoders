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
            <Image src={myImage} alt="Banner Image" layout="fill" objectFit="cover" />
            <h2 className={greatVibes.className}>SavanaTech</h2>
        </div>
    );
}

export default Banner;
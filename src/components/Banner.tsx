import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: '400',
});

function Banner() {
    return (
        <div className='Banner'>
            <h2 className={greatVibes.className}>SavanaTech</h2>
        </div>
    );
}

export default Banner;
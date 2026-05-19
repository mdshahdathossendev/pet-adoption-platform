import { LogoStackOverflow } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';     
import React from 'react';

const Hero = () => {
    return (
        <div className='mx-auto container mt-10'>
          <div className='flex w-5xl  mx-auto mt-6 items-center gap-8'>
             <div className='space-y-4'>
                 <Button className={'bg-orange-100 text-black flex'}><LogoStackOverflow></LogoStackOverflow> <p> Over 1000 happy adorable</p></Button>
            <h1 className='text-6xl font-bold'>Connecting Loving <span className='text-orange-500'>Homes with Happy</span> Pets</h1>
            <p>Find loving pets waiting for a caring forever home.
Browse adorable cats and dogs ready to join your family.
Give a rescued pet love, happiness, and a better life today.</p>
        <div className='flex gap-4'>
            <Button className={'bg-orange-600 px-8'}>Adopt Now</Button>
            <Button variant='outline' className={ 'px-8 border-orange-700 text-orange-700'}>List a pat</Button>
        </div>
             </div>
        <div>
            <Image className='h-80 rounded-full border-3 border-orange-500' src={'/assets/cat-8540772_1280.jpg'} width={600} height={600} alt='hero'></Image>
        </div>
          </div>
        </div>
    );
};

export default Hero;
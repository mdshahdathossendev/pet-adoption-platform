import { LogoStackOverflow } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="space-y-5 text-center lg:text-left">
          
          <Button className="bg-orange-100 text-black flex mx-auto lg:mx-0">
            <LogoStackOverflow />
            <p>Over 1000 happy adorable pets</p>
          </Button>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Connecting Loving{' '}
            <span className="text-orange-500">Homes with Happy</span>{' '}
            Pets
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            Find loving pets waiting for a caring forever home.
            Browse adorable cats and dogs ready to join your family.
            Give a rescued pet love, happiness, and a better life today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-orange-600 text-white px-8">
              Adopt Now
            </Button>

            <Button
              variant="bordered"
              className="px-8 border-orange-700 text-orange-700"
            >
              List a Pet
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            className="rounded-full border-4 border-orange-500 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-cover"
            src={'/assets/cat-8540772_1280.jpg'}
            width={600}
            height={600}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
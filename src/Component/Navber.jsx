import { ArrowRightArrowLeft, ArrowRightToSquare, CirclePlayFill, Firewall, HouseFill } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Navber = () => {
    return (
        <div className='bg-white shadow'>
            <div className='flex justify-between mx-auto container  items-center py-2'>
            <div>
                <Image src='/assets/ChatGPT Image May 17, 2026, 09_11_08 PM.png' width={120} height={200} alt='logo'></Image>

            </div>
            <div>
                <ul className='flex gap-8'>
                    <li className='flex items-center gap-1'><HouseFill></HouseFill>Home</li>
                    <li className='flex items-center gap-1'><Firewall></Firewall> All Pets</li>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='flex items-center gap-1'> <ArrowRightToSquare></ArrowRightToSquare> Login</p>
                <Button className={'bg-orange-500 rounded-lg '}><CirclePlayFill></CirclePlayFill> Get Stared</Button>
            </div>
        </div>
        </div>
    );
};

export default Navber;
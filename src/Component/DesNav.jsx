import { ArrowRightArrowLeft, ArrowRightToSquare, CirclePlayFill, Firewall, HouseFill } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const DesNav = () => {
    return (
        <div className='bg-white shadow'>
            <div className='flex justify-between mx-auto container  items-center py-2'>
            <div className='flex gap-2 items-center'>
                <Image className='h-5' src='/assets/ChatGPT Image May 17, 2026, 09_11_08 PM.png' width={130} height={180} alt='logo'></Image>
                <Button className={'bg-gray-200 text-black rounded-sm'}>Dashboard</Button>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='flex items-center gap-1'> <ArrowRightToSquare></ArrowRightToSquare> Login</p>
                <Button className={'bg-orange-500 rounded-lg '}><CirclePlayFill></CirclePlayFill> Get Stared</Button>
            </div>
        </div>
        </div>
    );
};

export default DesNav;
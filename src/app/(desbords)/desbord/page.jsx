
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async() => {
     const session = await auth.api.getSession({
           headers: await headers(),
         });
        const user = session?.user;
        const id = user?.id
        const res = await fetch(`http://localhost:8000/listing/${id}`)
        const data = await res.json();
        console.log(data)
    return (
        <div className='mx-auto container ml-75'>
       <h2 className='text-2xl font-bold'>My Adoption <span className='text-orange-500'>Request</span></h2>
       <p className='mt-2'>Tak the status of all our adoption requests here</p>
        </div>
    );
};

export default page;
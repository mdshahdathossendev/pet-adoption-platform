import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const Stats = async({pat}) => {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
      const user = session?.user;
      const id = user?.id;
    
      const res = await fetch(
        `https://pet-server-nu.vercel.app/listing/user/${pat._id}`
      );
    
      const data = await res.json();
    return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
  
  <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
    
    <div className="absolute top-0 right-0 w-28 h-28 bg-blue-100 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition duration-500"></div>

    <div className="relative z-10 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          Total Listings
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
          {pet.length}
        </h2>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-3xl shadow-md">
        📦
      </div>
    </div>
  </div>

  {/* Available */}
  <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
    
    <div className="absolute top-0 right-0 w-28 h-28 bg-green-100 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition duration-500"></div>

    <div className="relative z-10 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          Available
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
          {data.length}
        </h2>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-3xl shadow-md">
        🐾
      </div>
    </div>
  </div>

  {/* Adopted */}
  <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
    
    <div className="absolute top-0 right-0 w-28 h-28 bg-red-100 rounded-full blur-3xl opacity-60 group-hover:scale-125 transition duration-500"></div>

    <div className="relative z-10 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          Adopted
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
         
            {(data?.length || 0) - (pet?.length || 0)}
          
        </h2>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center text-white text-3xl shadow-md">
        ❤️
      </div>
    </div>
  </div>

</div>
    );
};

export default Stats;
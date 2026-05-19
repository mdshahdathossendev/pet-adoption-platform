import Image from 'next/image';
import React from 'react';
import { Edit, Trash2 } from "lucide-react";
import { patData } from '@/lib/data';
import { Default } from '@/Component/DeletAlert';
import UpdetPatModel from '@/Component/UpdetPatModel';

const page = async() => {
    const pets =  await patData()
    return (
        <div className='mx-auto ml-72'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                     pets.map(pet => <div key={pet._id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

      {/* Image */}
      <Image
        src={pet.imageUrl}
        alt={pet.petName}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">

        <h2 className="text-xl font-bold text-gray-800">
          {pet.petName}
        </h2>

        <p className="text-sm text-gray-500">
          {pet.breed} • {pet.species}
        </p>

        <p className="text-sm text-gray-600">
          📍 {pet.location}
        </p>

        <p className="text-sm font-medium text-orange-500">
          💰 ৳ {pet.adoptionFee}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">

          {/* Update */}
          
           
        
            
            <UpdetPatModel></UpdetPatModel>

          {/* Delete */}
          
            
            <Default pet = {pet}></Default>

        </div>
      </div>
    </div>)
                }
            </div>
        </div>
    );
};

export default page;
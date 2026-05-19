import React from 'react';
import { patData } from '@/lib/data';
import { Heart, MapPin, PawPrint, Syringe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const page = async() => {
    const datas = await patData()
    return (
        
          <div className='mt-10 max-w-6xl mx-auto'>
            <h2 className=' text-3xl font-bold'>Browse <span className='text-orange-600'>All Pets</span></h2>
            <p className='  mt-2'>These wonderful pet are whiting for their forever homeless.</p>
        
        <div className='mt-8 grid grid-cols-3 gap-4  max-w-6xl mx-auto'>
            
            {
                datas.map(data=>  <div
            key={data._id}
            className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 group"
          >
            
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={data.imageUrl}
                alt={data.petName}
                width={2000}
                height={150}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Fee */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow">
                ৳ {data.adoptionFee}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              
              {/* Name */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {data.petName}
                  </h2>

                  <p className="text-gray-500">
                    {data.breed} • {data.gender}
                  </p>
                </div>

                <button className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Info */}
              <div className="mt-5 space-y-3 text-sm text-gray-600">
                
                <div className="flex items-center gap-2">
                  <PawPrint className="w-4 h-4 text-orange-500" />
                  <span>
                    {data.species} • {data.age} Years Old
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Syringe className="w-4 h-4 text-green-500" />
                  <span>{data.vaccinationStatus}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{data.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-5 leading-6">
               
              </p>

              {/* Button */}
              <div className='flex  gap-2'>
                <button className="w-full  bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-300">
                Adopt Now
              </button>
                <button className="w-full  bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-300">
               <Link href={`/detels/${data._id}`}>View Detalis</Link>
              </button>
              </div>
            </div>
          </div>)
            }
        </div>
        </div>
        
    );
};

export default page;
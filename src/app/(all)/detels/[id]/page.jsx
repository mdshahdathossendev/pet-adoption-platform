import { patDataDetels } from '@/lib/data';
import React from 'react';
import Image from "next/image";
import {
  MapPin,
  Syringe,
  PawPrint,
  User,
  BadgeCheck,
  ArrowBigLeftDashIcon,
} from "lucide-react";
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Listsubmitfrom from '@/Component/Listsubmitfrom';
import Link from 'next/link';

const page = async ({ params }) => {
  const { id } = await params;

  const tokenObj = await auth.api.getToken({
    headers: await headers(),
  });

  const token = tokenObj.token;

  const res = await fetch(
    `https://pet-server-nu.vercel.app/allpat/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  const pet = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12 px-4">
      
      {/* Back Button */}
      <div className="container mx-auto mb-6">
        <Link href="/">
          <p className="flex items-center gap-2 text-gray-700 hover:text-orange-500 duration-200">
            <ArrowBigLeftDashIcon />
            Back to home
          </p>
        </Link>
      </div>

      {/* Main Layout */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Image */}
          <div className="relative">
            <Image
              src={pet.imageUrl}
              alt={pet.petName}
              width={1000}
              height={700}
              className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover"
            />

            {/* Price Badge */}
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm shadow-md">
              ৳ {pet.adoptionFee}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-8">
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {pet.petName}
            </h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              {pet.breed} • {pet.gender}
            </p>

            {/* Details Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-600">
              
              <div className="flex items-center gap-3">
                <PawPrint className="w-5 h-5 text-orange-500" />
                <span>
                  {pet.species} • {pet.age} Years Old
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Syringe className="w-5 h-5 text-green-500" />
                <span>{pet.vaccinationStatus}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{pet.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck className="w-5 h-5 text-blue-500" />
                <span>{pet.healthStatus}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                About Pet
              </h2>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {pet.description}
              </p>
            </div>

            {/* Owner */}
            <div className="mt-8 flex items-center gap-3 text-gray-600 border-t pt-5">
              <User className="w-5 h-5 text-gray-500" />
              <span className="break-all">{pet.ownerEmail}</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full">
          <Listsubmitfrom pet={pet} />
        </div>
      </div>
    </div>
  );
};

export default page;
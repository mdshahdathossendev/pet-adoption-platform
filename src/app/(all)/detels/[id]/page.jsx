import { patDataDetels } from '@/lib/data';
import React from 'react';
import Image from "next/image";
import {
  MapPin,
  Syringe,
  Heart,
  PawPrint,
  User,
  BadgeCheck,
} from "lucide-react";
const page = async({params}) => {
    const {id} =  await params
    const pet = await patDataDetels(id)
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6 grid grid-cols-3 gir-row-4 gap-2 container mx-auto">
      
      {/* Container */}
      <div className=" col-span-2 row-span-2  max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden  lg:grid-cols-2">
        
        {/* Image Section */}
        <div className="relative">
          <Image
            src={pet.imageUrl}
            alt={pet.petName}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />

          {/* Floating Badge */}
          <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm shadow">
            ৳ {pet.adoptionFee}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between">
          
          {/* Top Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              {pet.petName}
            </h1>

            <p className="text-gray-500 mt-1">
              {pet.breed} • {pet.gender}
            </p>

            {/* Details Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">
              
              <div className="flex items-center gap-2">
                <PawPrint className="w-4 h-4 text-orange-500" />
                <span>
                  {pet.species} • {pet.age} Years Old
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Syringe className="w-4 h-4 text-green-500" />
                <span>{pet.vaccinationStatus}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{pet.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-blue-500" />
                <span>{pet.healthStatus}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-7">
              {pet.description}
            </p>

            {/* Owner */}
            <div className="mt-6 flex items-center gap-3 text-gray-600">
              <User className="w-5 h-5 text-gray-500" />
              <span>{pet.ownerEmail}</span>
            </div>
          </div>

          {/* Buttons */}
          
        </div>
      </div>
       <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5 row-span-1">
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">
        Adoption Request
      </h2>

      {/* Pet Name (Read Only) */}
      <div>
        <label className="text-sm text-gray-500">Pet Name</label>
        <input
          type="text"
          value={pet.petName}
          readOnly
          className="w-full mt-1 p-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      {/* User Name (Read Only) */}
      <div>
        <label className="text-sm text-gray-500">User Name</label>
        <input
          type="text"
          value="Shahdat"
          readOnly
          className="w-full mt-1 p-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      {/* User Email (Read Only) */}
      <div>
        <label className="text-sm text-gray-500">User Email</label>
        <input
          type="email"
          value="hmdshahdat501@gmail.com"
          readOnly
          className="w-full mt-1 p-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      {/* Pickup Date */}
      <div>
        <label className="text-sm text-gray-500">Pickup Date</label>
        <input
          type="date"
          className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="text-sm text-gray-500">Message</label>
        <textarea
          placeholder="Write your message..."
          className="w-full mt-1  border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition">
        Adopt Now
      </button>
    </div>
    </div>
    );
};

export default page;
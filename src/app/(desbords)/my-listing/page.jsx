import Image from "next/image";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { patData } from "@/lib/data";
import { Default } from "@/Component/DeletAlert";
import UpdetPatModel from "@/Component/UpdetPatModel";
import Link from "next/link";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const myPets = await patData();

  const pets = myPets.filter(
    (pet) => pet.ownerEmail === session?.user?.email
  );

  return (
    <div className="mx-auto ml-72">

      {/* ✅ NO DATA UI */}
      {pets.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center ml-75 my-auto">
          <h2 className="text-2xl font-bold text-gray-700">
            No Add You Pat in Your Listing 🐾
          </h2>

          <p className="text-gray-500 mt-2">
            You haven’t added any pets yet.
          </p>

         <Link href={'/addpat'}>
          <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-xl">
            Add Your First Pet
          </button></Link>
        </div>
      ) : (

        /* ✅ PET LIST */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <div
              key={pet._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />

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

                <div className="flex gap-2 mt-4">
                  <UpdetPatModel pet={pet} />
                  <Default pet={pet} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
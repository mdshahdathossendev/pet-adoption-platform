import Image from "next/image";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { patData } from "@/lib/data";
import { Default } from "@/Component/DeletAlert";
import UpdetPatModel from "@/Component/UpdetPatModel";
import Link from "next/link";
import RequestModel from "@/Component/RequestModel";
import { Button } from "@heroui/react";
import { View } from "lucide-react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const myPets = await patData();

  const pets = myPets.filter(
    (pet) => pet.ownerEmail === session?.user?.email
  );

  return (
    <div
      className="
        w-full
        px-4 sm:px-6 lg:px-8
        py-6
        md:ml-72
      "
    >
      {/* Empty State */}
      {pets.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            No Pet Added In Your Listing 🐾
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            You haven’t added any pets yet.
          </p>

          <Link href={"/addpat"}>
            <button className="mt-5 px-5 py-3 bg-orange-500 hover:bg-orange-600 transition text-white rounded-xl shadow-md">
              Add Your First Pet
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              My Pet Listings
            </h1>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Manage all your added pets from here
            </p>
          </div>

          {/* Grid */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              gap-6
            "
          >
            {pets.map((pet) => (
              <div
                key={pet._id}
                className="
                  bg-white
                  rounded-3xl
                  shadow-md
                  hover:shadow-2xl
                  transition-all duration-300
                  overflow-hidden
                  border border-gray-100
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={pet.imageUrl}
                    alt={pet.petName}
                    width={500}
                    height={300}
                    className="
                      w-full
                      h-52
                      sm:h-56
                      object-cover
                      hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {pet.petName}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {pet.breed} • {pet.species}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600">
                    📍 {pet.location}
                  </p>

                  <p className="text-base font-semibold text-orange-500">
                    💰 ৳ {pet.adoptionFee}
                  </p>

                  {/* Buttons */}
                  <div className="space-y-3 pt-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="w-full">
                        <UpdetPatModel pet={pet} />
                      </div>

                      <div className="w-full">
                        <Default pet={pet} />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="w-full">
                        <RequestModel pet={pet} />
                      </div>

                      <Button
                        className="
                          w-full
                          rounded-xl
                          bg-cyan-500
                          hover:bg-cyan-600
                          text-white
                        "
                      >
                        <View size={18} />

                        <Link href={`detels/${pet._id}`}>
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
"use client";

import React, { useEffect, useState } from "react";
import { patData } from "@/lib/data";
import { Heart, MapPin, PawPrint, Syringe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Load data
  useEffect(() => {
    const fetchData = async () => {
      const res = await patData();
      setDatas(res);
    };

    fetchData();
  }, []);

  // Filter logic
  const filteredPets = datas.filter((item) => {
    const matchSearch = item.petName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" ? true : item.species === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold">
        Browse <span className="text-orange-600">All Pets</span>
      </h2>

      <p className="mt-2 text-gray-600">
        These wonderful pets are waiting for their forever homes.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search pets by name..."
          className="border px-4 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-orange-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filter */}
        <select
          className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
        </select>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPets.map((data) => (
          <div
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

              {/* Button */}
              <div className="flex gap-2 mt-5">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-300">
                  <Link href={`/detels/${data._id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
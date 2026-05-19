
'use client'

import { authClient } from "@/lib/auth-client";

const Listsubmitfrom =  ({ pet }) => {
  const {data: session} = authClient.useSession();
    const user = session?.user;

  const handleBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const listingData = {
        userId: user?.id,
        pikUpdate: data?.pickupDate,
        name: pet.petName,
        status: "Active"
    }
    const res = await fetch("http://localhost:8000/listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listingData),
    });

    const result = await res.json();
    console.log( listingData);
    
  };

  return (
    <form
      onSubmit={handleBooking}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-5 row-span-1"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">
        Adoption Request
      </h2>

      {/* Pet Name */}
      <div>
        <label className="text-sm text-gray-500">Pet Name</label>
        <input
          type="text"
          value={pet.petName}
          readOnly
          className="w-full mt-1 p-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      {/* User Name */}
      <div>
        <label className="text-sm text-gray-500">User Name</label>
        <input
          type="text"
          value={session?.user?.name || "User"}
          readOnly
          className="w-full mt-1 p-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      {/* User Email */}
      <div>
        <label className="text-sm text-gray-500">User Email</label>
        <input
          type="email"
          value={session?.user?.email || ""}
          readOnly
          className="w-full mt-1 p-2 bg-gray-100 rounded-lg outline-none"
        />
      </div>

      {/* Pickup Date */}
      <div>
        <label className="text-sm text-gray-500">Pickup Date</label>
        <input
          name="pickupDate"
          type="date"
          className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="text-sm text-gray-500">Message</label>
        <textarea
          name="message"
          placeholder="Write your message..."
          className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition"
      >
        Adopt Now
      </button>
    </form>
  );
};

export default Listsubmitfrom;
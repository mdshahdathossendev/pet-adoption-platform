import Image from "next/image";

export default function SuccessStories() {
  const stories = [
    {
      name: "Rafi & Bruno",
      desc: "Bruno is now a happy family member and very active every day!",
      img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
    },
    {
      name: "Sarah & Luna",
      desc: "Luna brought so much joy and love into Sarah’s life.",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    },
    {
      name: "John & Max",
      desc: "Max was rescued and now lives a healthy and happy life.",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium">Success Stories</p>
        <h1 className="text-3xl font-bold mt-2">
          Happy Pets, Happy Families 🐾
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.name}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            width={200} height={200} />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
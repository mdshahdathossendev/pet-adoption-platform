import {
  HeartHandshake,
  Home,
  Smile,
  ShieldCheck,
} from "lucide-react";

export default function WhyAdoptPets() {
  const reasons = [
    {
      title: "Save a Life",
      desc: "Adopting gives homeless pets a second chance to live happily.",
      icon: HeartHandshake,
      color: "text-red-500",
    },
    {
      title: "Find a Best Friend",
      desc: "Pets bring unconditional love and companionship to your life.",
      icon: Smile,
      color: "text-yellow-500",
    },
    {
      title: "Give Them a Home",
      desc: "Provide a safe and caring environment for rescued animals.",
      icon: Home,
      color: "text-blue-500",
    },
    {
      title: "Healthy Lifestyle",
      desc: "Pets encourage exercise, happiness, and reduce stress.",
      icon: ShieldCheck,
      color: "text-green-500",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold">
          Why Adopt Pets?
        </p>

        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Give Love, Get Love 🐾
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Adopting a pet changes both your life and theirs. 
          Every rescued pet deserves a loving family and a safe home.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reasons.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-5 group-hover:scale-110 transition ${item.color}`}
              >
                <Icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
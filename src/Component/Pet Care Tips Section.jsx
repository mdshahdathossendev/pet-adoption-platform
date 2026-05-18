import { Heart, ShieldCheck, Activity, Sparkles } from "lucide-react";

export default function PetCareTips() {
  const tips = [
    {
      title: "Healthy Food",
      desc: "Provide balanced nutrition for your pet’s growth.",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Vet Check",
      desc: "Regular vet visits keep your pet safe.",
      icon: ShieldCheck,
      color: "text-blue-500",
    },
    {
      title: "Daily Exercise",
      desc: "Keep your pet active and energetic every day.",
      icon: Activity,
      color: "text-green-500",
    },
    {
      title: "Clean Care",
      desc: "Maintain hygiene for a healthy lifestyle.",
      icon: Sparkles,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="py-14 px-6 bg-gradient-to-b from-gray-50 to-white ">
      
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-medium">Pet Care Tips</p>
        <h1 className="text-3xl font-bold mt-2">
          Keep Your Pet Happy & Healthy 🐶
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  max-w-6xl mx-auto">
        {tips.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-4">
                <Icon className={`w-10 h-10 ${item.color}`} />
              </div>

              {/* Content */}
              <h2 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
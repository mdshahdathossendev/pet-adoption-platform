import {
  PawPrint,
  HeartHandshake,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function ExtraSections() {
  const features = [
    {
      title: "Trusted Adoption",
      desc: "Safe and secure pet adoption process for every family.",
      icon: ShieldCheck,
      color: "text-blue-500",
    },
    {
      title: "Happy Pets",
      desc: "Thousands of pets already found loving homes.",
      icon: PawPrint,
      color: "text-orange-500",
    },
    {
      title: "Community Support",
      desc: "Join a caring community of pet lovers and adopters.",
      icon: HeartHandshake,
      color: "text-red-500",
    },
  ];

  return (
    <div className="bg-gray-50">
      
      {/* ================= FEATURES SECTION ================= */}
      <section className="py-16 px-6">
        
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold">
            Why Choose Us
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Trusted Pet Adoption Platform 🐾
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5 ${item.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h2 className="text-xl font-semibold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= STATISTICS SECTION ================= */}
      <section className="py-16 bg-orange-500 text-white">
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          
          <div>
            <h1 className="text-4xl font-bold">5K+</h1>
            <p className="mt-2 text-orange-100">
              Pets Adopted
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">2K+</h1>
            <p className="mt-2 text-orange-100">
              Happy Families
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">150+</h1>
            <p className="mt-2 text-orange-100">
              Rescue Partners
            </p>
          </div>

          <div>
            <h1 className="text-4xl font-bold">4.9★</h1>
            <p className="mt-2 text-orange-100">
              User Ratings
            </p>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="py-16 px-6">
        
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold">
            Testimonials
          </p>

          <h1 className="text-4xl font-bold mt-2">
            What People Say ❤️
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="flex text-orange-500 mb-4">
                <Star className="fill-orange-500" />
                <Star className="fill-orange-500" />
                <Star className="fill-orange-500" />
                <Star className="fill-orange-500" />
                <Star className="fill-orange-500" />
              </div>

              <p className="text-gray-600 leading-7">
                “This platform helped us find the perfect pet.
                The adoption process was smooth and amazing!”
              </p>

              <div className="mt-5">
                <h3 className="font-semibold">Sarah Ahmed</h3>
                <p className="text-sm text-gray-500">
                  Pet Adopter
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
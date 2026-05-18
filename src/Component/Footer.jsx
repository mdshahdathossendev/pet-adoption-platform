import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Send,
  Globe,
} from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-6 px-6">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h1 className="text-3xl font-bold text-orange-500 flex items-center gap-2">
            <Heart className="w-7 h-7 fill-orange-500" />
            Pet Adoption
          </h1>

          <p className="text-gray-400 mt-4 leading-7">
            We help pets find loving homes and connect families
            with their perfect furry friends.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                href="/"
                className="hover:text-orange-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-orange-500 transition"
              >
                About
              </Link>
            </li>

           
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact Information
          </h2>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-orange-500" />
              <p>Chattogram, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <p>petcare@gmail.com</p>
            </div>

          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Follow Us
          </h2>

          <p className="text-gray-400 mb-5">
            Stay connected with us on social media.
          </p>

          <div className="flex gap-4">

            <Link
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaFacebook></FaFacebook>
            </Link>

            <Link
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>

            <Link
              href="#"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition"
            >
              <Heart className="w-5 h-5" />
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2026 PetCare. All Rights Reserved.
      </div>
    </footer>
  );
}
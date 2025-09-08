"use client";

import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/agrisenselogo.png" alt="Agrisense Logo" width={40} height={40} />
            <span className="text-xl font-bold text-white">Agrisense</span>
          </div>
          <p className="text-gray-300 mb-4">
            Empowering farmers with cutting-edge technology for sustainable and
            profitable agriculture.
          </p>
          <div className="flex gap-4 text-gray-300">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Programs</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Soil Analysis & Recommendations</a></li>
            <li><a href="#" className="hover:text-white">Early disease prevention</a></li>
            <li><a href="#" className="hover:text-white">AI Chatbot (trained for farmers) Assistant</a></li>
            <li><a href="#" className="hover:text-white">Weather Forecasting</a></li>
            <li><a href="#" className="hover:text-white">Field analysis by Satelite Imagery</a></li>
            <li><a href="#" className="hover:text-white">Crop selling advice based on our model</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <span>123 Agriculture Way, Farming District, New Delhi, 110001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-green-400" />
              <span>+91 9876 543 210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-green-400" />
              <span>info@agrisense.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Agrisense. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

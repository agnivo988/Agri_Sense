"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Have questions about Agrisense? We&apos;re here to support farmers with
            modern solutions and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-green-50 rounded-xl shadow-md p-8 space-y-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Get in Touch
            </h3>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="text-green-700 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p className="text-gray-600">+91 9883610565</p>
                <p className="text-gray-600">+91 6290592213 (Toll Free)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail className="text-green-700 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-gray-600">info@agrisense.com</p>
                <p className="text-gray-600">support@agrisense.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MapPin className="text-green-700 w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-gray-700">Address</p>
                <p className="text-gray-600">
                  Burdwan , Nababhat 
                </p>
                <p className="text-gray-600">West Bengal, 713104, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border text-black border-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full text-black border border-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border text-black border-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select className="w-full border text-black border-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="">Select a Subject</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border text-black border-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center text-black justify-center gap-2 bg-green-600  py-3 rounded-lg hover:bg-green-700 transition"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

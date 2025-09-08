"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Punjab",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    rating: 5,
    feedback:
      "Agrisense helped me monitor my wheat fields with real-time soil data. I saved nearly 20% on water usage this season."
  },
  {
    id: 2,
    name: "Sita Devi",
    location: "Maharashtra",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    feedback:
      "The crop disease alerts are very accurate. I could protect my sugarcane fields on time, avoiding major losses."
  },
  {
    id: 3,
    name: "Arun Patel",
    location: "Gujarat",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    feedback:
      "The Agrisense workshops taught me modern irrigation techniques. My cotton yield has improved drastically."
  },
  {
    id: 4,
    name: "Meena Joshi",
    location: "Uttar Pradesh",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 4,
    feedback:
      "I was hesitant about technology, but Agrisense made it simple. The app is user-friendly and very helpful."
  }
];

export default function FarmersSay() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-3">
          What Farmers Say
        </h2>
        <p className="text-gray-600 mb-10">
          Hear from farmers who have transformed their agricultural practices
          using <span className="font-semibold">Agrisense</span>.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-white shadow-md cursor-pointer rounded-full p-2 hover:bg-green-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-green-700" />
          </button>

          {/* Testimonial Card */}
          <div className="w-full sm:w-[70%] bg-white shadow-lg rounded-xl p-8 flex flex-col items-center transition duration-500">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200"
            />
            <h3 className="text-lg font-semibold text-green-700">
              {testimonials[current].name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {testimonials[current].location}
            </p>
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[current].rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="italic text-gray-600 max-w-xl">
              &quot;{testimonials[current].feedback}&quot;
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-white shadow-md cursor-pointer rounded-full p-2 hover:bg-green-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-green-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2 ">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                current === index ? "bg-green-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

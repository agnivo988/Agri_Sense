"use client";

import { useState } from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";

interface Program {
  id: number;
  title: string;
  description: string;
  frequency: string;
  location: string;
  participants: string;
  achievements: string;
}

const programs: Program[] = [
  {
    id: 1,
    title: "Smart Irrigation Drives",
    description:
      "Workshops and demos on using IoT-enabled irrigation systems to help farmers optimize water usage and improve crop yield.",
    frequency: "Quarterly",
    location: "Rural Clusters Across India",
    participants: "800+ per drive",
    achievements:
      "Reduced water usage by 25% for over 5,000 farmers while maintaining higher productivity."
  },
  {
    id: 2,
    title: "Sustainable Fertilizer Clinics",
    description:
      "Sessions on the balanced and eco-friendly use of fertilizers, biofertilizers, and composting techniques.",
    frequency: "Monthly",
    location: "State-Level Agriculture Centers",
    participants: "600+ per month",
    achievements:
      "Helped 7,500 farmers transition to organic and balanced fertilization, improving soil fertility by 20%."
  },
  {
    id: 3,
    title: "Climate-Resilient Farming Workshops",
    description:
      "Training farmers on drought-resistant crops, weather forecasting apps, and adaptive practices to handle climate change.",
    frequency: "Bi-Monthly",
    location: "Multiple Rural Locations",
    participants: "400+ per workshop",
    achievements:
      "Over 3,000 farmers adopted climate-resilient practices, reducing crop loss during droughts by 40%."
  },
  {
    id: 4,
    title: "Agri-Entrepreneurship Bootcamps",
    description:
      "Programs designed to guide rural youth in building agri-businesses, value-added product ventures, and cooperatives.",
    frequency: "Yearly",
    location: "District Headquarters",
    participants: "1,000+ youth entrepreneurs",
    achievements:
      "Created 500+ agri-startups and farmer cooperatives, boosting rural employment opportunities."
  },
];

export default function AgriculturalPrograms() {
  const [selected, setSelected] = useState<Program>(programs[0]);

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">
          Agricultural Programs
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Agrisense organizes innovative programs to support farmers with modern
          practices, sustainable methods, and advanced technology adoption.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sidebar Program List */}
          <div className="flex flex-col gap-4 ">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelected(program)}
                className={`text-left text-black p-4 rounded-lg cursor-pointer shadow-md transition ${
                  selected.id === program.id
                    ? "bg-green-100 border-l-4 border-green-600"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <h3 className="font-semibold text-lg">{program.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {program.description}
                </p>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl text-black font-bold mb-3">{selected.title}</h3>
            <p className="text-gray-700 text-black mb-6">{selected.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-green-600" />
                <span className="text-sm text-black">
                  <strong>Frequency:</strong> {selected.frequency}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-green-600" />
                <span className="text-sm text-black">
                  <strong>Location:</strong> {selected.location}
                </span>
              </div>
              <div className="flex items-center text-black gap-2">
                <Users className="text-green-600" />
                <span className="text-sm">
                  <strong>Participants:</strong> {selected.participants}
                </span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <Award className="text-green-600 mt-1" />
              <p className="text-sm text-gray-700">
                <strong>Program Achievements:</strong> {selected.achievements}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

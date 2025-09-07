"use client";

import { Leaf, CloudSun, Bot, Timer, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Soil Analysis & Crop Recommendations",
      description:
        "Analyze NPK levels from soil samples to receive tailored recommendations for crops and fertilizers to optimize your yield.",
    },
    {
      icon: <CloudSun className="w-8 h-8 text-green-600" />,
      title: "Advanced Prediction and alert system",
      description:
        "Get accurate environment data and Early warning system for farmers by our advanced prediction model",
    },
    {
      icon: <Bot className="w-8 h-8 text-green-600" />,
      title: "AI-Powered Agricultural Assistant",
      description:
        "Our multilingual , voice support enabled chatbot will help farmers to get precise data on agriculture",
    },
    {
      icon: <Timer className="w-8 h-8 text-green-600" />,
      title: "Growth & Income Calculation",
      description:
        "Time series models analyze your soil, weather, and crop data to calculate expected growth and yearly income predictions.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Disease Prediction & Prevention",
      description:
        "Our close-up disease detection model will be benificial for farmers as they can understand better about a disease and take appropriate action on time",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Fertilizer recommendation",
      description:
        "Our AI will suggest fertilizers for farmers which is appropriate for that weather condition",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
          Our AI Features
        </h2>
        <p className="mt-4 text-gray-600">
          Explore how AgriSense leverages Artificial Intelligence to
          revolutionize traditional farming, helping you grow smarter and
          achieve better yields.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 ">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative bg-green-50 rounded-2xl shadow-md p-6 border border-green-100 hover:shadow-xl transition overflow-hidden group cursor-pointer"
          >
            {/* shine overlay (pointer-events-none so it doesn't block clicks) */}
            <div className="shine pointer-events-none" />

            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4 relative z-1">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-green-800 relative z-10">
              {feature.title}
            </h3>
            <p className="mt-2 text-gray-600 relative z-10">
              {feature.description}
            </p>

            <a
              href="#"
              className="mt-4 inline-flex items-center text-green-600 font-medium hover:underline relative z-10"
            >
              Learn more →
            </a>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}



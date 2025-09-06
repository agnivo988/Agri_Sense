"use client";

import { motion } from "framer-motion";
import { Leaf, Activity, Bug } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-green-800"
        >
          AI-Powered Crop Monitoring
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-700"
        >
          Monitor crop health, soil conditions, and pest risks using cutting-edge
          multispectral & hyperspectral imaging combined with sensor data.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-green-600 text-white font-medium rounded-2xl shadow-lg hover:bg-green-700 transition cursor-pointer"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        <FeatureCard
          icon={<Leaf className="w-10 h-10 text-green-600" />}
          title="Crop Health"
          description="Detect plant stress early with AI-powered imaging insights."
        />
        <FeatureCard
          icon={<Activity className="w-10 h-10 text-green-600" />}
          title="Soil Condition"
          description="Analyze soil moisture, fertility, and nutrient balance in real-time."
        />
        <FeatureCard
          icon={<Bug className="w-10 h-10 text-green-600" />}
          title="Pest Risks"
          description="Identify and predict pest infestations before they spread."
        />
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md p-6 text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
}

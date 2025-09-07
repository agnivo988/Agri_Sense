"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const images = [
    "/farm1.jpg",
    "/farm2.jpg",
    "/farm3.jpg",
    "/farm4.jpg",
    "/farm5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-green-900/60" />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 text-center max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-green-600 text-white text-sm px-4 py-1 rounded-full mb-4 sm:mt-0 mt-[8px] "
        >
          Next Gen. Agriculture Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          AI-Powered <span className="text-green-400">Crop Monitoring</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Monitor crop health, soil condition and pest risks using cutting-edge multispectral and hyperspectral imaging combined with sensor data
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition"
          >
            Get Started →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white/20 border border-white text-white font-medium rounded-xl hover:bg-white/30 transition"
          >
            Explore Features
          </motion.button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-6">
          <StatCard value="200+" label="Collaborated Companies" />
          <StatCard value="5,000+" label="Farmers" />
          <StatCard value="30%" label="Production Increase" />
          <StatCard value="20+" label="States" />
        </div>
      </section>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center shadow-lg"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-green-300">{value}</h3>
      <p className="mt-2 text-gray-100 font-medium">{label}</p>
    </motion.div>
  );
}


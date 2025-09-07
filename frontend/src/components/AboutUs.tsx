"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Utility to split text into letters for animation
function AnimatedText({ text, className }: { text: string; className?: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: `0.25em` },
    visible: { opacity: 1, y: `0em`, transition: { duration: 0.1 } },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-72 h-72 rounded-full bg-green-100 flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src="/farmerhelp.png" // replace with your image
              alt="Farmers using AgriSense technology"
              width={300}
              height={300}
              className="object-cover rounded-full"
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-6 left-10 bg-white rounded-xl shadow-lg px-6 py-4 flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full">
                <Image
              src="/agrisenselogo.png" // replace with your image
              alt="Farmers using AgriSense technology"
              width={300}
              height={300}
              className="object-cover rounded-full"
            />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800">5000+</h3>
              <p className="text-green-700 font-medium text-sm">
                Farmers Empowered
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Text Section */}
        <div className="space-y-6">
          <AnimatedText
            text="About AgriSense"
            className="text-green-600 text-3xl md:text-4xl font-semibold uppercase tracking-wide block"
          />

          <AnimatedText
            text="Changing Agriculture Through Technology"
            className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-800 block"
          />

          <AnimatedText
            text="AgriSense is on a mission to revolutionize farming by blending advanced technology, artificial intelligence, and agricultural expertise to empower farmers across India. We provide farmers with smart tools, predictive insights, and easy-to-use platforms that enhance crop productivity, reduce risks, and promote sustainable practices. Our goal is to ensure that every farmer, regardless of location or scale, has access to cutting-edge innovations that transform agriculture into a more profitable, efficient, and future-ready practice."
            className="text-gray-600 leading-relaxed block"
          />

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-green-100 p-6 rounded-xl"
            >
              <h3 className="text-green-800 font-bold text-lg">Our Mission</h3>
              <p className="text-gray-700 mt-2 text-sm">
                To empower farmers with intelligent, accessible, and affordable
                technology that optimizes productivity, strengthens resilience
                against climate change, and ensures sustainable farming
                practices for generations to come.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-100 p-6 rounded-xl"
            >
              <h3 className="text-green-800 font-bold text-lg">Our Vision</h3>
              <p className="text-gray-700 mt-2 text-sm">
                A future where every farmer leverages the power of artificial
                intelligence and digital innovation to achieve higher yields,
                improved income, and sustainable agricultural outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


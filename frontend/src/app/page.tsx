"use client";

import AboutSection from "@/components/AboutUs";
import FeaturesSection from "@/components/Features";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar"; // ✅ adjust path if needed

export default function HomePage() {
  return (
    <div className="relative">
      {/* Navbar always on top */}
      <Navbar />

      {/* Main landing content */}
      <main className="sm:mt-0 mt-14">
       <Home/>
       <FeaturesSection/>
       <AboutSection/>
      </main>
    </div>
  );
}




"use client";

import AboutSection from "../components/AboutUs";
import AgriculturalPrograms from "../components/Agriculturalprogram";
import ContactUs from "../components/contactus";
import FeaturesSection from "../components/Features";
import Footer from "../components/footer";
import Home from "../components/Home";
import ImpactSection from "../components/ImpactSection";
import Navbar from "../components/Navbar"; // ✅ adjust path if needed
import FarmersSay from "../components/sayabout";
import ImpactAcrossIndia from "../components/statewiseImpact";

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
       <ImpactSection/>
       <ImpactAcrossIndia/>
       <AgriculturalPrograms/>
       <FarmersSay/>
       <ContactUs/>
       <Footer/>
      </main>
    </div>
  );
}




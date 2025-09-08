// app/page.tsx
import { Suspense } from "react";

// Client-side components
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import FeaturesSection from "../components/Features";
import AboutSection from "../components/AboutUs";
import ImpactSection from "../components/ImpactSection";
import ImpactAcrossIndia from "../components/statewiseImpact";
import AgriculturalPrograms from "../components/Agriculturalprogram";
import FarmersSay from "../components/sayabout";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Navbar always on top */}
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>

      <main className="mt-14 sm:mt-0">
        <Suspense fallback={<div>Loading Home...</div>}>
          <Home />
        </Suspense>

        <Suspense fallback={<div>Loading Features...</div>}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<div>Loading About...</div>}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<div>Loading Impact...</div>}>
          <ImpactSection />
        </Suspense>

        <Suspense fallback={<div>Loading Impact Across India...</div>}>
          <ImpactAcrossIndia />
        </Suspense>

        <Suspense fallback={<div>Loading Programs...</div>}>
          <AgriculturalPrograms />
        </Suspense>

        <Suspense fallback={<div>Loading Farmers Say...</div>}>
          <FarmersSay />
        </Suspense>

        <Suspense fallback={<div>Loading Contact...</div>}>
          <ContactUs />
        </Suspense>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}




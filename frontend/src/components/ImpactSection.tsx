"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ImpactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Count only once when visible
    threshold: 0.3,    // 30% of the component should be visible
  });

  return (
    <section 
      ref={ref}
      className="bg-green-800 text-white py-16 px-4 text-center font-sans"
      style={{ fontFamily: "'Poppins', sans-serif" }} // Nice font style
    >
      <h2 className="text-3xl font-bold mb-12">Countrywide Impact of our work</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        
        <div>
          <h3 className="text-4xl font-extrabold text-green-400">
            {inView ? <CountUp end={3000} duration={2} suffix="+" /> : "0+"}
          </h3>
          <p className="mt-2">Farmers Served</p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold text-green-400">
            {inView ? <CountUp end={8000} duration={2} suffix="+" /> : "0+"}
          </h3>
          <p className="mt-2">Samples tested</p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold text-green-400">
            {inView ? <CountUp end={30} duration={2} /> : "0"}
          </h3>
          <p className="mt-2">Agricultural seminars</p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold text-green-400">
            {inView ? <CountUp end={25} duration={2} /> : "0"}
          </h3>
          <p className="mt-2">Indian States Covered</p>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

interface StateData {
  name: string;
  farmersConnected?: number;
  hectaresAnalyzed?: number;
  description?: string;
  primaryCrops?: string[];
  x: number;
  y: number;
}

const states: StateData[] = [
  // Active states
  {
    name: "Assam",
    farmersConnected: 3218,
    hectaresAnalyzed: 8750,
    description:
      "In Assam, we're helping farmers optimize their agricultural practices through soil analysis, weather forecasting, and AI-powered tools tailored to the specific conditions and crops of the region.",
    primaryCrops: ["Barley", "Jowar", "Tea", "Sugarcane", "Pineapple"],
    x: 85,
    y: 25,
  },
  {
    name: "Maharashtra",
    farmersConnected: 1200,
    hectaresAnalyzed: 3500,
    description:
      "In Maharashtra, we assist farmers with sustainable farming practices, efficient irrigation systems, and market linkage support to enhance productivity and income.",
    primaryCrops: ["Cotton", "Wheat", "Soybean"],
    x: 30,
    y: 50,
  },
  {
    name: "Karnataka",
    farmersConnected: 750,
    hectaresAnalyzed: 2000,
    description:
      "In Karnataka, our services focus on crop diversification, pest management, and advanced farm tools to support farmers' growth.",
    primaryCrops: ["Millets", "Coffee", "Maize"],
    x: 35,
    y: 70,
  },
  {
    name: "West Bengal",
    farmersConnected: 500,
    hectaresAnalyzed: 1300,
    description:
      "In West Bengal, we support farmers with modern farming techniques, crop diversification, and market access for better yields and profitability.",
    primaryCrops: ["Rice", "Jute", "Potatoes"],
    x: 78,
    y: 45,
  },
  {
    name: "Tamil Nadu",
    farmersConnected: 680,
    hectaresAnalyzed: 1500,
    description:
      "In Tamil Nadu, we work with farmers on efficient water management, organic farming, and market integration for improved livelihoods.",
    primaryCrops: ["Rice", "Sugarcane", "Banana"],
    x: 40,
    y: 85,
  },
  {
    name: "Uttar Pradesh",
    farmersConnected: 900,
    hectaresAnalyzed: 2700,
    description:
      "In Uttar Pradesh, we empower farmers with precision agriculture tools, soil testing services, and crop advisory support for better decision-making.",
    primaryCrops: ["Wheat", "Sugarcane", "Vegetables"],
    x: 60,
    y: 30,
  },
  {
    name: "Rajasthan",
    farmersConnected: 400,
    hectaresAnalyzed: 1100,
    description:
      "In Rajasthan, we help farmers combat water scarcity with drip irrigation techniques, drought-resistant crops, and efficient farm planning.",
    primaryCrops: ["Millets", "Wheat", "Mustard"],
    x: 20,
    y: 35,
  },
  {
    name: "Gujarat",
    farmersConnected: 600,
    hectaresAnalyzed: 1400,
    description:
      "In Gujarat, we focus on improving crop resilience, supporting horticulture, and linking farmers with better markets for sustainable development.",
    primaryCrops: ["Groundnut", "Cotton", "Pulses"],
    x: 15,
    y: 55,
  },
  {
    name: "Madhya Pradesh",
    farmersConnected: 850,
    hectaresAnalyzed: 2300,
    description:
      "In Madhya Pradesh, we assist farmers with integrated pest management, crop rotation techniques, and access to high-quality seeds.",
    primaryCrops: ["Soybean", "Wheat", "Maize"],
    x: 50,
    y: 55,
  },
  {
    name: "Odisha",
    farmersConnected: 550,
    hectaresAnalyzed: 1600,
    description:
      "In Odisha, we support sustainable farming, promote horticulture, and provide training on soil health and crop diversification.",
    primaryCrops: ["Rice", "Pulses", "Vegetables"],
    x: 68,
    y: 60,
  },

  // Inactive states — white dots, no details
  { name: "Punjab", x: 25, y: 20 },
  { name: "Haryana", x: 30, y: 15 },
  { name: "Himachal Pradesh", x: 35, y: 10 },
  { name: "Uttarakhand", x: 50, y: 15 },
  { name: "Arunachal Pradesh", x: 95, y: 20 },
  { name: "Nagaland", x: 88, y: 40 },
  { name: "Manipur", x: 90, y: 45 },
  { name: "Mizoram", x: 92, y: 50 },
];

function formatNumber(num: number) {
  return num.toLocaleString();
}

function calculateTotals() {
  let farmers = 0;
  let hectares = 0;
  states.forEach((state) => {
    if (state.farmersConnected) farmers += state.farmersConnected;
    if (state.hectaresAnalyzed) hectares += state.hectaresAnalyzed;
  });
  return { farmers, hectares };
}

export default function ImpactAcrossIndia() {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const totals = calculateTotals();

  return (
    <div className="flex flex-col md:flex-row h-screen w-auto overflow-hidden bg-gray-50">
      
      {/* Left Panel */}
      <div className="w-full md:w-2/5 bg-white shadow-md p-6 overflow-y-auto min-w-0">
        {selectedState ? (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-4">{selectedState.name}</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-green-100 p-4 rounded">
                <h3 className="text-sm font-semibold text-green-800">Farmers Connected</h3>
                <p className="text-xl font-bold text-green-700">{formatNumber(selectedState.farmersConnected || 0)}</p>
              </div>
              <div className="bg-green-100 p-4 rounded">
                <h3 className="text-sm font-semibold text-green-800">Hectares Analyzed</h3>
                <p className="text-xl font-bold text-green-700">{formatNumber(selectedState.hectaresAnalyzed || 0)}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{selectedState.description}</p>
            <div>
              <h3 className="text-sm font-semibold text-green-800 mb-2">Primary Crops</h3>
              <div className="flex flex-wrap gap-2">
                {selectedState.primaryCrops?.map((crop) => (
                  <span key={crop} className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full">{crop}</span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Pan India Overview</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-green-100 p-4 rounded">
                <h3 className="text-sm font-semibold text-green-800">Total Farmers Served</h3>
                <p className="text-xl font-bold text-green-700">{formatNumber(totals.farmers)}</p>
              </div>
              <div className="bg-green-100 p-4 rounded">
                <h3 className="text-sm font-semibold text-green-800">Total Samples Analyzed</h3>
                <p className="text-xl font-bold text-green-700">{formatNumber(totals.hectares)}</p>
              </div>
            </div>
            <p className="text-gray-700">
              Explore our impact across the states. Click on any state dot on the right to view detailed information about farmers, agricultural practices, and crop insights.
            </p>
          </>
        )}
      </div>

      {/* Map Panel */}
      <div className="flex-1 relative bg-green-50 min-w-0">
        {states.map((state) => (
          <div
            key={state.name}
            style={{ left: `${state.x}%`, top: `${state.y}%` }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center"
          >
            <button
              onClick={() => setSelectedState(state.farmersConnected ? state : null)}
              className={`w-6 h-6 rounded-full border-2 border-white transition ${
                state.farmersConnected ? "bg-green-600 hover:bg-green-700" : "bg-white hover:bg-gray-200"
              }`}
              title={state.name}
            />
            <div className="mt-1 text-xs font-medium text-green-800 whitespace-nowrap">{state.name}</div>
          </div>
        ))}
      </div>

    </div>
  );
}





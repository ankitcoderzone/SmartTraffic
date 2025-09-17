import React, { useEffect, useState } from "react";
import { FaCar, FaAmbulance, FaChartLine, FaUsers, FaRoad } from "react-icons/fa";
import { motion } from "framer-motion";
import WhySmartTraffic from "../components/SmartTraffic";

// Simple counter hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const HomePage = () => {
  // counters
  const vehiclesManaged = useCounter(235000);
  const emergencyCleared = useCounter(1200);
  const citiesCovered = useCounter(45);
  const co2Reduced = useCounter(8500);

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Smart Traffic Management System 🚦
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Making Indian roads safer, faster, and smarter with real-time monitoring,
          emergency vehicle prioritization, and AI-driven insights.
        </p>
        <a href="/dashboard" className="px-6 py-3 mt-10 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Explore Dashboard
        </a >
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Impact So Far 🚀
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <p className="text-4xl font-bold text-blue-700">{vehiclesManaged.toLocaleString()}+</p>
            <p className="text-sm text-gray-600">Vehicles Managed Today</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-600">{emergencyCleared.toLocaleString()}+</p>
            <p className="text-sm text-gray-600">Emergencies Cleared</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">{citiesCovered}</p>
            <p className="text-sm text-gray-600">Cities Covered</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600">{co2Reduced.toLocaleString()}kg</p>
            <p className="text-sm text-gray-600">CO₂ Reduced</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <FaAmbulance className="text-red-500 text-3xl" />,
              title: "Emergency Vehicle Priority",
              desc: "Ensures ambulances and fire trucks get green signals quickly, saving lives.",
            },
            {
              icon: <FaCar className="text-blue-500 text-3xl" />,
              title: "Real-time Traffic Updates",
              desc: "Live congestion tracking and smart rerouting for smoother journeys.",
            },
            {
              icon: <FaChartLine className="text-green-600 text-3xl" />,
              title: "Data & Analytics",
              desc: "Interactive dashboards with traffic trends, accident hotspots, and AI predictions.",
            },
            {
              icon: <FaUsers className="text-purple-600 text-3xl" />,
              title: "Citizen-Friendly Access",
              desc: "Simple interface designed for all users, including those less tech-savvy.",
            },
            {
              icon: <FaRoad className="text-yellow-500 text-3xl" />,
              title: "Smart Route Planning",
              desc: "Helps public transport and daily commuters with optimized travel paths.",
            },
            {
              icon: <FaChartLine className="text-indigo-600 text-3xl" />,
              title: "Authority Control",
              desc: "Authorities can monitor, analyze, and respond to incidents instantly.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Smart Traffic Matters (Road UI) */}
          <WhySmartTraffic/>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Smarter Roads Together
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join us in revolutionizing India’s traffic management with real-time technology,
          AI insights, and citizen-first design.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-300 py-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-2">Smart Traffic System</h3>
            <p className="text-sm">
              An innovative solution to make Indian roads safer, efficient, and
              eco-friendly using smart technologies.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-sm">📧 info@smarttraffic.in</p>
            <p className="text-sm">📍 New Delhi, India</p>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Smart Traffic System. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

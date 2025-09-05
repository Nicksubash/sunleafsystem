"use client";

import { useTheme } from "../../components/ThemeProvider";
import { useEffect, useState } from "react";
import Data from "../data/data.json";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const { theme } = useTheme();
  const { name, socials } = Data;

  const stats = [
    { label: "Team Members", value: 2 },
    { label: "Projects", value: 50 },
    { label: "Happy Clients", value: 400 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500; // 1.5s
    const incrementCounters = stats.map((stat, i) => {
      const stepTime = Math.ceil(duration / stat.value);
      let current = 0;
      const interval = setInterval(() => {
        current++;
        setCounters((prev) => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
        if (current >= stat.value) clearInterval(interval);
      }, stepTime);
      return interval;
    });

    return () => incrementCounters.forEach(clearInterval);
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Example Corp",
      quote: "Sunleaf System helped us scale our digital presence. Highly recommended!",
    },
    {
      name: "Jane Smith",
      role: "CTO, TechCo",
      quote: "Professional team and excellent results. The project exceeded expectations.",
    },
    {
      name: "Mike Johnson",
      role: "Founder, StartupX",
      quote: "Creative solutions and smooth communication throughout the project.",
    },
  ];

  return (
    <div className={`transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
    } min-h-screen`}>

      {/* Hero Section */}
      <section className={`py-20 px-6 ${
        theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}>
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              About <span className="text-cyan-500">{name}</span>
            </h1>
            <p className={`text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Sunleaf System Pvt Ltd. is dedicated to delivering innovative digital solutions that empower businesses to grow. Our team of experts specializes in mobile, web, and cloud solutions, providing a complete range of services for our clients.
            </p>
            <p className={`text-lg md:text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              We are committed to excellence, creativity, and building long-term relationships with our clients.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            {/* <img
              src="/about.svg" 
              alt="Company Illustration"
              className="w-full max-w-md"
            /> */}
            <motion.img
            src="/about.svg"
            alt="Company Illustration"
            className="w-full max-w-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold text-cyan-500">
                {counters[index]}{stat.label === "Happy Clients" ? "+" : ""}
              </h2>
              <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={`py-20 px-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}>
        <div className="container mx-auto max-w-6xl text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className={`rounded-xl p-6 border ${
                theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"
              } shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                <FaQuoteLeft className="text-cyan-500 w-6 h-6 mb-4 inline-block" />
                <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{test.quote}</p>
                <h3 className="font-semibold text-lg">{test.name}</h3>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{test.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
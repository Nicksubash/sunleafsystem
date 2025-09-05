"use client";

import AnimatedButton from "./buttons/AnimatedButton";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section className={`min-h-[80vh] flex items-center transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white" 
        : "bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900"
    }`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Empowering Your <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}>Digital Growth</span>
          </h1>
          <p className={`mt-6 text-lg md:text-xl max-w-lg mx-auto md:mx-0 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            We build scalable mobile and web applications tailored to your
            business needs. From startups to enterprises — we deliver
            innovative IT solutions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <AnimatedButton to="/contact">Get Started</AnimatedButton>
            <Link
              href="/services"
              className={`px-6 py-3 rounded-lg border transition ${
                theme === "dark" 
                  ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white" 
                  : "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white"
              }`}
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Right Visual with 3D Icons */}
        <div className="flex-1 hidden md:flex justify-center relative">
          <div className="relative w-96 h-96">
            {/* Central Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            
            {/* 3D Icon Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Mobile App Icon */}
              <div className="absolute top-8 left-8 icon-3d">
                <div className="w-16 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                  <div className="w-full h-3 bg-gray-800 rounded-t-lg"></div>
                  <div className="p-2 space-y-1">
                    <div className="w-8 h-1 bg-white/70 rounded"></div>
                    <div className="w-6 h-1 bg-white/50 rounded"></div>
                    <div className="w-10 h-1 bg-white/70 rounded"></div>
                    <div className="w-4 h-1 bg-white/50 rounded"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 rounded-lg blur-md -z-10"></div>
                </div>
              </div>

              {/* Database Icon */}
              <div className="absolute top-4 right-12 icon-3d">
                <div className="w-12 h-16 transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110">
                  <div className="w-full h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
                  <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700 -mt-1"></div>
                  <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700 mt-1"></div>
                  <div className="w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700 mt-1"></div>
                  <div className="w-full h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-1 shadow-lg"></div>
                  <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-lg -z-10"></div>
                </div>
              </div>

              {/* Code Icon */}
              <div className="absolute bottom-8 left-4 icon-3d">
                <div className="w-18 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 p-2">
                  <div className="text-white text-xs font-mono leading-tight">
                    <div className="text-cyan-300">&lt;/&gt;</div>
                  </div>
                  <div className="w-8 h-0.5 bg-green-400 rounded mt-1"></div>
                  <div className="w-6 h-0.5 bg-yellow-400 rounded mt-1"></div>
                  <div className="w-10 h-0.5 bg-red-400 rounded mt-1"></div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-lg blur-md -z-10"></div>
                </div>
              </div>

              {/* Cloud Icon */}
              <Image src="/cloud.png" alt="cloud" width={100} height={100} />

              {/* Gear Icon */}
              <div className="absolute bottom-4 right-8 icon-3d">
                <div className="w-14 h-14 transform rotate-45 hover:rotate-90 transition-all duration-700 hover:scale-110">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-2xl relative">
                    <div className="absolute inset-2 bg-gradient-to-br from-orange-300 to-orange-500 rounded"></div>
                    <div className="absolute inset-4 bg-gray-800 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
                    <div className="absolute left-0 top-1/2 w-2 h-2 bg-orange-400 rounded-full transform -translate-x-1 -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-orange-400 rounded-full transform translate-x-1 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -inset-2 bg-orange-400/20 rounded-lg blur-lg -z-10"></div>
                </div>
              </div>

              {/* Rocket Icon */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 icon-3d">
                <div className="w-8 h-16 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-full h-10 bg-gradient-to-b from-red-400 to-red-600 rounded-t-full"></div>
                  <div className="w-full h-6 bg-gradient-to-b from-red-500 to-red-700"></div>
                  <div className="absolute bottom-0 left-1 w-2 h-3 bg-orange-400 rounded-b-full"></div>
                  <div className="absolute bottom-0 right-1 w-2 h-3 bg-orange-400 rounded-b-full"></div>
                  <div className="absolute -inset-2 bg-red-400/20 rounded-full blur-lg -z-10"></div>
                </div>
              </div>

              {/* Central Tech Orb */}
              <div className="w-24 h-24 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full shadow-2xl relative overflow-hidden animate-pulse">
                <div className="absolute inset-2 bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-full"></div>
                <div className="absolute inset-4 bg-gradient-to-tr from-cyan-300 to-blue-300 rounded-full"></div>
                <div className="absolute inset-6 bg-white rounded-full opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .icon-3d {
          animation: float 6s ease-in-out infinite;
        }
        
        .icon-3d:nth-child(1) { animation-delay: 0s; }
        .icon-3d:nth-child(2) { animation-delay: 1s; }
        .icon-3d:nth-child(3) { animation-delay: 2s; }
        .icon-3d:nth-child(4) { animation-delay: 3s; }
        .icon-3d:nth-child(5) { animation-delay: 4s; }
        .icon-3d:nth-child(6) { animation-delay: 5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--initial-rotation, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--initial-rotation, 0deg)); }
        }
      `}</style>
    </section>
  );
}
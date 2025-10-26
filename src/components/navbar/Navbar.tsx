"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedButton from "@/components/buttons/AnimatedButton";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 shadow-md border-b backdrop-blur-sm transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-gray-900/95 text-white border-gray-700 shadow-gray-800/20" 
        : "bg-white/95 text-gray-900 border-gray-200 shadow-gray-200/20"
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={theme === "dark" ? "/icons/logo.png" : "/icons/logo-light.png"}
            alt="Sunleaf System Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
              theme === "dark" 
                ? "hover:bg-gray-800 hover:text-white" 
                : "hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
              theme === "dark" 
                ? "hover:bg-gray-800 hover:text-white" 
                : "hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
              theme === "dark" 
                ? "hover:bg-gray-800 hover:text-white" 
                : "hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
              theme === "dark" 
                ? "hover:bg-gray-800 hover:text-white" 
                : "hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/careers"
            className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
              theme === "dark" 
                ? "hover:bg-gray-800 hover:text-white" 
                : "hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Careers
          </Link>
          <AnimatedButton to="/contact">Contact</AnimatedButton>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-2xl p-2 rounded-md transition-all duration-200 ${
              theme === "dark" 
                ? "text-white hover:bg-gray-800" 
                : "text-gray-900 hover:bg-gray-100"
            }`}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden border-t flex flex-col space-y-2 px-6 pb-4 shadow-lg ${
          theme === "dark" 
            ? "bg-gray-900 border-gray-700 shadow-gray-800/20" 
            : "bg-white border-gray-200 shadow-gray-200/20"
        }`}>
          <Link href="/" className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
            theme === "dark" 
              ? "hover:bg-gray-800 hover:text-white" 
              : "hover:bg-gray-100 hover:text-gray-900"
          }`}>
            Home
          </Link>
          <Link href="/services" className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
            theme === "dark" 
              ? "hover:bg-gray-800 hover:text-white" 
              : "hover:bg-gray-100 hover:text-gray-900"
          }`}>
            Services
          </Link>
          <Link href="/about" className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
            theme === "dark" 
              ? "hover:bg-gray-800 hover:text-white" 
              : "hover:bg-gray-100 hover:text-gray-900"
          }`}>
            About
          </Link>
          <Link href="/projects" className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
            theme === "dark" 
              ? "hover:bg-gray-800 hover:text-white" 
              : "hover:bg-gray-100 hover:text-gray-900"
          }`}>
            Projects
          </Link>
          <Link href="/careers" className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
            theme === "dark" 
              ? "hover:bg-gray-800 hover:text-white" 
              : "hover:bg-gray-100 hover:text-gray-900"
          }`}>
            Careers
          </Link>
          <Link href="/contact" className={`px-3 py-2 rounded-md transition-all duration-200 font-medium ${
            theme === "dark" 
              ? "hover:bg-gray-800 hover:text-white" 
              : "hover:bg-gray-100 hover:text-gray-900"
          }`}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

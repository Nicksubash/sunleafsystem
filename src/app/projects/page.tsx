"use client";

import { useTheme } from "../../components/ThemeProvider";
import { motion } from "framer-motion";
import Data from "../data/data.json";
import Image from "next/image"; 

export default function ProjectsPage() {
  const { theme } = useTheme();
  const { projects } = Data;

  return (
    <div
      className={`transition-colors duration-300 min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`py-20 px-6 ${
          theme === "dark"
            ? "bg-gray-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
      >
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Our <span className="text-cyan-500">Projects</span>
            </h1>
            <p
              className={`text-lg md:text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore our portfolio of projects. We deliver innovative solutions across mobile, web, and cloud platforms for clients worldwide.
            </p>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center">
            <motion.img
              src="/project.svg"
              alt="Projects Illustration"
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 shadow-gray-800/20"
                    : "bg-white border-gray-100 shadow-gray-200/20"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* FIX 2: Replaced <img> with <Image> */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3
                    className={`text-2xl font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-gray-400 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-cyan-500 hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-500">50+</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              Projects Completed
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-cyan-500">400+</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              Happy Clients
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-cyan-500">10+</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
              Awards Won
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../../components/ThemeProvider";

export default function ServicesPage() {
  const { theme } = useTheme();
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development", "SEO Optimization"],
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["React Native", "iOS Development", "Android Development", "App Store Optimization", "Push Notifications"],
      icon: "📱",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions to ensure your applications run efficiently and securely.",
      features: ["AWS & Azure", "DevOps & CI/CD", "Cloud Migration", "Server Management", "Security & Monitoring"],
      icon: "☁️",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "UX/UI & Graphic Design",
      description: "Beautiful, intuitive designs that enhance user experience and strengthen your brand identity across all platforms.",
      features: ["User Research", "Wireframing", "Visual Design", "Brand Identity", "Design Systems"],
      icon: "🎨",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation consulting to help your business leverage technology for growth and efficiency.",
      features: ["Business Analysis", "Technology Consulting", "Process Automation", "Digital Marketing", "Analytics & Insights"],
      icon: "📊",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing technical support and maintenance to keep your digital solutions running smoothly and up-to-date.",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Bug Fixes", "Feature Enhancements"],
      icon: "🔧",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className={`transition-colors duration-300 min-h-screen ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
    }`}>
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            theme === "dark" ? "bg-cyan-900 text-cyan-200" : "bg-cyan-100 text-cyan-800"
          }`}>
            Our Services
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Digital Reality</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            We provide comprehensive IT solutions that drive innovation, enhance user experiences, 
            and accelerate your business growth in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border ${
                  theme === "dark" 
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600" 
                    : "bg-white border-gray-100 hover:border-gray-200"
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                  theme === "dark" 
                    ? "text-white group-hover:text-gray-200" 
                    : "text-gray-900 group-hover:text-gray-800"
                }`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Learn More Button */}
                <button className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200`}>
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${
        theme === "dark" 
          ? "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" 
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      }`}>
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A streamlined approach that ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
              { step: "02", title: "Planning", description: "Creating detailed roadmaps and strategies" },
              { step: "03", title: "Development", description: "Building with cutting-edge technologies" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success" }
            ].map((phase, index) => (
              <div key={index} className="text-center group relative">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Ready to Start Your
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Digital Journey?</span>
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            Let's discuss how we can bring your vision to life with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className={`inline-flex items-center px-8 py-4 font-medium rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                theme === "dark" 
                  ? "bg-gray-800 text-gray-200 border-gray-600 hover:border-cyan-500" 
                  : "bg-white text-gray-700 border-gray-200 hover:border-cyan-300"
              }`}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
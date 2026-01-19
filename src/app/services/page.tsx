"use client";

import Link from "next/link";
import { useTheme } from "../../components/ThemeProvider";

export default function ServicesPage() {
  const { theme } = useTheme();

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development", "SEO Optimization"],
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500",
      link: "/services/web-development"
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
    <div className={`transition-colors duration-300 min-h-screen ${theme === "dark"
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}>
      {/* Header Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${theme === "dark" ? "bg-cyan-900 text-cyan-200" : "bg-cyan-100 text-cyan-800"
            }`}>
            Our Services
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Digital Reality</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
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
              <Link
                key={service.id}
                href={service.link || '#'}
                className={`group relative rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border block ${theme === "dark"
                  ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                  : "bg-white border-gray-100 hover:border-gray-200"
                  }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${theme === "dark"
                  ? "text-white group-hover:text-gray-200"
                  : "text-gray-900 group-hover:text-gray-800"
                  }`}>
                  {service.title}
                </h3>

                <p className={`leading-relaxed mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 ${theme === "dark"
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

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${theme === "dark" ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-800"
              }`}>
              Transparent Pricing
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
              Affordable & <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
              Clear pricing designed for Nepali businesses. No hidden costs.
            </p>
          </div>

          {/* Domain & Hosting Pricing */}
          <div className="mb-20">
            <h3 className={`text-2xl font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
              Domain & Hosting Services
            </h3>
            <div className={`rounded-2xl overflow-hidden border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              } shadow-lg`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-50"}`}>
                      <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}>
                        Service
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}>
                        Price
                      </th>
                      <th className={`px-6 py-4 text-left text-sm font-semibold ${theme === "dark" ? "text-gray-200" : "text-gray-900"
                        }`}>
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${theme === "dark" ? "divide-gray-700" : "divide-gray-200"}`}>
                    <tr className={`transition-colors ${theme === "dark" ? "hover:bg-gray-750" : "hover:bg-gray-50"}`}>
                      <td className={`px-6 py-4 font-medium ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Domain Registration
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">From NPR 1,500</span>
                        <span className={`text-sm ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>/ year</span>
                      </td>
                      <td className={`px-6 py-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        .com.np free | .com from NPR 1,500
                      </td>
                    </tr>
                    <tr className={`transition-colors ${theme === "dark" ? "hover:bg-gray-750" : "hover:bg-gray-50"}`}>
                      <td className={`px-6 py-4 font-medium ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Shared Hosting
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">From NPR 3,000</span>
                        <span className={`text-sm ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>/ year</span>
                      </td>
                      <td className={`px-6 py-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        Perfect for small websites
                      </td>
                    </tr>
                    <tr className={`transition-colors ${theme === "dark" ? "hover:bg-gray-750" : "hover:bg-gray-50"}`}>
                      <td className={`px-6 py-4 font-medium ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        VPS Hosting
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">From NPR 8,000</span>
                        <span className={`text-sm ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>/ year</span>
                      </td>
                      <td className={`px-6 py-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        More power and control
                      </td>
                    </tr>
                    <tr className={`transition-colors ${theme === "dark" ? "hover:bg-gray-750" : "hover:bg-gray-50"}`}>
                      <td className={`px-6 py-4 font-medium ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Business Email
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">From NPR 2,000</span>
                        <span className={`text-sm ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>/ year</span>
                      </td>
                      <td className={`px-6 py-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        Professional email addresses
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={`px-6 py-4 border-t ${theme === "dark" ? "bg-gray-750 border-gray-700" : "bg-gray-50 border-gray-200"
                }`}>
                <div className="flex items-start gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    <strong className="text-green-600 dark:text-green-400">.com.np domains are FREE</strong> from Nepal Government! We provide free guidance on registration.
                  </p>
                </div>
                <p className={`text-xs italic ml-7 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  *Prices shown are starting estimates. Final pricing may vary based on requirements, renewal terms, and third-party providers.
                </p>
              </div>
            </div>
          </div>

          {/* Website Development Packages */}
          <div className="mb-20">
            <h3 className={`text-2xl font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
              Website Development Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Package */}
              <div className={`relative rounded-2xl p-8 transition-all duration-300 border-2 ${theme === "dark" ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-200 hover:border-gray-300"
                } hover:shadow-xl`}>
                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Starter Website
                  </h4>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    <span className="text-sm font-normal">From </span>NPR 15,000
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Perfect for individuals & small shops
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["1–3 pages", "Mobile responsive", "Contact form", "Basic SEO setup", "1 month free support"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Business Package - Most Popular */}
              <div className={`relative rounded-2xl p-8 transition-all duration-300 border-2 border-blue-500 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Business Website
                  </h4>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    <span className="text-sm font-normal">From </span>NPR 30,000
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Best for growing businesses
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["5–8 pages", "SEO ready", "Admin panel", "Google Analytics", "3 months free support"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105"
                >
                  Get Free Consultation
                </Link>
              </div>

              {/* Custom Package */}
              <div className={`relative rounded-2xl p-8 transition-all duration-300 border-2 ${theme === "dark" ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-200 hover:border-gray-300"
                } hover:shadow-xl`}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Best Value
                </div>
                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Custom / Pro Website
                  </h4>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Custom Quote
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    E-commerce & advanced features
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Unlimited pages", "Custom features", "Scalable architecture", "Priority support", "6 months free support"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="mb-20">
            <div className={`rounded-2xl p-8 md:p-12 ${theme === "dark" ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700" : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
              }`}>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl mb-6">
                  📱
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  Mobile App Development
                </h3>
                <div className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Starting from NPR 120,000
                </div>
                <p className={`text-lg mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Final pricing depends on features, platform (Android/iOS), and integrations.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: "💬", text: "Free requirement discussion" },
                    { icon: "📊", text: "Transparent cost breakdown" },
                    { icon: "✓", text: "No hidden charges" }
                  ].map((item, index) => (
                    <div key={index} className={`p-4 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"
                      }`}>
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Discuss Your App Idea
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Maintenance & Support */}
          <div className="mb-20">
            <h3 className={`text-2xl font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
              Maintenance & Support Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Website Maintenance", price: "NPR 2,000", features: ["Regular updates", "Security monitoring", "Content updates"] },
                { name: "Hosting Support", price: "NPR 1,000", features: ["Server monitoring", "Backup management", "Technical support"] },
                { name: "App Maintenance", price: "From NPR 5,000", features: ["Bug fixes", "OS updates", "Performance monitoring"] }
              ].map((plan, index) => (
                <div key={index} className={`rounded-xl p-6 border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                  } hover:shadow-lg transition-shadow`}>
                  <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{plan.price}</span>
                    <span className={`text-sm ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>/ month</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className={`text-sm flex items-start ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                        <svg className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={`text-center mt-6 text-sm italic ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Flexible monthly plans available
            </p>
          </div>

          {/* Trust Badges & Final CTA */}
          <div className={`rounded-2xl p-8 md:p-12 text-center ${theme === "dark" ? "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-800/30" : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100"
            }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: "✓", text: "No hidden costs" },
                { icon: "✓", text: "Free consultation" },
                { icon: "✓", text: "Local Nepali support" },
                { icon: "✓", text: "Flexible payment options" }
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mb-3">
                    {badge.icon}
                  </div>
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    {badge.text}
                  </p>
                </div>
              ))}
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Not sure which plan fits you?
            </h3>
            <p className={`text-lg mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Talk to us — it&apos;s free.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Schedule Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
            Ready to Start Your
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Digital Journey?</span>
          </h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
            {/* FIX: Changed Let's to Let&apos;s */}
            Let&apos;s discuss how we can bring your vision to life with innovative technology solutions.
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
              href="/projects"
              className={`inline-flex items-center px-8 py-4 font-medium rounded-xl border-2 transition-all duration-300 hover:scale-105 ${theme === "dark"
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
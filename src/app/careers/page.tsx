"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

// SEO-optimized careers page for Sunleaf System
// Focus: Talent pool, company values, and international (Japan) experience

export default function CareersPage() {
    const { theme } = useTheme();

    const values = [
        {
            icon: "🚀",
            title: "Innovation First",
            description: "We apply modern technologies and practical thinking to deliver reliable, real-world solutions."
        },
        {
            icon: "🤝",
            title: "Collaboration",
            description: "We work with clear communication, shared responsibility, and respect across teams and partners."
        },
        {
            icon: "📈",
            title: "Continuous Growth",
            description: "We believe in learning through real projects, feedback, and continuous improvement."
        },
        {
            icon: "⚖️",
            title: "Work-Life Balance",
            description: "We value sustainable work practices and respect personal time and focus."
        }
    ];

    const departments = [
        {
            name: "Engineering",
            description: "Designing and building scalable web, mobile, and backend systems",
            areas: ["Frontend Development", "Backend Development", "Mobile Development", "DevOps"]
        },
        {
            name: "Design",
            description: "Creating user-focused, consistent, and practical digital experiences",
            areas: ["UI/UX Design", "Graphic Design", "Brand Design", "Product Design"]
        },
        {
            name: "Business",
            description: "Supporting project delivery, client communication, and long-term growth",
            areas: ["Project Management", "Business Development", "Client Relations", "Marketing"]
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            {/* Hero Section */}
            <section className={`pt-24 pb-16 px-6 ${theme === "dark"
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
                : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
            }`}>
                <div className="container mx-auto max-w-6xl text-center">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${theme === "dark"
                        ? "bg-cyan-900 text-cyan-200"
                        : "bg-cyan-100 text-cyan-800"
                    }`}>
                        Building Our Team
                    </div>

                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Careers at
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Sunleaf System</span>
                    </h1>

                    <p className={`text-xl max-w-3xl mx-auto leading-relaxed mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        Sunleaf System is a growing IT company based in Nepal, delivering web, mobile, and software solutions.
                        While we are not actively hiring at the moment, we are building a talent pool of skilled professionals
                        for future opportunities.
                    </p>

                    <p className={`text-lg max-w-2xl mx-auto mb-8 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        🇯🇵 <strong>International Experience:</strong> Our team has worked with Japanese companies,
                        following global development standards and professional workflows.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Join Our Talent Pool
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            Why <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Sunleaf System?</span>
                        </h2>
                        <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            We focus on building dependable software, maintaining clear communication,
                            and delivering work that meets both local and international expectations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${theme === "dark"
                                    ? "bg-gray-800 border-gray-700 hover:border-cyan-500/50"
                                    : "bg-white border-gray-200 hover:border-cyan-500/50"
                                }`}
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                    {value.title}
                                </h3>
                                <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departments Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            Explore <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Areas of Work</span>
                        </h2>
                        <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            These are the areas where we regularly collaborate and build expertise.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {departments.map((dept, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${theme === "dark"
                                    ? "bg-gray-800 border-gray-700 hover:border-cyan-500"
                                    : "bg-white border-gray-200 hover:border-cyan-500"
                                }`}
                            >
                                <h3 className={`text-2xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                    {dept.name}
                                </h3>
                                <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                                    {dept.description}
                                </p>
                                <div className="space-y-2">
                                    {dept.areas.map((area, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mr-3"></div>
                                            <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                                                {area}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        Stay Connected With Us
                    </h2>

                    <p className={`text-xl mb-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                        We may not have open positions today, but we are always open to connecting with
                        motivated and skilled professionals.
                    </p>

                    <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                        Share your resume or portfolio, and we will reach out when a suitable opportunity becomes available.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Submit Your Resume
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <a
                            href="mailto:sunleafsystem2025@gmail.com?subject=Career Inquiry - Talent Pool"
                            className={`inline-flex items-center px-8 py-4 font-medium rounded-xl border-2 transition-all duration-300 hover:scale-105 ${theme === "dark"
                                ? "bg-gray-800 text-gray-200 border-gray-600 hover:border-cyan-500"
                                : "bg-white text-gray-700 border-gray-200 hover:border-cyan-300"
                            }`}
                        >
                            Email Us Directly
                        </a>
                    </div>

                    <div className={`mt-12 p-6 rounded-xl border ${theme === "dark"
                        ? "bg-gray-800 border-gray-700"
                        : "bg-cyan-50 border-cyan-200"
                    }`}>
                        <h3 className={`text-lg font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            📧 Stay in Touch
                        </h3>
                        <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                            Email: <a href="mailto:sunleafsystem2025@gmail.com" className="text-cyan-500 hover:underline font-medium">sunleafsystem2025@gmail.com</a>
                        </p>
                        <p className={`text-xs mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                            We review all submissions and keep them on file for future opportunities.
                            Typical response time is within a few business days.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";

import { useTheme } from "@/components/ThemeProvider";
import AnimatedButton from "@/components/buttons/AnimatedButton";
import Link from "next/link";
import Image from "next/image";

export default function SplitdownPage() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}>
            <div className="container mx-auto px-6">
                <Link
                    href="/products"
                    className={`inline-flex items-center mb-8 hover:underline ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                        }`}
                >
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Products
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                            Splitdown
                        </h1>
                        <p className={`text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                            Simplify your workflow with Splitdown. The ultimate tool designed to break down complex projects into manageable, bite-sized tasks.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="text-blue-500 mt-1">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p>Smart task decomposition</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="text-blue-500 mt-1">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p>Team collaboration made easy</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="text-blue-500 mt-1">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p>Real-time progress tracking</p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <AnimatedButton to="/contact">Get Demo</AnimatedButton>
                        </div>
                    </div>

                    <div className={`aspect-square rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                        }`}>
                        {/* Placeholder for Product Image */}
                        <div className="relative w-full max-w-[320px] aspect-[9/19] mx-auto">
                        <Image
                            src="/splitdownCover.png"
                            alt="Splitdown App Screenshot"
                            fill
                            className="object-contain"
                            priority
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

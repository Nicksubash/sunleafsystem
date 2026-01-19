"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

export default function ProductsPage() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
            }`}>
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Our Products
                    </h1>
                    <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                        Innovative solutions to simplify your financial life
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Splitdown Card */}
                    <Link href="/products/splitdown" className="group md:col-span-2 lg:col-span-3">
                        <div className={`rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02] ${theme === "dark"
                            ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                            : "bg-white border-gray-200 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
                            }`}>
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Image Section */}
                                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                                    <Image
                                        src="/splitdownCover.png"
                                        alt="Splitdown - Expense Splitting & Finance Tracking App"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                    {/* Platform Badge */}
                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503c-1.6112-.7416-3.4496-1.1546-5.3816-1.1546-1.9321 0-3.7705.413-5.3816 1.1546L4.34 5.4367a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-5.6185-9.4396" />
                                        </svg>
                                        Android
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <h2 className="text-3xl font-bold group-hover:text-blue-500 transition-colors">
                                                Splitdown
                                            </h2>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === "dark"
                                                ? "bg-blue-500/20 text-blue-400"
                                                : "bg-blue-100 text-blue-600"
                                                }`}>
                                                Finance App
                                            </span>
                                        </div>

                                        <p className={`text-lg mb-6 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                                            Split expenses effortlessly with friends and family while tracking your personal finances—all in one powerful app.
                                        </p>

                                        {/* Key Features */}
                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                                                    Split bills and expenses with groups
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                                                    Track personal expenses and budgets
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
                                                    Settle up with automatic calculations
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-blue-500 font-semibold text-lg group-hover:gap-4 transition-all">
                                            Learn more
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

"use client";

interface PricingCardProps {
    name: string;
    price: string;
    description: string;
    features: string[];
    gradient: string;
    popular?: boolean;
    badge?: string | null;
    theme: string;
    onCTAClick?: () => void;
}

export default function PricingCard({
    name,
    price,
    description,
    features,
    gradient,
    popular = false,
    badge,
    theme,
    onCTAClick
}: PricingCardProps) {
    return (
        <div
            className={`relative rounded-2xl p-8 transition-all duration-300 border-2 ${popular
                    ? `border-blue-500 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"}`
                    : `${theme === "dark" ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-200 hover:border-gray-300"}`
                } hover:shadow-xl`}
        >
            {/* Badge */}
            {badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${gradient} text-white`}>
                    {badge}
                </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {name}
                </h3>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {price.includes("Custom") ? price : (
                        <>
                            <span className="text-sm font-normal">From </span>
                            {price}
                        </>
                    )}
                </div>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    {description}
                </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg
                            className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button
                onClick={onCTAClick}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${popular
                        ? `bg-gradient-to-r ${gradient} text-white hover:shadow-lg hover:scale-105`
                        : `${theme === "dark" ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`
                    }`}
            >
                Get Free Consultation
            </button>
        </div>
    );
}

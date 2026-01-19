"use client";

interface PricingTableProps {
    items: Array<{
        service: string;
        price: string;
        period: string;
        description: string;
    }>;
    theme: string;
}

export default function PricingTable({ items, theme }: PricingTableProps) {
    return (
        <div className={`rounded-2xl overflow-hidden border ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}>
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
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {items.map((item, index) => (
                            <tr key={index} className={`transition-colors ${theme === "dark" ? "hover:bg-gray-750" : "hover:bg-gray-50"
                                }`}>
                                <td className={`px-6 py-4 font-medium ${theme === "dark" ? "text-white" : "text-gray-900"
                                    }`}>
                                    {item.service}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                                        From {item.price}
                                    </span>
                                    <span className={`text-sm ml-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                        {item.period}
                                    </span>
                                </td>
                                <td className={`px-6 py-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                                    }`}>
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`px-6 py-3 text-xs italic ${theme === "dark" ? "bg-gray-750 text-gray-400" : "bg-gray-50 text-gray-600"
                }`}>
                *Prices may vary depending on provider and requirements
            </div>
        </div>
    );
}

// src/data/pricingData.js

export const domainHostingPricing = [
  {
    service: "Domain Registration",
    price: "From NPR 1,500",
    period: "/ year",
    description: ".com.np free | .com from NPR 1,500",
    renewalNote: "Renewal price may vary based on domain registrar"
  },
  {
    service: "Shared Hosting",
    price: "From NPR 3,000",
    period: "/ year",
    description: "Perfect for small websites",
    renewalNote: "Renewal pricing may vary based on usage"
  },
  {
    service: "VPS Hosting",
    price: "From NPR 8,000",
    period: "/ year",
    description: "More power and control",
    renewalNote: "Final cost depends on server resources"
  },
  {
    service: "Business Email",
    price: "From NPR 2,000",
    period: "/ year",
    description: "Professional email addresses",
    renewalNote: "Renewal price may vary by mailbox size"
  }
];

export const websitePackages = [
  {
    name: "Starter Website",
    price: "From NPR 15,000",
    description: "Perfect for individuals & small shops",
    features: [
      "1–3 pages",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "1 month free support"
    ],
    popular: false
  },
  {
    name: "Business Website",
    price: "From NPR 30,000",
    description: "Best for growing businesses",
    features: [
      "5–8 pages",
      "SEO ready",
      "Admin panel",
      "Google Analytics",
      "3 months free support"
    ],
    popular: true
  },
  {
    name: "Custom / Pro Website",
    price: "Custom Quote",
    description: "E-commerce & advanced features",
    features: [
      "Unlimited pages",
      "Custom features",
      "Scalable architecture",
      "Priority support",
      "6 months free support"
    ],
    popular: false
  }
];

export const maintenancePricing = [
  {
    service: "Website Maintenance",
    price: "NPR 2,000",
    period: "/ month",
    features: [
      "Regular updates",
      "Security monitoring",
      "Content updates"
    ]
  },
  {
    service: "Hosting Support",
    price: "NPR 1,000",
    period: "/ month",
    features: [
      "Server monitoring",
      "Backup management",
      "Technical support"
    ]
  },
  {
    service: "App Maintenance",
    price: "From NPR 5,000",
    period: "/ month",
    features: [
      "Bug fixes",
      "OS updates",
      "Performance monitoring"
    ]
  }
];

export const trustBadges = [
  "No hidden costs",
  "Free consultation",
  "Local Nepali support",
  "Flexible payment options"
];

export const pricingDisclaimer =
  "Prices shown are starting estimates. Final pricing may vary based on requirements, renewal terms, and third-party providers.";
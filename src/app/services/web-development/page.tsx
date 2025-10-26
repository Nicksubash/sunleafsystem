"use client";

import Link from "next/link";
import { useTheme } from "../../../components/ThemeProvider";

export default function WebDevelopmentPage() {
  const { theme } = useTheme();

  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "Modern UI library for building interactive user interfaces" },
        { name: "Next.js", description: "Full-stack React framework with server-side rendering" },
        { name: "TypeScript", description: "Type-safe JavaScript for better development experience" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Vue.js", description: "Progressive JavaScript framework for building UIs" },
        { name: "Angular", description: "Platform for building mobile and desktop web applications" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "JavaScript runtime for server-side development" },
        { name: "Express.js", description: "Fast, unopinionated web framework for Node.js" },
        { name: "Python", description: "Versatile language with Django and Flask frameworks" },
        { name: "PHP", description: "Server-side scripting language with Laravel framework" },
        { name: "Java", description: "Enterprise-grade development with Spring Boot" },
        { name: "C#", description: "Microsoft's language with ASP.NET Core framework" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", description: "NoSQL document database for flexible data storage" },
        { name: "PostgreSQL", description: "Advanced open-source relational database" },
        { name: "MySQL", description: "Popular open-source relational database management system" },
        { name: "Redis", description: "In-memory data structure store for caching" },
        { name: "Firebase", description: "Google's platform for mobile and web development" },
        { name: "Supabase", description: "Open-source Firebase alternative" }
      ]
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", description: "Amazon Web Services cloud platform" },
        { name: "Vercel", description: "Platform for frontend frameworks and static sites" },
        { name: "Netlify", description: "Web development platform for static sites" },
        { name: "Docker", description: "Containerization platform for applications" },
        { name: "Kubernetes", description: "Container orchestration system" },
        { name: "GitHub Actions", description: "CI/CD platform for automated workflows" }
      ]
    }
  ];

  const services = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built to meet your specific business requirements",
      features: [
        "Responsive design for all devices",
        "User authentication and authorization",
        "Real-time data synchronization",
        "API integration and development",
        "Performance optimization",
        "Security best practices"
      ],
      icon: "🌐"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment processing and inventory management",
      features: [
        "Shopping cart functionality",
        "Payment gateway integration",
        "Inventory management system",
        "Order tracking and management",
        "Customer account management",
        "Analytics and reporting"
      ],
      icon: "🛒"
    },
    {
      title: "Content Management Systems",
      description: "Easy-to-use CMS for managing your website content without technical knowledge",
      features: [
        "Drag-and-drop page builder",
        "Media library management",
        "User role management",
        "SEO optimization tools",
        "Multi-language support",
        "Backup and version control"
      ],
      icon: "📝"
    },
    {
      title: "Progressive Web Apps",
      description: "Web applications that work like native mobile apps with offline capabilities",
      features: [
        "Offline functionality",
        "Push notifications",
        "App-like user experience",
        "Fast loading times",
        "Installable on devices",
        "Background sync"
      ],
      icon: "📱"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your project."
    },
    {
      step: "03",
      title: "Development",
      description: "We build your web application using modern technologies and best practices for optimal performance."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Thorough testing across different devices, browsers, and scenarios to ensure flawless functionality."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We deploy your application to production and provide ongoing support and maintenance."
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Web Development Services
            </h1>
            <p className="text-xl light:text-gray-900 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your ideas into powerful, scalable web applications with our expert development team. 
              We create modern, responsive, and high-performance websites that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{tech.category}</h3>
                <div className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <div key={idx} className="border-l-2 border-blue-500 pl-3">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Web Application?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/projects" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useTheme } from "../../components/ThemeProvider";
import Data from "../data/data.json";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  const { theme } = useTheme();
  const { contact } = Data;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- THIS IS THE UPDATED FUNCTION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); 

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // If the server response is not OK, throw an error
        throw new Error('Failed to send message.');
      }

      // If successful, show the success message
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", subject: "", message: "" }); // Reset form

      // Hide success message after 3 seconds
      // setTimeout(() => {
      //   setIsSubmitted(false);
      // }, 3000);

    } catch (err) {
      // Catch any errors and display them
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      // Always stop the submitting spinner
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`transition-colors duration-300 min-h-screen ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
    }`}>
      
      {/* Header Section */}
      <section className={`pt-20 pb-16 px-6 ${
        theme === "dark" ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}>
        <div className="container mx-auto max-w-6xl text-center">
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            theme === "dark" ? "bg-cyan-900 text-cyan-200" : "bg-cyan-100 text-cyan-800"
          }`}>
            Get In Touch
          </div>
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {/* FIX: Changed Let's to Let&apos;s */}
            Let&apos;s Start Your
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Digital Journey</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}>
            {/* FIX: Changed We're to We&apos;re */}
            Ready to transform your ideas into reality? We&apos;re here to help you build innovative solutions 
            that drive your business forward.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className={`rounded-2xl p-8 shadow-lg border ${
              theme === "dark" 
                ? "bg-gray-800 border-gray-700 shadow-gray-800/20" 
                : "bg-white border-gray-100 shadow-gray-200/20"
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>Message Sent!</h3>
                  <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
                    {/* FIX: Changed We'll to We&apos;ll */}
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          theme === "dark" 
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                          theme === "dark" 
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                        theme === "dark" 
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                        theme === "dark" 
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none ${
                        theme === "dark" 
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" 
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
                <div>
                    <h2 className={`text-3xl font-bold mb-6 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>
                            Contact Information
                    </h2>
                    <p className={`text-lg mb-8 ${
                         theme === "dark" ? "text-gray-300" : "text-gray-600"
                         }`}>
                            {/* FIX: Changed We're and we'll */}
                            We&apos;re here to help! Reach out to us through any of these channels, 
                            and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>
                {/* Single Card for all contact info */}
            <div className={`rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 ${
    theme === "dark" 
      ? "bg-gray-800 border-gray-700 shadow-gray-800/20 hover:shadow-gray-800/30" 
      : "bg-white border-gray-100 shadow-gray-200/20 hover:shadow-gray-200/30"
  }`}>
    <div className="grid grid-cols-1 gap-4">
      {/* Phone */}
      {contact.phone && (
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <FaPhone className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Phone</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{contact.phone}</p>
          </div>
        </div>
      )}

      {/* Email */}
      {contact.email && (
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 text-white">
            <FaEnvelope className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Email</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{contact.email}</p>
          </div>
        </div>
      )}

      {/* Address */}
      {contact.address && (
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <FaMapMarkerAlt className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Address</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{contact.address}</p>
          </div>
        </div>
      )}

      {/* Hours */}
      {contact.hours && (
        <div className="flex items-start space-x-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <FaClock className="w-6 h-6" />
          </div>
          <div>
            <h3 className={`text-xl font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Hours</h3>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>{contact.hours}</p>
          </div>
        </div>
      )}
    </div>
  </div>
</div>



          </div>
        </div>
      </section>
    </div>
  );
}
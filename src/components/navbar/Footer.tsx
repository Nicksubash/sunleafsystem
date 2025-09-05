"use client";

import Link from "next/link";
import { useTheme } from "../ThemeProvider";
import Data from "../../app/data/data.json";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaBlogger } from "react-icons/fa";
import { ReactElement } from "react";


export default function Footer() {
  const { theme } = useTheme();
  const { name, contact, socials } = Data;


const iconMap: { [key: string]: ReactElement } = {
  facebook: <FaFacebookF />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
  blog: <FaBlogger />,
};


  return (
    <footer
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-900"
      } py-12 px-6`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Development Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Development Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services#mobile" className="hover:underline">
                Mobile Development
              </Link>
            </li>
            <li>
              <Link href="/services#web" className="hover:underline">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services#cloud" className="hover:underline">
                Cloud Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Marketing Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Marketing Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services#seo" className="hover:underline">
                SEO & Analytics
              </Link>
            </li>
            <li>
              <Link href="/services#social" className="hover:underline">
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link href="/services#content" className="hover:underline">
                Content Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <ul className="space-y-2 text-sm mb-4">
            <li>Email: <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a></li>
            <li>Phone: <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a></li>
          </ul>
        </div>
      </div>

      {/* Centered Social Icons */}
      <div className="flex justify-center space-x-6 mt-8 text-2xl">
        {socials.map((social) => {
          const icon = iconMap[social.title.toLowerCase()];
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition"
              title={social.title}
            >
              {icon || social.title}
            </a>
          );
        })}
      </div>

      {/* FAQ / Terms / Privacy links below icons */}
      <ul className="flex justify-center space-x-6 mt-4 text-sm">
        <li>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
      </ul>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-sm text-center">
        &copy; 2025 {name}. All Rights Reserved.
      </div>
    </footer>
  );
}
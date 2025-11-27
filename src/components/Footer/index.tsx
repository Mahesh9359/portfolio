"use client";

import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSend,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { FaLinkedinIn, FaRegSmile } from "react-icons/fa";

const FooterInteractive: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Mahesh9359",
      icon: AiFillGithub,
      color: "from-gray-600 via-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:via-gray-600 hover:to-gray-700",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mahesh-jadhav-2a5bab2ba",
      icon: FaLinkedinIn,
      color: "from-blue-600 via-blue-700 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:via-blue-600 hover:to-blue-700",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mahesh_j_1230/",
      icon: AiFillInstagram,
      color: "from-pink-600 via-purple-600 to-purple-700",
      hoverColor:
        "hover:from-pink-500 hover:via-purple-500 hover:to-purple-600",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Send failed:", data);
        // Optionally show an error notification to user
        alert(data?.error || "Failed to send message");
      } else {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-linear-to-br from-gray-900 via-purple-900 to-black text-white pt-16 pb-8 border-t border-purple-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-purple-500/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <div className="relative">
                <span className="text-3xl md:text-3xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">&lt;/&gt;</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Mahesh Jadhav
                </h3>
                <p className="text-gray-300 font-light">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              A passionate Full-Stack and Front-End Developer dedicated to
              crafting modern, user-friendly, and performance-driven digital
              experiences.
            </p>

            <div className="flex flex-col items-center sm:items-start mb-8">
              <div className="flex justify-center sm:justify-start space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative p-4 rounded-2xl bg-linear-to-br ${social.color} ${social.hoverColor} transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group`}
                      aria-label={`Visit ${social.name}`}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <Icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <span>Quick Links</span>
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                {
                  icon: AiOutlineDownload,
                  text: "Download Resume",
                  href: "/assets/Mahesh-Jadhav-Resume.pdf",
                  download: true,
                },
                {
                  icon: AiOutlineMail,
                  text: "maheshjadhav9359@gmail.com",
                  href: "mailto:maheshjadhav9359@gmail.com",
                },
                {
                  icon: AiOutlinePhone,
                  text: "+91 9359613329",
                  href: "tel:+919359613329",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  download={link.download}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group p-3 rounded-xl"
                >
                  <link.icon className="text-xl group-hover:scale-110 group-hover:text-purple-400 transition-transform duration-300" />
                  <span className="font-medium">{link.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5">
            <h4 className="text-xl font-semibold text-white mb-6 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start space-x-2 text-center sm:text-left">
              <span>Get In Touch</span>
            </h4>

            {isSubmitted ? (
              <div className="bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 text-center backdrop-blur-sm">
                <AiOutlineCheckCircle className="text-4xl text-green-400 mx-auto mb-3" />
                <p className="text-green-400 font-semibold text-lg">
                  Message Sent Successfully!
                </p>
                <p className="text-green-300 text-sm mt-1">
                  Thank you for reaching out. I&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 group-hover:border-purple-500/50"
                    />
                  </div>
                </div>
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none group-hover:border-purple-500/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="font-medium">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <AiOutlineSend className="text-xl" />
                      <span className="font-medium">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Mahesh Jadhav — Crafted with ❤️ using Next.js,
              TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInteractive;

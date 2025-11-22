"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: AiOutlineHome,
    },
    {
      name: "About",
      href: "/about",
      icon: AiOutlineUser,
    },
    {
      name: "Skills",
      href: "/skills",
      icon: GiSkills,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: AiOutlineFundProjectionScreen,
    },
    {
      name: "Experience",
      href: "/experience",
      icon: MdWorkOutline,
    },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand/Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl  md:text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">&lt;/&gt;</span>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Mahesh Jadhav
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    active
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* GitHub Fork Button */}
            <a
              href="https://github.com/Mahesh9359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <CgGitFork className="w-4 h-4" />
              <AiFillStar className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg border mt-2 mb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 border-b border-gray-100 transition-all duration-300 ${
                    active
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile GitHub Button */}
            <a
              href="https://github.com/Mahesh9359"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <CgGitFork className="w-4 h-4" />
              <span>GitHub</span>
              <AiFillStar className="w-4 h-4 ml-auto" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

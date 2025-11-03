"use client";

import React from "react";
import Particle from "@/components/Particle";
import Type from "@/components/Type";
import Image from "next/image";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomePage: React.FC = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Mahesh9359",
      icon: AiFillGithub,
      color: "hover:text-gray-700",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mahesh-jadhav-2a5bab2ba",
      icon: FaLinkedinIn,
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mahesh_j_1230/",
      icon: AiFillInstagram,
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <Particle />

      {/* ====== HERO SECTION ====== */}
      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                  Hi There!{" "}
                  <span
                    className="inline-block animate-wave"
                    role="img"
                    aria-label="wave"
                  >
                    👋🏻
                  </span>
                </h1>

                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                  I&apos;M{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                    MAHESH JADHAV
                  </span>
                </h1>

                <div className="text-xl md:text-2xl text-gray-600 min-h-[60px] mt-8">
                  <Type />
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-200 to-purple-200 rounded-full blur-xl opacity-50"></div>
                <Image
                  src="/assets/home-main.svg"
                  alt="Developer Illustration"
                  className="relative w-full h-auto animate-float"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== INTRODUCTION SECTION ====== */}
      <section className="relative py-20  from-white to-blue-50" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            {/* Text Content */}
            <div className="lg:w-7/12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                LET ME{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
                  INTRODUCE
                </span>{" "}
                MYSELF
              </h1>

              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Hey there! I’m{" "}
                  <span className="text-purple-600 font-semibold">
                    Mahesh Jadhav
                  </span>
                  , a passionate developer who enjoys turning ideas into
                  functional and engaging digital experiences. 🚀
                </p>

                <p>
                  I have a strong command over{" "}
                  <span className="text-purple-600 font-semibold">
                      JavaScript, and TypeScript
                  </span>
                  , and I love exploring how code can bring creativity to life.
                </p>

                <p>
                  My main areas of interest include building modern{" "}
                  <span className="text-purple-600 font-semibold">
                    web applications
                  </span>
                  , crafting clean UI designs, and working with innovative
                  technologies like{" "}
                  <span className="text-purple-600 font-semibold">
                    React.js, Next.js, and Node.js
                  </span>
                  .
                </p>

                <p>
                  Every project I work on is an opportunity to learn,
                  experiment, and create something meaningful.
                </p>
              </div>
            </div>

            {/* Avatar Image */}
            <div className="lg:w-5/12 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-300">
                  <Image
                    src="/assets/avatar.svg"
                    alt="Mahesh Jadhav"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-2xl"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ====== SOCIAL LINKS ====== */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              FIND ME ON
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Feel free to{" "}
              <span className="text-purple-600 font-semibold">connect</span>{" "}
              with me
            </p>

            <div className="flex justify-center space-x-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg text-gray-500 transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color}`}
                    aria-label={`Visit ${social.name}`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;

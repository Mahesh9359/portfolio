"use client";

import React from "react";
import Particle from "@/components/Particle";
import Image from "next/image";
import { GraduationCap, Sparkles } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Particle Background */}
      <Particle />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== About Section ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24">
          {/* Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Know Who{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
                I&apos;M
              </span>
            </h2>

            {/* About Card */}
            <div className=" rounded-2xl p-8 ">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Hi Everyone, I am{" "}
                  <span className="text-purple-600 font-semibold">
                    Mahesh Jadhav
                  </span>{" "}
                  from{" "}
                  <span className="text-purple-600 font-semibold">
                    Pune, India.
                  </span>
                </p>

                <p>
                  I’m an aspiring{" "}
                  <span className="font-semibold text-purple-600">
                    Frontend Developer
                  </span>{" "}
                  passionate about crafting clean, responsive, and performant
                  web applications using <strong>React.js</strong>,{" "}
                  <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
                  <strong>Redux Toolkit</strong>. I love building beautiful UIs,
                  integrating APIs, and collaborating in agile teams to turn
                  ideas into impactful products.
                </p>

                <p>
                  With a strong academic background in{" "}
                  <strong>Computer Science</strong> and hands-on project
                  experience, I’m constantly exploring new technologies to grow
                  as a <strong>software professional</strong> and contribute to
                  the modern web ecosystem.
                </p>

                <p>
                  Beyond coding, I’m interested in{" "}
                  <span className="text-purple-600 font-semibold">
                    UI/UX design
                  </span>
                  , tech communities, and learning about{" "}
                  <span className="text-purple-600 font-semibold">
                    emerging web technologies
                  </span>
                  . I also enjoy reading tech blogs, playing cricket, and
                  exploring creative design ideas.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-5/12 flex justify-center mt-16">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-linear-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>

              {/* About Image */}
              <Image
                src="/assets/about.png"
                alt="About Me"
                width={450}
                height={450}
                className="relative rounded-2xl object-contain w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto transform group-hover:scale-105 transition duration-300 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* ===== Education Timeline ===== */}
        <div className="p-4 md:p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 md:mb-12">
            <GraduationCap className="inline-block w-6 h-6 md:w-8 md:h-8 text-purple-600 mb-1 mr-2" />
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Journey
            </span>
          </h2>

          <div className="relative">
            {/* Vertical Line - Hidden on mobile, centered on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {/* Mobile Vertical Line */}
            <div className="md:hidden absolute left-7.5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-12">
              {/* MCA */}
              <div className="relative flex items-center">
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-4 w-8 h-8 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Desktop Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    Master of Computer Applications
                  </h3>
                  <p className="text-purple-600 font-medium">
                    D. Y. Patil Institute, Akurdi
                  </p>
                  <p className="text-gray-600 text-sm">
                    2023 - 2025 | 7.50 CGPA
                  </p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* B.Sc */}
              <div className="relative flex items-center">
                <div className="md:hidden absolute left-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="hidden md:block md:w-1/2"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    B.Sc (Computer Science)
                  </h3>
                  <p className="text-blue-600 font-medium">
                    Rajarshi Shahu Mahavidyalaya
                  </p>
                  <p className="text-gray-600 text-sm">
                    2020 - 2023 | 8.47 CGPA
                  </p>
                </div>
              </div>

              {/* 12th Grade */}
              <div className="relative flex items-center">
                <div className="md:hidden absolute left-4 w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    12th Grade (HSC)
                  </h3>
                  <p className="text-green-600 font-medium">
                    R.B.N.B. College, Shrirampur
                  </p>
                  <p className="text-gray-600 text-sm">2019 - 2020 | 60.00%</p>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>

              {/* 10th Grade */}
              <div className="relative flex items-center">
                <div className="md:hidden absolute left-4 w-8 h-8 bg-pink-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="hidden md:block md:w-1/2"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    10th Grade (SSC)
                  </h3>
                  <p className="text-pink-600 font-medium">
                    S.S.K.M.M.V., Pathare Khurd
                  </p>
                  <p className="text-gray-600 text-sm">2017 - 2018 | 82.60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== Interests Section ===== */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            <Sparkles className="inline-block w-7 h-7 text-pink-500 mb-1 mr-2" />
            Interests
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            I’m deeply passionate about creating intuitive user experiences,
            exploring cutting-edge frontend frameworks, and learning about
            system design. When I’m not coding, I love sketching UI concepts,
            participating in tech communities, and reading about software
            architecture and design trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

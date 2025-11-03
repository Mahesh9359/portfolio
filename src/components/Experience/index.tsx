"use client";

import React from "react";
import { Briefcase } from "lucide-react";
import Particle from "@/components/Particle";

const experiences = [
  {
    company: "Health First Priority",
    role: "Frontend Developer – Intern",
    duration: "June 2025 – Present",
    points: [
      "Built and maintained responsive UI components using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborated with backend developers to integrate REST APIs and implement secure authentication with NextAuth.",
      "Ensured cross-browser compatibility and optimized performance for healthcare web applications.",
      "Utilized Git & GitHub for version control and debugging using browser developer tools.",
      "Participated in daily standups, sprint reviews, and contributed to UI/UX improvements based on client feedback.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 bg-white overflow-hidden">
      {/* Particle Background */}
      <Particle />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
            Experience
          </span>
        </h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Briefcase className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {exp.company}
                  </h3>
                  <p className="text-gray-600">{exp.role}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
              </div>

              {/* Points */}
              <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

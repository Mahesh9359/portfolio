'use client';

import React from 'react';
import ProjectCard from '@/components/Projects/ProjectCards';
import Particle from '@/components/Particle';

const Projects: React.FC = () => {
  const projects = [
    {
      imgPath: "/assets/projects/hunger-cart.png", 
      isBlog: false,
      title: "Hunger Cart",
      description:
        "Built a responsive food ordering web app allowing customers to browse menus and place online orders. Developed using Next.js, Redux Toolkit, Tailwind CSS, NextAuth, Node.js, and MongoDB. Implemented cart management and Google sign in.",
      ghLink: "https://github.com/Mahesh9359/FoodPanda",
      demoLink: "https://hungercart.vercel.app/" 
    },
    {
      imgPath: "/assets/projects/quiz-master.png",
      isBlog: false,
      title: "Quiz Master",
      description:
        "Designed a quiz platform with real-time result calculation, ranking, and feedback features. Built using Next.js, and Express.js. Integrated timer-based quizzes and instant leaderboard to enhance engagement and usability.",
      ghLink: "https://github.com/Mahesh9359/mcq-quiz-application", 
      demoLink: "https://mcq-quiz-application.vercel.app/"
    },
    {
      imgPath: "/assets/projects/hacknity.png",
      isBlog: false,
      title: "Hacknity",
      description:
        "Hacknity is a modern, community-driven hackathon platform built with React and Tailwind CSS. It enables users to discover, organize, and participate in hackathons, connect with other developers, and showcase trending projects. Includes features like event discovery, dashboard for organizers, detailed hackathon listings, responsive design, and user profile management with a modern UI.",
      ghLink: "https://github.com/Mahesh9359/hacknity-react-group-project", 
      demoLink: "https://hacknity-react-group-project.vercel.app/"
    },
    {
      imgPath: "/assets/projects/hotel-sunshine.png",
      isBlog: false,
      title: "Hotel Management System",
      description:
        "Developed a hotel management system using HTML, CSS, JavaScript, and React,node js, Mongo DB. The system allows room booking, user registration, and management of guest details with a user-friendly interface and responsive design.",
      ghLink: "https://github.com/yourusername/hotel-management-system",
      demoLink: "https://hotel-sunshine.vercel.app/"
    },
    {
      imgPath: "/assets/projects/minute-mart.png",
      isBlog: false,
      title: "MinuteMart",
      description:
        "Built an online grocery management system using PHP, JavaScript, AJAX, SQL. Implemented product management, cart operations, Payment feature and a dynamic order placement workflow with real-time cart updates for enhanced user experience.",
      ghLink: "https://github.com/yourusername/minutemart", 
      demoLink: "https://grocery-store-v21k.onrender.com/" 
    }
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-white">
      <Particle />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Recent{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
              Works
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgPath={project.imgPath}
              isBlog={project.isBlog}
              title={`${project.title}`}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

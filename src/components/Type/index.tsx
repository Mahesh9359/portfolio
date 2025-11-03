"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <div className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 font-bold">
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer 💻",
            "Frontend Developer ⚡",
            "JavaScript Enthusiast ✨",
            "React & Next.js Developer ⚛️",
            "Node.js Backend Explorer 🚀",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 50,
        }}
      />
    </div>
  );
};

export default Type;

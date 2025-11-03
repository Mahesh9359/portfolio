'use client';

import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';

interface ProjectCardsProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  ghLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardsProps> = (props) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
      
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={props.imgPath}
          alt={props.title}
          width={400}
          height={192}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {props.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
          {props.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* GitHub Button */}
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex-1 text-sm font-medium"
          >
            <BsGithub className="w-4 h-4 mr-2" />
            {props.isBlog ? "Blog" : "GitHub"}
          </a>

          {/* Demo Button */}
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex-1 text-sm font-medium"
            >
              <CgWebsite className="w-4 h-4 mr-2" />
              Demo
            </a>
          )}
        </div>

        {/* Full width button for projects without demo */}
        {!props.isBlog && !props.demoLink && (
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-linear-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 w-full text-sm font-medium"
          >
            <BsGithub className="w-4 h-4 mr-2" />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
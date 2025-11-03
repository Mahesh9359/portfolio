import React from 'react';
import {
  SiPostman,
  SiRender,
  SiVercel,
  SiVite,
  SiNpm,
  SiFigma,
  SiNetlify,
} from 'react-icons/si';
import { DiGit, DiGithubBadge } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

const Toolstack: React.FC = () => {
  const tools = [
    { icon: DiGit, name: 'Git', color: '#F05032' },         // orange-red
    { icon: DiGithubBadge, name: 'GitHub', color: '#181717' }, // black
    { icon: VscVscode, name: 'VS Code', color: '#007ACC' },    // blue
    { icon: SiPostman, name: 'Postman', color: '#FF6C37' },    // orange
    { icon: SiVite, name: 'Vite', color: '#646CFF' },          // indigo-violet
    { icon: SiNpm, name: 'NPM', color: '#CB3837' },            // red
    { icon: SiFigma, name: 'Figma', color: '#F24E1E' },        // orange-red accent
    { icon: SiRender, name: 'Render', color: '#46E3B7' },      // mint green
    { icon: SiVercel, name: 'Vercel', color: '#000000' },      // black
    { icon: SiNetlify, name: 'Netlify', color: '#00C7B7' },    // teal-green
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-2xl mx-auto">
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition duration-300"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 group-hover:shadow-xl transition duration-300">
              <Icon
                className="w-8 h-8 transition duration-300"
                style={{ color: tool.color }}
              />
            </div>
            <span className="mt-2 text-xs text-gray-600 font-medium text-center">
              {tool.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Toolstack;

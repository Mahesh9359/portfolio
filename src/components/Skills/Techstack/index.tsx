import React, { memo } from 'react';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from 'react-icons/di';
import {
  SiBootstrap,
  SiHtml5,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiCss3,
  SiWordpress,
} from 'react-icons/si';
import { TbBrandTypescript, TbBrandRedux } from 'react-icons/tb';

// Memoize the component to prevent unnecessary re-renders
const Techstack: React.FC = memo(() => {
  const technologies = [
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: DiJavascript1, name: 'JavaScript', color: '#F7DF1E' },
    { icon: TbBrandTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: DiPython, name: 'Python', color: '#3776AB' },
    { icon: SiWordpress, name: 'WordPress', color: '#21759B' },
    { icon: TbBrandRedux, name: 'Redux Toolkit', color: '#764ABC' },
    { icon: DiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: DiNodejs, name: 'Node.js', color: '#339933' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
    { icon: DiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-4xl mx-auto">
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name} // Use name as key for better stability
            className="flex flex-col items-center group cursor-pointer transform hover:scale-105 transition duration-300"
          >
            <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 group-hover:shadow-xl transition duration-300">
              <Icon
                className="w-7 h-7 transition duration-300"
                style={{ color: tech.color }}
              />
            </div>
            <span className="mt-2 text-xs text-gray-600 font-medium text-center">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
});

Techstack.displayName = 'Techstack';

export default Techstack;
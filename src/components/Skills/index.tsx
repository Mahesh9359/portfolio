'use client';

import React, { Suspense, lazy } from 'react';
import Particle from '@/components/Particle';

// Lazy load heavy components
const Techstack = lazy(() => import('@/components/Skills/Techstack'));
const Toolstack = lazy(() => import('@/components/Skills/Toolstack'));
const Github = lazy(() => import('./Github'));

// Loading component
const SkillsLoading = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Particle Background */}
      <Particle />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Skillset Section ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Skillset  
            </span>
          </h2>
          <Suspense fallback={<SkillsLoading />}>
            <Techstack />
          </Suspense>
        </div>

        {/* ===== Tools Section ===== */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Tools
            </span>{' '}
            I use
          </h2>
          <Suspense fallback={<SkillsLoading />}>
            <Toolstack />
          </Suspense>
        </div>

        {/* ===== GitHub Calendar ===== */}
        <Suspense fallback={<SkillsLoading />}>
          <Github />
        </Suspense>
      </div>
    </section>
  );
};

export default Skills;
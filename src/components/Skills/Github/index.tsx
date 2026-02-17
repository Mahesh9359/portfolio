'use client';

import React, { useState, useEffect, lazy } from 'react';

const GitHubCalendar = lazy(() => import('react-github-calendar'));

const Github: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="text-center py-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Days I{' '}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">
          Code
        </span>
      </h2>

      {/* Scrollable Wrapper */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[650px] sm:min-w-[700px] mx-auto inline-block bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100">
          <div className="calendar-wrapper text-gray-700">
            {isClient ? (
              <GitHubCalendar
                username="Mahesh9359"
                blockSize={10}
                blockMargin={4}
                fontSize={12}
                colorScheme="light"
                theme={{
                  light: ['#f0f0f0', '#e2d4ff', '#c9a8ff', '#b084f5', '#8a56e8'],
                }}
                year={new Date().getFullYear()}
              />
            ) : (
              <div className="w-[600px] h-[120px] bg-gray-100 rounded-lg animate-pulse"></div>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-600 mt-6 text-sm">
        My GitHub contribution activity
      </p>
    </div>
  );
};

export default Github;

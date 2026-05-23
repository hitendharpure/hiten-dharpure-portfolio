/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import MakerPage from './components/MakerPage';
import WeatherJourneyPage from './components/WeatherJourneyPage';
import RobotJourneyPage from './components/RobotJourneyPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'maker' | 'weather-journey' | 'robot-journey'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/maker') {
        setCurrentView('maker');
      } else if (hash === '#/weather-journey') {
        setCurrentView('weather-journey');
      } else if (hash === '#/robot-journey') {
        setCurrentView('robot-journey');
      } else {
        setCurrentView('home');
      }
    };

    // Run on initial mount to sync with hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view: 'home' | 'maker' | 'weather-journey' | 'robot-journey') => {
    if (view === 'maker') {
      window.location.hash = '#/maker';
    } else if (view === 'weather-journey') {
      window.location.hash = '#/weather-journey';
    } else if (view === 'robot-journey') {
      window.location.hash = '#/robot-journey';
    } else {
      window.location.hash = '#/';
    }
  };

  return (
    <div className="relative min-h-screen text-gray-100 font-sans flex flex-col overflow-x-hidden">
      {/* Background Video Layer */}
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-slate-950">
        {/* 3D Canvas Hook (Provided) */}
        <div id="three-canvas-container" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#285E78_0%,transparent_50%)] bg-transparent"></div>
        {/* Dark overlay for contrast and legibility */}
        <div className="absolute inset-0 bg-slate-950/50 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950"></div>

        <video
          src="./background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[6px] scale-105 opacity-50"
        />
      </div>

      {/* Actual content above canvas */}
      <div className="relative z-0 flex flex-col w-full min-h-screen overflow-x-hidden">
        <Navigation
          currentView={(currentView === 'weather-journey' || currentView === 'robot-journey') ? 'home' : currentView}
          onViewChange={navigateTo}
        />
        <main className="flex-1 flex flex-col px-4 md:px-8 pb-16 lg:pb-24 gap-6 max-w-[1280px] w-full mx-auto justify-center">
          {currentView === 'home' ? (
            <>
              <Hero />
              <div className="w-full mt-8 md:mt-0" id="portfolio">
                <BentoGrid onViewChange={navigateTo} />
              </div>
            </>
          ) : currentView === 'maker' ? (
            <MakerPage />
          ) : currentView === 'weather-journey' ? (
            <WeatherJourneyPage onBack={() => navigateTo('home')} />
          ) : (
            <RobotJourneyPage onBack={() => navigateTo('home')} />
          )}
        </main>
      </div>
    </div>
  );
}

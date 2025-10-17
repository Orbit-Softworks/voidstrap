'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function BloxstrapClone() {
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Trigger initial load animations
    setTimeout(() => setIsLoaded(true), 100);

    // Setup Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all scroll-animated elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // ========================================
  // IMAGE CONFIGURATION - CHANGE THESE URLs
  // ========================================
  const IMAGES = {
    logo: 'https://raw.githubusercontent.com/Orbit-Softworks/voidstrap/refs/heads/main/voidstrap.png',
  };

  // Contributor icons - Replace with your own icon URLs
  const CONTRIBUTOR_ICONS = [
    'https://raw.githubusercontent.com/Orbit-Softworks/voidstrap/refs/heads/main/Bractic.png',
    'https://via.placeholder.com/64/7c3aed/ffffff?text=2',
    'https://via.placeholder.com/64/7c3aed/ffffff?text=3',
    'https://via.placeholder.com/64/7c3aed/ffffff?text=4',
    'https://via.placeholder.com/64/7c3aed/ffffff?text=5',
    'https://via.placeholder.com/64/7c3aed/ffffff?text=6',
  ];
  // ========================================

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white mx-auto max-w-7xl p-8">
      {/* Navigation */}
      <nav className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
        <div className="bg-neutral-950 px-4 py-4 rounded-xl flex flex-col items-center justify-between gap-y-4 sm:flex-row">
          <img src={IMAGES.logo} alt="Voidstrap Logo" className="max-w-40" width="200" height="43" />
          <div className="flex gap-x-6 pr-2">
            <a className="font-medium text-gray-300 hover:text-white transition duration-300" href="/wiki/">Wiki</a>
            <a className="font-medium text-gray-300 hover:text-white transition duration-300" href="/wiki/faq/">FAQ</a>
            <a className="font-medium text-gray-300 hover:text-white transition duration-300" href="/discord">Discord</a>
            <a className="font-medium text-gray-300 hover:text-white transition duration-300" href="https://github.com/voidstrap/Voidstrap">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 my-12 text-center">
        {/* Hero Section */}
        <div className={`pb-8 transition-all duration-1000 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-4xl font-medium mb-4 sm:text-5xl">Get more out of Roblox</h1>
          <h2 className="text-lg text-gray-200 mb-4 sm:text-xl">
            Voidstrap is an alternative launcher for Roblox that provides additional useful features and functions
          </h2>
        </div>

        {/* Download Section */}
        <div className={`pb-8 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <a 
            href="https://github.com/voidstrap/Voidstrap/releases/download/v1.0.5.9/Voidstrap.exe" 
            className="inline-block bg-violet-700 hover:bg-violet-800 transition-all duration-300 p-4 mb-2 rounded-xl text-lg font-medium transform hover:scale-105"
          >
            <svg className="inline-block fill-white h-7 pl-1 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path className="stroke-current stroke-10" d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            Download for Windows
          </a>
          <p className="mb-2">
            Voidstrap requires the{' '}
            <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="https://aka.ms/dotnet-core-applaunch?missing_runtime=true&arch=x64&rid=win11-x64&apphost_version=6.0.20&gui=true">
              Microsoft .NET 6 Desktop Runtime
            </a>{' '}
            to be installed
          </p>
          <p className="mb-2">
            <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="/wiki/faq">
              Frequently asked questions
            </a>
          </p>
        </div>

        {/* Open Source Section */}
        <div className="animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 ease-out py-8 flex flex-col items-center justify-center gap-x-12 gap-y-6 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-medium mb-2">Voidstraps Redistribution Policy</h1>
            <p className="text-gray-200 mb-2">
              Voidstrap's code is publicly available on GitHub to prove it's safe and virus-free. However, using our code in other projects violates our policies and will result in a permanent ban.
            </p>
            <p>
              <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="Uh, Uh, Uh Skids">
                Not Today, Skids
              </a>
            </p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-xl font-medium mb-3">Contributors</h2>
            <p className="text-gray-200 mb-6">
              The talented individuals who brought Voidstrap to life and continue to make it better every day.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              {CONTRIBUTOR_ICONS.map((icon, index) => (
                <div 
                  key={index}
                  className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <img src={icon} alt={`Contributor ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="animate-on-scroll opacity-0 translate-y-16 transition-all duration-1000 ease-out py-12">
          <p className="mb-2">
            Voidstrap is digitally code signed for free thanks to the{' '}
            <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="https://signpath.org/">
              SignPath Foundation
            </a>
          </p>
          <p>
            <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="/wiki/info/privacy-policy/">
              Privacy policy
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="animate-on-scroll opacity-0 transition-all duration-1000 ease-out text-center">
        <p>© 2025 Voidstrap is not affiliated with Roblox in any way.</p>
      </footer>

      <style jsx>{`
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

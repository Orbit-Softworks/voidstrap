'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function BloxstrapClone() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Trigger initial load animations
    setTimeout(() => setIsLoaded(true), 100);

    // Mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Setup Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15, rootMargin: '-50px' }
    );

    // Observe all scroll-animated elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 text-white overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 w-full lg:px-8">
        {/* Navigation */}
        <nav className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
          <div className="bg-neutral-950/80 backdrop-blur-xl border border-neutral-800/50 px-6 py-5 rounded-2xl flex flex-col items-center justify-between gap-y-4 shadow-2xl shadow-violet-900/10 sm:flex-row hover:border-neutral-700/50 transition-all duration-500">
            <img 
              src={IMAGES.logo} 
              alt="Voidstrap Logo" 
              className="max-w-40 hover:scale-105 transition-transform duration-300" 
              width="200" 
              height="43" 
            />
            <div className="flex gap-x-8 pr-2">
              <a className="relative font-semibold text-gray-300 hover:text-white transition-all duration-300 group" href="/wiki/">
                Wiki
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="relative font-semibold text-gray-300 hover:text-white transition-all duration-300 group" href="/wiki/faq/">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="relative font-semibold text-gray-300 hover:text-white transition-all duration-300 group" href="/discord">
                Discord
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a className="relative font-semibold text-gray-300 hover:text-white transition-all duration-300 group" href="https://github.com/voidstrap/Voidstrap">
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 my-16 text-center">
          {/* Hero Section */}
          <div className={`pb-12 transition-all duration-1000 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent sm:text-6xl lg:text-7xl leading-tight">
              Get more out of Roblox
            </h1>
            <h2 className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed sm:text-2xl">
              Voidstrap is an alternative launcher for Roblox that provides additional useful features and functions
            </h2>
          </div>

          {/* Download Section */}
          <div className={`pb-12 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <a 
              href="https://github.com/voidstrap/Voidstrap/releases/download/v1.0.5.9/Voidstrap.exe" 
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-500 px-8 py-5 mb-4 rounded-2xl text-xl font-bold transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/50 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <svg className="relative inline-block fill-white h-7 mr-3 group-hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
              </svg>
              <span className="relative">Download for Windows</span>
            </a>
            <p className="mb-3 text-gray-400">
              Voidstrap requires the{' '}
              <a className="text-violet-400 hover:text-violet-300 transition-all duration-300 underline decoration-violet-500/30 hover:decoration-violet-400 underline-offset-4" href="https://aka.ms/dotnet-core-applaunch?missing_runtime=true&arch=x64&rid=win11-x64&apphost_version=6.0.20&gui=true">
                Microsoft .NET 6 Desktop Runtime
              </a>{' '}
              to be installed
            </p>
            <p className="mb-3">
              <a className="text-violet-400 hover:text-violet-300 transition-all duration-300 underline decoration-violet-500/30 hover:decoration-violet-400 underline-offset-4" href="/wiki/faq">
                Frequently asked questions
              </a>
            </p>
          </div>

          {/* Open Source Section */}
          <div className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out py-12 flex flex-col items-center justify-center gap-x-16 gap-y-10 lg:flex-row">
            <div className="flex-1 max-w-xl">
              <div className="bg-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-violet-700/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-900/20">
                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Voidstrap's Redistribution Policy
                </h1>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Voidstrap's code is publicly available on GitHub to prove it's safe and virus-free. However, using our code in other projects violates our policies and will result in a permanent ban.
                </p>
                <a className="inline-block text-violet-400 hover:text-violet-300 transition-all duration-300 font-semibold underline decoration-violet-500/30 hover:decoration-violet-400 underline-offset-4" href="Uh, Uh, Uh Skids">
                  Not Today, Skids →
                </a>
              </div>
            </div>
            
            <div className="flex-1 text-center max-w-xl">
              <div className="bg-neutral-950/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-violet-700/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-900/20">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Contributors
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  The talented individuals who brought Voidstrap to life and continue to make it better every day.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {CONTRIBUTOR_ICONS.map((icon, index) => (
                    <div 
                      key={index}
                      className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-violet-600/40 transition-all duration-300 group cursor-pointer border-2 border-violet-600/20 hover:border-violet-500"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img 
                        src={icon} 
                        alt={`Contributor ${index + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="animate-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out py-16 space-y-4">
            <p className="text-gray-400">
              Voidstrap is digitally code signed for free thanks to the{' '}
              <a className="text-violet-400 hover:text-violet-300 transition-all duration-300 underline decoration-violet-500/30 hover:decoration-violet-400 underline-offset-4" href="https://signpath.org/">
                SignPath Foundation
              </a>
            </p>
            <p>
              <a className="text-violet-400 hover:text-violet-300 transition-all duration-300 underline decoration-violet-500/30 hover:decoration-violet-400 underline-offset-4" href="/wiki/info/privacy-policy/">
                Privacy policy
              </a>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="animate-on-scroll opacity-0 transition-all duration-1000 ease-out text-center py-8 border-t border-neutral-800/50">
          <p className="text-gray-400">© 2025 Voidstrap is not affiliated with Roblox in any way.</p>
        </footer>
      </div>

      <style jsx>{`
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}

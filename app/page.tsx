import React from 'react';

export default function BloxstrapClone() {
  // ========================================
  // IMAGE CONFIGURATION - CHANGE THESE URLs
  // ========================================
  const IMAGES = {
    logo: 'https://raw.githubusercontent.com/Orbit-Softworks/voidstrap/refs/heads/main/voidstrap.png', // Bloxstrap logo
    discordImage: 'https://bloxstraplabs.com/_astro/discord.ByrrKmUB_TGTJD.webp', // Discord integration image
    modsImage: 'https://bloxstraplabs.com/_astro/mods.CtDJj0bv_Z2bSg6j.webp', // Customization/mods image
    contributorsImage: 'https://contrib.rocks/image?repo=bloxstraplabs/bloxstrap', // Contributors image
  };
  // ========================================

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 text-white mx-auto max-w-7xl p-8">
      {/* Navigation */}
      <nav>
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
        <div className="pb-8">
          <h1 className="text-4xl font-medium mb-4 sm:text-5xl">Get more out of Roblox</h1>
          <h2 className="text-lg text-gray-200 mb-4 sm:text-xl">
            Voidstrap is an alternative launcher for Roblox that provides additional useful features and functions
          </h2>
        </div>

        {/* Download Section */}
        <div className="pb-8">
          <a 
            href="https://github.com/voidstrap/Voidstrap/releases/download/v1.0.5.9/Voidstrap.exe" 
            className="inline-block bg-violet-700 hover:bg-violet-800 transition duration-300 p-4 mb-2 rounded-xl text-lg font-medium"
          >
            <svg className="inline-block fill-white h-7 pl-1 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path className="stroke-current stroke-10" d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            Download for Windows
          </a>
          <p className="mb-6 text-sm text-gray-300">
            <a className="hover:text-white transition duration-300" href="https://winstall.app/apps/pizzaboxer.Bloxstrap">
              Or, install with Winget
            </a>
          </p>
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

        {/* Discord Integration Section */}
        <div className="py-8 flex flex-col items-center justify-center gap-x-12 gap-y-6 lg:flex-row">
          <div className="max-w-lg">
            <h1 className="text-2xl font-medium mb-2">Bridging Roblox and Discord</h1>
            <p className="text-gray-200">
              Share what you're doing among friends with ease, with extensible support for{' '}
              <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="/wiki/developers/bloxstraprpc/">
                developer integration
              </a>
              .
            </p>
          </div>
          <div>
            <img src={IMAGES.discordImage} alt="Discord integration" className="mx-auto" width="652" height="202" />
          </div>
        </div>

        {/* Customization Section */}
        <div className="py-8 flex flex-col items-center justify-center gap-x-12 gap-y-6 lg:flex-row-reverse">
          <div className="flex-1">
            <h1 className="text-2xl font-medium mb-2">Customisation made easier</h1>
            <p className="text-gray-200">
              Modify local assets without worrying about them being erased by Roblox updates, and with easy importing of{' '}
              <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="/wiki/faq#where-can-i-find-mods">
                community-curated mods
              </a>
              .
            </p>
          </div>
          <div className="flex-1">
            <img src={IMAGES.modsImage} alt="Customization mods" className="mx-auto max-w-90" width="360" height="259" />
          </div>
        </div>

        {/* Open Source Section */}
        <div className="py-8 flex flex-col items-center justify-center gap-x-12 gap-y-6 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-medium mb-2">Free and open source</h1>
            <p className="text-gray-200 mb-2">
              Voidstrap's code is not available on GitHub and no one can see has permission to contribute to it.
            </p>
            <p>
              <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="Uh, Uh, Uh Skids">
                Not Today, Skids
              </a>
            </p>
          </div>
          <div className="flex-1 text-left">
            <img className="mb-2" src={IMAGES.contributorsImage} alt="Contributors" />
            <small className="text-gray-300">
              Made with{' '}
              <a className="text-violet-400 hover:text-violet-300 transition duration-300" href="https://contrib.rocks">
                contrib.rocks
              </a>
            </small>
          </div>
        </div>

        {/* Footer Info */}
        <div className="py-12">
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
      <footer className="text-center">
        <p>© 2025 Voidstrap developers and contributors. Voidstrap is not affiliated with Roblox in any way.</p>
      </footer>
    </div>
  );
}

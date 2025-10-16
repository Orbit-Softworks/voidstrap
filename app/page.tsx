import React from 'react';

export default function BloxstrapClone() {
  // ========================================
  // IMAGE CONFIGURATION - CHANGE THESE URLs
  // ========================================
  const IMAGES = {
    logo: 'https://raw.githubusercontent.com/Orbit-Softworks/voidstrap/refs/heads/main/voidstrap.png', // Bloxstrap logo
    discordCard1Avatar: 'https://bloxstraplabs.com/_astro/discord.ByrrKmUB_TGTJD.webp', // First Discord card avatar
    discordCard2Avatar: 'https://bloxstraplabs.com/_astro/discord.ByrrKmUB_TGTJD.webp', // Second Discord card avatar
    notificationAvatar: 'https://bloxstraplabs.com/_astro/mods.CtDJj0bv_Z2bSg6j.webp', // Notification window avatar
    notificationEmoji: 'https://contrib.rocks/image?repo=bloxstraplabs/bloxstrap', // Notification emoji icon
    contributors: [
      'e', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', // Row 1 (8 contributors)
      '', '', '', '', '', '', '', '', // Row 2 (8 contributors)
      '', '', '', '', '', '', '', ''  // Row 3 (8 contributors)
    ]
  };
  // ========================================

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 bg-black">
        <div className="flex items-center gap-2.5">
          {IMAGES.logo ? (
            <img src={IMAGES.logo} alt="Bloxstrap" className="w-7 h-7" />
          ) : (
            <div className="w-7 h-7 bg-purple-600 rounded-sm flex items-center justify-center">
              <div className="grid grid-cols-2 gap-[3px]">
                <div className="w-[7px] h-[7px] bg-white rounded-[1px]"></div>
                <div className="w-[7px] h-[7px] bg-white rounded-[1px]"></div>
                <div className="w-[7px] h-[7px] bg-white rounded-[1px]"></div>
                <div className="w-[7px] h-[7px] bg-white rounded-[1px]"></div>
              </div>
            </div>
          )}
          <span className="text-[17px] font-medium tracking-tight">Bloxstrap</span>
        </div>
        <nav className="flex gap-7 text-[13px] font-normal">
          <a href="#" className="text-gray-300 hover:text-white transition">Wiki</a>
          <a href="#" className="text-gray-300 hover:text-white transition">FAQ</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Discord</a>
          <a href="#" className="text-gray-300 hover:text-white transition">GitHub</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-[1100px] mx-auto px-8">
        {/* Hero Section */}
        <div className="text-center pt-20 pb-12">
          <h1 className="text-[56px] font-bold leading-tight mb-3 tracking-tight">Get more out of Roblox</h1>
          <p className="text-[17px] text-gray-400 font-normal">
            Bloxstrap is an alternative launcher for Roblox that provides additional useful features and functions
          </p>
        </div>

        {/* Download Section */}
        <div className="flex flex-col items-center mb-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-[11px] rounded-md flex items-center gap-2 text-[15px] font-medium transition mb-3">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5M7 14l5 5 5-5" />
            </svg>
            Download for Windows
          </button>
          <p className="text-gray-500 text-[13px] mb-4">
            Or, install with Winget
          </p>
          <p className="text-gray-400 text-[13px] mb-2">
            Bloxstrap requires the <a href="#" className="text-blue-400 hover:underline">Microsoft .NET 6 Desktop Runtime</a> to be installed
          </p>
          <a href="#" className="text-blue-400 hover:underline text-[13px]">Frequently asked questions</a>
        </div>

        {/* Discord Integration Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 gap-12 items-start">
            <div className="pt-8">
              <h2 className="text-[28px] font-bold mb-4 leading-tight">Bridging Roblox and Discord</h2>
              <p className="text-gray-400 text-[15px] leading-relaxed">
                Share what you're doing among friends with ease, with<br />
                extensible support for developer integration.
              </p>
            </div>
            <div className="flex gap-4">
              {/* Discord Card 1 */}
              <div className="bg-[#2b2d31] rounded-lg p-4 flex-1">
                <div className="flex items-start gap-3 mb-4">
                  {IMAGES.discordCard1Avatar ? (
                    <img src={IMAGES.discordCard1Avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
                  ) : (
                    <div className="w-12 h-12 bg-red-500 rounded-full flex-shrink-0"></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[15px] text-white">Roblox</div>
                    <div className="text-[12px] text-gray-400 leading-tight">LEGOing in Grand Dook</div>
                    <div className="text-[12px] text-gray-400 leading-tight">Casino of Players</div>
                  </div>
                </div>
                <button className="bg-[#248046] hover:bg-[#1f6f3c] text-white text-[13px] font-medium px-4 py-[7px] rounded w-full transition mb-2">
                  Join server
                </button>
                <a href="#" className="text-blue-400 text-[12px] hover:underline block text-center">
                  See game page
                </a>
              </div>
              {/* Discord Card 2 */}
              <div className="bg-[#2b2d31] rounded-lg p-4 flex-1">
                <div className="flex items-start gap-3 mb-4">
                  {IMAGES.discordCard2Avatar ? (
                    <img src={IMAGES.discordCard2Avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
                  ) : (
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0"></div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[15px] text-white">Roblox</div>
                    <div className="text-[12px] text-gray-400 leading-tight">Playing a GAME | (Still partnered)</div>
                    <div className="text-[12px] text-gray-400 leading-tight">On the Highlight</div>
                    <div className="text-[12px] text-gray-400 leading-tight">🎮 1 to 10</div>
                  </div>
                </div>
                <button className="bg-[#248046] hover:bg-[#1f6f3c] text-white text-[13px] font-medium px-4 py-[7px] rounded w-full transition">
                  See game page
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Section */}
        <div className="flex justify-center mb-24">
          <div className="w-[600px]">
            <div className="bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border border-gray-800">
              <div className="bg-[#252525] px-4 py-2 flex items-center gap-3 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                </div>
                <div className="flex-1 flex items-center gap-2 text-[11px] text-gray-500">
                  <span>🏠</span>
                  <span>Bloxstrap</span>
                  <span>›</span>
                  <span>Modifications</span>
                  <span>›</span>
                  <span>context</span>
                  <span>›</span>
                  <span>textlang</span>
                  <span>›</span>
                  <span>Games</span>
                </div>
                <div className="flex gap-2 text-gray-600">
                  <button className="hover:text-white">🗕</button>
                  <button className="hover:text-white">⬜</button>
                  <button className="hover:text-white">✕</button>
                </div>
              </div>
              <div className="bg-[#1a1a1a] px-4 py-3">
                <div className="flex items-center gap-3 mb-3 text-[11px] text-gray-500">
                  <button className="hover:text-white">← New ▼</button>
                  <button className="hover:text-white">↻</button>
                  <button className="hover:text-white">✂</button>
                  <button className="hover:text-white">📋</button>
                  <button className="hover:text-white">📁</button>
                  <button className="hover:text-white">🗑</button>
                  <button className="hover:text-white">⋮</button>
                </div>
                <div className="bg-gradient-to-br from-[#5865f2] to-[#7289da] rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    {IMAGES.notificationAvatar ? (
                      <img src={IMAGES.notificationAvatar} alt="Avatar" className="w-14 h-14 rounded-full" />
                    ) : (
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl">
                        {IMAGES.notificationEmoji ? <img src={IMAGES.notificationEmoji} alt="Emoji" className="w-10 h-10" /> : '😊'}
                      </div>
                    )}
                    <div className="bg-[#36393f] rounded-full px-5 py-2.5 flex items-center gap-3">
                      <span className="text-white text-lg">=</span>
                      <span className="text-2xl">💬</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-gray-500">
                  ArrowKicksCat or.png
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customization Section */}
        <div className="text-center mb-20">
          <h2 className="text-[36px] font-bold mb-4 leading-tight">Customisation made easier</h2>
          <p className="text-gray-400 text-[15px]">
            Modify local assets without worrying about them being erased by Roblox<br />
            updates, and with easy importing of <a href="#" className="text-blue-400 hover:underline">community-sourced mods</a>.
          </p>
        </div>

        {/* Open Source Section */}
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-bold mb-4 leading-tight">Free and open source</h2>
          <p className="text-gray-400 text-[15px] mb-6">
            Bloxstrap's code is available on GitHub and anyone can see inside it,<br />
            contribute to it, or even make their own version.
          </p>
          <a href="#" className="text-blue-400 hover:underline text-[15px]">github.com/bloxstraplabs/bloxstrap</a>
        </div>

        {/* Contributors */}
        <div className="flex justify-center items-center gap-1.5 mb-3 flex-wrap max-w-[650px] mx-auto">
          {IMAGES.contributors.map((img, i) => (
            img ? (
              <img key={i} src={img} alt={`Contributor ${i + 1}`} className="w-11 h-11 rounded-full" />
            ) : (
              <div
                key={i}
                className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500"
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${(i * 37) % 360}, 70%, 50%), 
                    hsl(${((i * 37) + 60) % 360}, 70%, 50%))`
                }}
              ></div>
            )
          ))}
        </div>
        <p className="text-center text-gray-500 text-[13px] mb-16">Made with contributions</p>

        {/* SignPath */}
        <div className="text-center text-gray-400 text-[13px] mb-6">
          Bloxstrap is digitally code signed for free thanks to the <a href="#" className="text-blue-400 hover:underline">SignPath Foundation</a>
        </div>

        {/* Privacy Policy */}
        <div className="text-center mb-20">
          <a href="#" className="text-blue-400 hover:underline text-[13px]">Privacy policy</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-[12px] py-10 border-t border-gray-900">
        © 2025 Bloxstrap developers and contributors. Bloxstrap is not affiliated with Roblox in any way.
      </footer>
    </div>
  );
}

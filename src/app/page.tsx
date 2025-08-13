'use client';

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useTheme } from "./components/ThemeProvider";
import { DodecahedronLogo } from "./components/DodecahedronLogo";

export default function Home() {
  const { theme } = useTheme();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Trigger animation when theme changes
    setAnimationKey(prev => prev + 1);
  }, [theme]);

  return (
    <div className="min-h-screen theme-bg">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--delft-blue)]/20 to-[var(--cambridge-blue)]/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="text-center">
            <div className="flex flex-col items-center gap-6 mb-8">
              {/* Dodecahedron logo with glow effects */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--cambridge-blue)]/30 via-[var(--delft-blue)]/30 to-[var(--light-green)]/30 blur-2xl rounded-full scale-150"></div>
                <div className="relative">
                  <DodecahedronLogo 
                    size={120} 
                    className="relative z-10 drop-shadow-2xl text-[var(--foreground)]"
                  />
                </div>
              </div>

              {/* Text logo */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-orbitron font-black text-[var(--foreground)] relative">
                <span className="relative inline-block">
                  {/* Background glow effect */}
                  <span className="absolute inset-0 text-[var(--cambridge-blue)] opacity-30 blur-sm scale-105">
                    DIVIPHET
                  </span>

                  {/* Main text with fluorescent flicker effect */}
                  <span className="relative tracking-wider drop-shadow-2xl" key={animationKey}>
                    <span className="flicker-d">D</span><span className="flicker-i1">I</span><span className="flicker-v">V</span><span className="flicker-i2">I</span><span className="flicker-p">P</span><span className="flicker-h">H</span><span className="flicker-e">E</span><span className="flicker-t">T</span>
                  </span>
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--cambridge-blue)]/20 via-[var(--delft-blue)]/20 to-[var(--light-green)]/20 blur-3xl rounded-3xl"></div>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-[var(--foreground)]/80 mb-4 max-w-4xl mx-auto">
              Skip the Tedium, Keep the Magic
            </p>
            <p className="text-lg text-[var(--foreground)]/60 mb-12 max-w-3xl mx-auto">
              Let AI handle the math, lookups, and bookkeeping so you can focus on what makes tabletop RPGs special - collaborative storytelling and creative problem-solving.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-[var(--delft-blue)] to-[var(--cambridge-blue)] hover:from-[var(--delft-blue)]/80 hover:to-[var(--cambridge-blue)]/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Features Section */}
      <section className="py-24 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Intelligent Assistance for Every Adventure
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto">
              From quick rule lookups to complex encounter management, Diviphet understands your game and helps you maintain momentum at the table.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--delft-blue)]/20">
              <div className="w-12 h-12 bg-[var(--delft-blue)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Instant Rule Reference</h3>
              <p className="text-[var(--foreground)]/80">
                Get immediate answers about game mechanics, spells, and abilities. No more flipping through books or interrupting the flow.
              </p>
            </div>

            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--cambridge-blue)]/20">
              <div className="w-12 h-12 bg-[var(--cambridge-blue)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Encounter & Session Tools</h3>
              <p className="text-[var(--foreground)]/80">
                Automated initiative tracking, damage calculations, and condition management. Quick reference tools keep your game flowing smoothly.
              </p>
            </div>

            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--light-green)]/20">
              <div className="w-12 h-12 bg-[var(--light-green)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Open Gaming Compatible</h3>
              <p className="text-[var(--foreground)]/80">
                Built on the System Reference Document and Creative Commons content. Support for additional game systems coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Engine Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
                Built for Game Masters and Players
              </h2>
              <p className="text-xl text-[var(--foreground)]/80 mb-8">
                Whether you&apos;re running a campaign or playing a character, Diviphet adapts to your needs. Streamline preparation, enhance gameplay, and keep everyone engaged around the table.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[var(--delft-blue)] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">Campaign Management</h4>
                    <p className="text-[var(--foreground)]/60">Track NPCs, locations, and story threads across sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[var(--cambridge-blue)] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">Character Assistance</h4>
                    <p className="text-[var(--foreground)]/60">Help with character builds, spell management, and ability tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[var(--light-green)] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">Session Flow</h4>
                    <p className="text-[var(--foreground)]/60">Keep momentum with quick decisions and seamless transitions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--delft-blue)]/20 to-[var(--cambridge-blue)]/20 p-8 rounded-2xl border border-[var(--delft-blue)]/30">
              <div className="bg-[var(--surface)]/80 p-6 rounded-lg">
                <div className="text-sm text-[var(--foreground)]/60 mb-4">Example Interaction:</div>
                <div className="bg-[var(--surface)]/50 p-4 rounded-lg mb-4">
                  <div className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                    <strong className="text-[var(--delft-blue)]">GM:</strong> &ldquo;I need a balanced encounter for 4 level-5 characters in a haunted library.&rdquo;
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="bg-[var(--light-green)] px-2 py-1 rounded text-white">⚡ Instant</div>
                  <div className="text-[var(--foreground)]/60">→</div>
                  <div className="text-[var(--cambridge-blue)]">3 Specters + Animated Books</div>
                  <div className="text-[var(--foreground)]/60">→</div>
                  <div className="text-[var(--light-green)]">Ready to Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Tools Section */}
      <section className="py-24 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Platform
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto">
              While the community creates the rules and worlds, the Diviphet Platform provides the tools to bring them to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--delft-blue)]/40">
              <div className="w-16 h-16 bg-[var(--delft-blue)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-orbitron font-black text-white">01</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Simple & Fast</h3>
              <p className="text-[var(--foreground)]/60 text-sm">No complex setup or learning curve</p>
            </div>

            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--cambridge-blue)]/40">
              <div className="w-16 h-16 bg-[var(--cambridge-blue)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-orbitron font-black text-white">02</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Tool Integration</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Works with your existing VTT and apps</p>
            </div>

            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--light-green)]/40">
              <div className="w-16 h-16 bg-[var(--light-green)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-orbitron font-black text-white">03</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Creation Tools</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Build and share your content</p>
            </div>

            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--green-yellow)]/40">
              <div className="w-16 h-16 bg-[var(--green-yellow)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-orbitron font-black text-white">04</span>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Community Hub</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Connect with creators worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
            Ready to play?
          </h2>
          <p className="text-xl text-[var(--foreground)]/80 mb-8">
            Join the community building the next generation of tabletop roleplaying. Connect with creators, share ideas, and help shape the future of RPGs.
          </p>

          {/* Email signup */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-4 py-3 bg-[var(--surface)]/50 border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--delft-blue)] focus:border-transparent"
              />
              <button className="bg-[var(--delft-blue)] hover:bg-[var(--delft-blue)]/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Get Updates
              </button>
            </div>
            <p className="text-sm text-[var(--foreground)]/50 mt-2 text-center">Be the first to know when we launch</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[var(--delft-blue)] to-[var(--cambridge-blue)] hover:from-[var(--delft-blue)]/80 hover:to-[var(--cambridge-blue)]/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2 justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
              </svg>
              Join Discord Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

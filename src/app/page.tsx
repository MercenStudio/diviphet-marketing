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
                  {/* Alpha Badge */}
                  <div className="absolute -top-2 -right-2 bg-[var(--light-green)] text-black px-3 py-1 rounded-full text-xs font-bold font-orbitron tracking-wide">
                    ALPHA
                  </div>
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
            <p className="text-lg text-[var(--foreground)]/60 mb-6 max-w-3xl mx-auto">
              AI-powered assistant for tabletop RPGs. Let our Game Master handle rule lookups and dice calculations so you can focus on collaborative storytelling and creative problem-solving.
            </p>
            <div className="bg-[var(--light-green)]/10 border border-[var(--light-green)]/30 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <p className="text-[var(--light-green)] text-sm font-semibold mb-1">🎮 Alpha Testing Now Available</p>
              <p className="text-[var(--foreground)]/70 text-sm">
                Be among the first to experience Diviphet. Limited alpha spots available for dedicated RPG enthusiasts.
              </p>
            </div>
            <div className="flex justify-center">
              <a 
                href="mailto:diviphet@mercen.ai?subject=Alpha%20Access%20Request&body=Hi!%20I%27d%20like%20to%20request%20access%20to%20the%20Diviphet%20alpha.%0A%0APlease%20include:%0A-%20Your%20RPG%20experience%20level%0A-%20Preferred%20game%20systems%0A-%20What%20you%27re%20most%20excited%20to%20test"
                className="bg-gradient-to-r from-[var(--light-green)] to-[var(--cambridge-blue)] hover:from-[var(--light-green)]/80 hover:to-[var(--cambridge-blue)]/80 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Request Alpha Access
              </a>
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
            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--delft-blue)]/20 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-[var(--light-green)] text-black px-2 py-1 rounded text-xs font-bold">
                  ALPHA
                </span>
              </div>
              <div className="w-12 h-12 bg-[var(--delft-blue)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Instant Rule Reference</h3>
              <p className="text-[var(--foreground)]/80">
                Get immediate answers about game mechanics, spells, and abilities. Chat directly with our AI Game Master for rule clarifications.
              </p>
            </div>

            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--cambridge-blue)]/20 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-[var(--delft-blue)] text-white px-2 py-1 rounded text-xs font-bold">
                  COMING SOON
                </span>
              </div>
              <div className="w-12 h-12 bg-[var(--cambridge-blue)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Encounter & Session Tools</h3>
              <p className="text-[var(--foreground)]/80">
                Automated initiative tracking, damage calculations, and condition management. Advanced session management coming to beta.
              </p>
            </div>

            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--light-green)]/20 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-[var(--light-green)] text-black px-2 py-1 rounded text-xs font-bold">
                  ALPHA
                </span>
              </div>
              <div className="w-12 h-12 bg-[var(--light-green)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Open Gaming Compatible</h3>
              <p className="text-[var(--foreground)]/80">
                Built on D&D 5e SRD and Open Gaming License content. Test dice rolling, character assistance, and basic rule queries in alpha.
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

      {/* Alpha Testing Program Section */}
      <section className="py-24 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--light-green)]/20 border border-[var(--light-green)]/30 rounded-full mb-4">
              <span className="text-[var(--light-green)] text-sm font-bold">⚡ LIMITED SPOTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Alpha Testing Program
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto">
              Join an exclusive group of RPG enthusiasts testing the future of tabletop gaming. Your feedback shapes Diviphet&apos;s development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--delft-blue)]/40">
              <div className="w-16 h-16 bg-[var(--delft-blue)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Test Early</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Be first to experience Diviphet&apos;s AI Game Master</p>
            </div>

            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--cambridge-blue)]/40">
              <div className="w-16 h-16 bg-[var(--cambridge-blue)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Shape Development</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Your feedback directly influences features</p>
            </div>

            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--light-green)]/40">
              <div className="w-16 h-16 bg-[var(--light-green)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Exclusive Access</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Limited spots for dedicated testers</p>
            </div>

            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border-2 border-[var(--green-yellow)]/40">
              <div className="w-16 h-16 bg-[var(--green-yellow)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Lifetime Benefits</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Special pricing and recognition for alpha testers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alpha Recruitment CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[var(--delft-blue)]/10 to-[var(--cambridge-blue)]/10 rounded-2xl p-8 border border-[var(--delft-blue)]/20 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--light-green)]/20 border border-[var(--light-green)]/30 rounded-full mb-4">
              <span className="w-2 h-2 bg-[var(--light-green)] rounded-full animate-pulse"></span>
              <span className="text-[var(--light-green)] text-sm font-bold">ALPHA RECRUITMENT ACTIVE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Ready to Test the Future?
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 mb-8">
              Join a select group of RPG enthusiasts who will help shape Diviphet. Alpha testers get exclusive access, direct influence on features, and lifetime benefits.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-semibold text-[var(--foreground)] mb-3">What You&apos;ll Test:</h3>
                <ul className="space-y-2 text-[var(--foreground)]/70">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--light-green)] rounded-full"></div>
                    AI Game Master conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--light-green)] rounded-full"></div>
                    Rule lookups and mechanics
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--light-green)] rounded-full"></div>
                    Dice rolling system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--light-green)] rounded-full"></div>
                    Session management tools
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-[var(--foreground)] mb-3">Alpha Tester Benefits:</h3>
                <ul className="space-y-2 text-[var(--foreground)]/70">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--cambridge-blue)] rounded-full"></div>
                    Lifetime discount on subscription
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--cambridge-blue)] rounded-full"></div>
                    Direct line to development team
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--cambridge-blue)] rounded-full"></div>
                    Special recognition as founder
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--cambridge-blue)] rounded-full"></div>
                    Early access to all new features
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:diviphet@mercen.ai?subject=Alpha%20Access%20Request&body=Hi!%20I%27d%20like%20to%20request%20access%20to%20the%20Diviphet%20alpha.%0A%0APlease%20include:%0A-%20Your%20RPG%20experience%20level%0A-%20Preferred%20game%20systems%0A-%20What%20you%27re%20most%20excited%20to%20test%0A-%20How%20often%20you%20play%20RPGs"
                className="bg-gradient-to-r from-[var(--light-green)] to-[var(--cambridge-blue)] hover:from-[var(--light-green)]/80 hover:to-[var(--cambridge-blue)]/80 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2 justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Request Alpha Access
              </a>
            </div>
          </div>

          {/* Beta updates signup */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-[var(--foreground)]/60 mb-4">Not ready for alpha? Get notified about beta launch:</p>
            <a
              href="mailto:diviphet@mercen.ai?subject=Beta%20Updates%20Request&body=Hi!%20Please%20add%20me%20to%20your%20beta%20launch%20notification%20list.%0A%0AI%27m%20interested%20in%20trying%20Diviphet%20when%20it%27s%20more%20stable."
              className="inline-flex items-center gap-2 bg-[var(--delft-blue)] hover:bg-[var(--delft-blue)]/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email me for Beta Updates
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

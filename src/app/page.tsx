import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen theme-bg">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--delft-blue)]/20 to-[var(--cambridge-blue)]/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="flex flex-col items-center gap-6 mb-8">
              {/* Monogram with glow effects */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--cambridge-blue)]/30 via-[var(--delft-blue)]/30 to-[var(--light-green)]/30 blur-2xl rounded-full scale-150"></div>
                <div className="relative">
                  <Image
                    src="/dv_monogram.png"
                    alt="Diviphet Logo"
                    width={120}
                    height={120}
                    className="relative z-10 drop-shadow-2xl filter brightness-0 invert"
                    style={{
                      filter: 'brightness(0) invert(1) drop-shadow(0 0 20px var(--delft-blue)) drop-shadow(0 0 40px var(--cambridge-blue))'
                    }}
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
                  <span className="relative tracking-wider drop-shadow-2xl">
                    <span className="flicker-1">DIV</span><span className="flicker-2">IP</span><span className="flicker-3">HET</span>
                  </span>
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--cambridge-blue)]/20 via-[var(--delft-blue)]/20 to-[var(--light-green)]/20 blur-3xl rounded-3xl"></div>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-[var(--foreground)]/80 mb-4 max-w-4xl mx-auto">
              Where Traditional RPGs Meet the Future of Interactive Storytelling
            </p>
            <p className="text-lg text-[var(--foreground)]/60 mb-12 max-w-3xl mx-auto">
              One foot in tradition, one step into tomorrow. Build worlds, create rules, and shape stories together in the first truly community-driven RPG ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[var(--delft-blue)] to-[var(--cambridge-blue)] hover:from-[var(--delft-blue)]/80 hover:to-[var(--cambridge-blue)]/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
                Join Discord Community
              </button>
              <button className="border border-[var(--border-hover)] text-[var(--foreground)]/80 hover:bg-[var(--surface)] hover:text-[var(--foreground)] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Community Section */}
      <section className="py-24 bg-[var(--surface)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6">
              Built by the Community, for the Community
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto">
              No coding required. Submit rule changes in plain text, vote on community proposals, and watch AI agents transform your ideas into game features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--delft-blue)]/20">
              <div className="w-12 h-12 bg-[var(--delft-blue)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Text-Based Contributions</h3>
              <p className="text-[var(--foreground)]/80">
                Submit rule changes, world lore, and game mechanics in simple text format. No programming knowledge needed.
              </p>
            </div>
            
            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--cambridge-blue)]/20">
              <div className="w-12 h-12 bg-[var(--cambridge-blue)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">AI-Powered Processing</h3>
              <p className="text-[var(--foreground)]/80">
                Our intelligent agents understand your contributions and automatically integrate them into the game engine.
              </p>
            </div>
            
            <div className="bg-[var(--surface)]/50 p-8 rounded-xl border border-[var(--light-green)]/20">
              <div className="w-12 h-12 bg-[var(--light-green)] rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">Consensus Voting</h3>
              <p className="text-[var(--foreground)]/80">
                Community-driven voting system with blockchain proof of contribution. Democracy meets game design.
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
                A Tabletop RPG System Built for Creators
              </h2>
              <p className="text-xl text-[var(--foreground)]/80 mb-8">
                Traditional RPG mechanics meet modern technology. Create new worlds, design custom rules, and build experiences that seamlessly blend classic storytelling with innovative gameplay.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[var(--delft-blue)] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">Modular Rule System</h4>
                    <p className="text-[var(--foreground)]/60">Mix and match rule modules to create your perfect game</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[var(--cambridge-blue)] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">World Building Tools</h4>
                    <p className="text-[var(--foreground)]/60">Collaborative tools for creating rich, living worlds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[var(--light-green)] rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-semibold">Community Integration</h4>
                    <p className="text-[var(--foreground)]/60">Share and discover content created by the community</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--delft-blue)]/20 to-[var(--cambridge-blue)]/20 p-8 rounded-2xl border border-[var(--delft-blue)]/30">
              <div className="bg-[var(--surface)]/80 p-6 rounded-lg">
                <div className="text-sm text-[var(--foreground)]/60 mb-4">Community Contribution Example:</div>
                <div className="bg-[var(--surface)]/50 p-4 rounded-lg mb-4">
                  <div className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                    <strong className="text-[var(--delft-blue)]">Proposal:</strong> &ldquo;Magic should feel more dangerous and unpredictable. When casting spells above your level, there should be a chance of wild magic surges that create unexpected effects - both helpful and harmful.&rdquo;
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="bg-[var(--light-green)] px-2 py-1 rounded text-white">✓ 247 votes</div>
                  <div className="text-[var(--foreground)]/60">→</div>
                  <div className="text-[var(--cambridge-blue)]">AI Processing</div>
                  <div className="text-[var(--foreground)]/60">→</div>
                  <div className="text-[var(--light-green)]">Integrated</div>
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
              The Diviphet Platform
            </h2>
            <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto">
              While the community creates the rules and worlds, the Diviphet Platform provides the tools to bring them to life.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border border-[var(--delft-blue)]/20">
              <div className="w-16 h-16 bg-[var(--delft-blue)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Virtual Environments</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Immersive spaces for your campaigns</p>
            </div>
            
            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border border-[var(--cambridge-blue)]/20">
              <div className="w-16 h-16 bg-[var(--cambridge-blue)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">AI Story Agents</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Transform community ideas into game features</p>
            </div>
            
            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border border-[var(--light-green)]/20">
              <div className="w-16 h-16 bg-[var(--light-green)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Creation Tools</h3>
              <p className="text-[var(--foreground)]/60 text-sm">Build and share your content</p>
            </div>
            
            <div className="bg-[var(--surface)]/50 p-6 rounded-xl text-center border border-[var(--green-yellow)]/20">
              <div className="w-16 h-16 bg-[var(--green-yellow)] rounded-xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
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
            Ready to Shape the Future of RPGs?
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
            <button className="border border-[var(--border-hover)] text-[var(--foreground)]/80 hover:bg-[var(--surface)] hover:text-[var(--foreground)] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">Diviphet</h3>
            <p className="text-[var(--foreground)]/60 mb-6">Building the future of interactive storytelling, together.</p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-[var(--delft-blue)] hover:text-[var(--delft-blue)]/80 transition-colors flex items-center gap-2 font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
                Discord
              </a>
              <a href="#" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">GitHub</a>
              <a href="#" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">Updates</a>
              <a href="#" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

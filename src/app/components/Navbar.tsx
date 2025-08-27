'use client';

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { DodecahedronLogo } from "./DodecahedronLogo";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              {/* Background contrast circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--delft-blue)]/20 to-[var(--cambridge-blue)]/20 rounded-full blur-sm scale-110"></div>
              <div className="relative bg-[var(--surface)]/80 backdrop-blur-sm rounded-full p-2 border border-[var(--border)]">
                <DodecahedronLogo 
                  size={28} 
                  className="text-[var(--foreground)]"
                />
              </div>
            </div>
            <span className="text-xl font-orbitron font-bold text-[var(--foreground)]">
              DIVIPHET
            </span>
          </Link>

          {/* Navigation links and theme toggle */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                href="/roadmap" 
                className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors font-medium"
              >
                Roadmap
              </Link>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
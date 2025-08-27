# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for **Diviphet**, a revolutionary community-driven tabletop RPG platform. The site showcases how traditional RPGs meet AI-powered community contributions, where users submit rule changes in plain text and AI agents process them into game features.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (localhost:3000)
- `pnpm build` - Create production build  
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint linting

## Project Architecture

**Core Stack**: Next.js 15 with App Router, React 19, TypeScript
**Styling**: Tailwind CSS v4 with inline theme configuration and PostCSS
**Fonts**: Geist Sans/Mono for body text, Orbitron for display/logo text
**Package Manager**: pnpm (evidenced by pnpm-lock.yaml)

**File Structure**:
```
src/app/
├── layout.tsx          # Root layout with fonts, metadata, and theme setup
├── page.tsx            # Single-page marketing site (all content sections)
├── globals.css         # Tailwind imports and CSS custom properties
└── icon.png           # Diviphet monogram favicon

public/
├── dv_monogram.png     # Primary brand monogram logo
└── [other assets]      # Next.js and other static assets
```

## Styling System

**Tailwind CSS v4 Configuration**: Uses inline `@theme` configuration in globals.css rather than external config file. Current setup is minimal with basic CSS custom properties.

**Font Setup**: Three fonts configured in layout.tsx:
- `--font-geist-sans` - Primary body font
- `--font-geist-mono` - Monospace font
- `--font-orbitron` - Display font for logos/headlines (weights: 400, 700, 900)

**Current Color Scheme**: The site uses hardcoded Tailwind utilities with cyberpunk aesthetic:
- Background gradients: `from-slate-900 via-purple-900 to-slate-900`
- Accent colors: cyan→purple→pink gradients
- Component backgrounds: `slate-700/50`, `slate-800/50` with transparency

**Design System Evolution**: There's a planned migration to align with the main Diviphet UI color scheme documented in `docs/change_theme_task.md`, which includes:
- Consistent accent colors: van-dyke, delft-blue, cambridge-blue, light-green, green-yellow
- Theme-aware CSS custom properties for light/dark modes
- Structured color system with surface, border, and semantic color tokens

## Content Architecture  

**Single-Page Design**: All marketing content lives in `src/app/page.tsx` organized in sections:
1. Hero section with dramatic logo treatment and glowing effects
2. Community features (text-based contributions, AI processing, voting)
3. Game engine overview (modular rules, world building, community integration)
4. Platform tools showcase (virtual environments, AI agents, creation tools)
5. Call-to-action with email signup and community links

**Brand Positioning**: Emphasizes accessibility ("no coding required"), community governance (voting/consensus), and the bridge between traditional tabletop gaming and modern technology.

## Technical Considerations

**TypeScript Configuration**: Uses modern settings with path mapping (`@/*` → `./src/*`) and Next.js plugin integration.

**Build System**: 
- ESLint configured with Next.js core-web-vitals and TypeScript rules
- PostCSS configured for Tailwind CSS v4
- Uses Next.js 15 Turbopack for development

**Image Optimization**: Uses Next.js Image component for logo display with custom filter effects for glow/shadow styling.

## Business Context

**Target Audience**: RPG creators, GMs, and players across all technical skill levels
**Value Proposition**: Democratizing RPG development through AI-powered community contributions  
**Community Model**: Text-based rule submissions → AI processing → democratic voting → game integration
**Technology Bridge**: Traditional tabletop mechanics enhanced with modern tooling and AI assistance
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing website for **Diviphet**, a revolutionary community-driven tabletop RPG platform. The site showcases how traditional RPGs meet AI-powered community contributions, where users submit rule changes in plain text and AI agents process them into game features.

## Development Commands

- `npm run dev` - Start development server with Turbopack (localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint linting

## Architecture

**Framework**: Next.js 15 with App Router, React 19, TypeScript
**Styling**: Tailwind CSS v4 with custom configuration
**Fonts**: Geist Sans/Mono for body text, Orbitron for display/logo text

The application follows Next.js App Router conventions:
- `src/app/layout.tsx` - Root layout with font configuration and metadata
- `src/app/page.tsx` - Single-page marketing site with all sections
- `src/app/globals.css` - Global styles and Tailwind directives

## Key Design Principles

**Visual Identity**: Cyberpunk/sci-fi aesthetic with dramatic gradients (cyan→purple→pink), glowing effects, and futuristic typography using Orbitron font for the logo.

**Content Strategy**: Emphasizes accessibility - no coding required for community contributions, AI handles technical implementation, democratic voting system with blockchain proof.

**Responsive Design**: Mobile-first approach with Tailwind breakpoints, uses CSS Grid and Flexbox for layouts.

## Styling Guidelines

- Uses Tailwind CSS v4 with inline theme configuration
- Custom font variables: `font-orbitron` for headlines, default Geist for body
- Color palette focuses on purple/blue/cyan gradients with dark backgrounds
- Extensive use of backdrop effects, shadows, and transparency layers

## Content Sections

The homepage contains these key sections in order:
1. Hero with dramatic logo treatment
2. Community contribution model (text-based, AI-processed)
3. Game engine features and modular systems
4. Platform tools (virtual environments, AI agents, creation tools)
5. Call-to-action for community engagement

## Business Context

When working on content or features, remember:
- Target audience: RPG creators, GMs, and players of all technical levels
- Core value proposition: Democratizing RPG development through AI
- Community-first approach with voting and consensus mechanisms
- Bridge between traditional tabletop gaming and modern technology
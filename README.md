# Diviphet Marketing Site

The official marketing website for **Diviphet** - a revolutionary community-driven tabletop RPG platform where traditional RPGs meet the future of interactive storytelling.

## About Diviphet

Diviphet is building the first truly community-driven RPG ecosystem where:
- Community members submit rule changes and ideas in plain text (no coding required)
- AI agents process and integrate contributions into the game engine  
- Democratic voting system with blockchain proof of contribution
- 100% open source from day one

## Development

This is a Next.js 15 application with TypeScript and Tailwind CSS.

### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Run production server  
- `npm run lint` - Run ESLint

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Typography**: Geist Sans/Mono + Orbitron (display font)
- **Language**: TypeScript

## Project Structure

```
src/app/
├── layout.tsx          # Root layout with fonts & metadata
├── page.tsx            # Homepage with all marketing sections
├── globals.css         # Global styles and Tailwind directives
└── icon.png           # Diviphet monogram favicon

public/
└── dv_monogram.png     # Brand monogram logo
```

## Design System

- **Color Palette**: Cyberpunk theme with cyan→purple→pink gradients
- **Typography**: Orbitron for headlines/logo, Geist for body text
- **Aesthetic**: Dark theme with glow effects and futuristic styling

## Community Focus

The site is currently optimized for community building and interest tracking:
- Discord community integration
- Email signup for launch updates
- GitHub repository links
- Focus on early adopter engagement

## Deployment

Optimized for deployment on Vercel or any modern hosting platform that supports Next.js.

---

*Building the future of interactive storytelling, together.*
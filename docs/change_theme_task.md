# Change the color theme

We need to adapt our current color scheme to be closer to the Diviphet User Interface.

## Specification

The current diviphet user interface has a `global.css` stylesheet with the following content:


```css
@import "tailwindcss";

:root {
  /* Accent colors - consistent across themes */
  --van-dyke: #484041;
  --delft-blue: #434371;
  --cambridge-blue: #79aea3;
  --light-green: #70ee9c;
  --green-yellow: #b5f44a;
}

/* Dark theme (default) */
:root,
[data-theme='dark'] {
  --background: #1a1a1a;
  --foreground: #ffffff;
  --surface: #2a2a2a;
  --surface-hover: #3a3a3a;
  --border: rgba(255, 255, 255, 0.1);
  --border-hover: rgba(255, 255, 255, 0.2);
  /* Legacy mappings */
  --diviphet-purple-dark: #2a2a2a;
  --diviphet-purple-light: #4a4a4a;
  --diviphet-cyan: #79aea3;
  --diviphet-pink: #70ee9c;
}

/* Light theme */
[data-theme='light'] {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --surface: #f8f9fa;
  --surface-hover: #e9ecef;
  --border: rgba(0, 0, 0, 0.1);
  --border-hover: rgba(0, 0, 0, 0.2);
  /* Legacy mappings */
  --diviphet-purple-dark: #f8f9fa;
  --diviphet-purple-light: #e9ecef;
  --diviphet-cyan: #79aea3;
  --diviphet-pink: #70ee9c;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-hover: var(--surface-hover);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --font-inter: var(--font-inter);
  /* Accent colors */
  --color-van-dyke: var(--van-dyke);
  --color-delft-blue: var(--delft-blue);
  --color-cambridge-blue: var(--cambridge-blue);
  --color-light-green: var(--light-green);
  --color-green-yellow: var(--green-yellow);
  /* Legacy mappings */
  --color-diviphet-purple-dark: var(--diviphet-purple-dark);
  --color-diviphet-purple-light: var(--diviphet-purple-light);
  --color-diviphet-cyan: var(--diviphet-cyan);
  --color-diviphet-pink: var(--diviphet-pink);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
  min-height: 100vh;
}

/* Custom markdown styles for chat messages */
.chat-markdown {
  color: inherit;
}

.chat-markdown p {
  margin: 0.5rem 0;
}

.chat-markdown p:first-child {
  margin-top: 0;
}

.chat-markdown p:last-child {
  margin-bottom: 0;
}

.chat-markdown strong {
  color: inherit;
  font-weight: 600;
}

.chat-markdown em {
  color: inherit;
}

.chat-markdown ul, .chat-markdown ol {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.chat-markdown li {
  margin: 0.25rem 0;
}

.chat-markdown code {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;
  font-size: 0.875rem;
  color: inherit;
}

.chat-markdown pre {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  padding: 0.75rem;
  margin: 0.5rem 0;
  overflow-x: auto;
}

.chat-markdown pre code {
  background-color: transparent;
  padding: 0;
}

.chat-markdown blockquote {
  border-left: 2px solid rgba(255, 255, 255, 0.3);
  padding-left: 1rem;
  margin: 0.5rem 0;
  font-style: italic;
}
```

We should redesign our marketing page to use similar styles, fonts, and colors.

## Light / Dark Theme Switcher

I am a fan of automatically switching between light and dark themes, even if it is a little "dated". We should support
this as well. Theme toggle should be simple, with a button press.

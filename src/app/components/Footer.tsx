export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[var(--foreground)]/60">
          <p className="text-sm font-medium mb-4">
            Crafted with
            <span className="text-[var(--cambridge-blue)] font-semibold"> AI excellence</span>
            {" "}using
            <a href="https://anthropic.com/claude-code" className="text-[var(--cambridge-blue)] hover:text-[var(--light-green)] font-semibold transition-all duration-200"> Claude Code</a>,
            {" "}and other AI tools.
          </p>
          <p className="text-sm flex items-center justify-center gap-2 mb-4 font-medium">
            Proudly headquartered in New Orleans, Louisiana
            <svg className="w-4 h-4 inline-block opacity-80" style={{ filter: 'brightness(0) invert(1)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L8.5 8.5L2 12l6.5 3.5L12 22l3.5-6.5L22 12l-6.5-3.5L12 2zm0 3.83L9.75 9.75L5.83 12l3.92 2.25L12 18.17l2.25-3.92L18.17 12l-3.92-2.25L12 5.83z"/>
            </svg>
          </p>
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Mercen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
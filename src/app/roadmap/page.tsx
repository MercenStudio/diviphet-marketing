import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { roadmapQuarters, roadmapData } from '../data/roadmap';
import { RoadmapItem, RoadmapStatus, RoadmapCategory } from '../types/roadmap';

function getStatusColor(status: RoadmapStatus): string {
  switch (status) {
    case 'completed':
      return 'var(--light-green)';
    case 'in-progress':
      return 'var(--cambridge-blue)';
    case 'planned':
      return 'var(--delft-blue)';
    case 'delayed':
      return '#ef4444';
    default:
      return 'var(--delft-blue)';
  }
}

function getCategoryIcon(category: RoadmapCategory): string {
  switch (category) {
    case 'core':
      return '🎯';
    case 'integrations':
      return '🔗';
    case 'community':
      return '👥';
    case 'platform':
      return '📱';
    default:
      return '⚡';
  }
}

function getStatusLabel(status: RoadmapStatus): string {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'in-progress':
      return 'In Progress';
    case 'planned':
      return 'Planned';
    case 'delayed':
      return 'Delayed';
    default:
      return 'Unknown';
  }
}

function RoadmapItemCard({ item }: { item: RoadmapItem }) {
  const statusColor = getStatusColor(item.status);

  return (
    <div className="bg-[var(--surface)]/50 border border-[var(--border)] rounded-xl p-6 hover:border-[var(--border-hover)] transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getCategoryIcon(item.category)}</span>
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--cambridge-blue)] transition-colors">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: statusColor }}
              ></span>
              <span className="text-sm text-[var(--foreground)]/60 font-medium">
                {getStatusLabel(item.status)}
              </span>
              <span className="text-sm text-[var(--foreground)]/40">•</span>
              <span className="text-sm text-[var(--foreground)]/60">
                {item.estimatedRelease}
              </span>
            </div>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          item.priority === 'high'
            ? 'bg-[var(--light-green)]/20 text-[var(--light-green)]'
            : item.priority === 'medium'
            ? 'bg-[var(--cambridge-blue)]/20 text-[var(--cambridge-blue)]'
            : 'bg-[var(--delft-blue)]/20 text-[var(--delft-blue)]'
        }`}>
          {item.priority.toUpperCase()}
        </div>
      </div>

      <p className="text-[var(--foreground)]/70 mb-4 text-sm leading-relaxed">
        {item.description}
      </p>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-[var(--foreground)]/80">Key Features:</h4>
        <ul className="space-y-1">
          {item.features.map((feature, index) => (
            <li key={index} className="text-sm text-[var(--foreground)]/60 flex items-start gap-2">
              <span className="text-[var(--cambridge-blue)] mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function QuarterSection({ quarter, year, items }: { quarter: string; year: number; items: RoadmapItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-gradient-to-r from-[var(--delft-blue)] to-[var(--cambridge-blue)] text-white px-6 py-3 rounded-xl">
          <h2 className="text-2xl font-orbitron font-bold">
            {quarter} {year}
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <RoadmapItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const totalItems = roadmapData.length;
  const completedItems = roadmapData.filter(item => item.status === 'completed').length;
  const inProgressItems = roadmapData.filter(item => item.status === 'in-progress').length;
  const progressPercentage = Math.round(((completedItems + inProgressItems * 0.5) / totalItems) * 100);

  return (
    <div className="min-h-screen theme-bg">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-black text-[var(--foreground)] mb-6 relative">
              <span className="relative inline-block">
                {/* Background glow effect */}
                <span className="absolute inset-0 text-[var(--cambridge-blue)] opacity-30 blur-sm scale-105">
                  ROADMAP
                </span>

                {/* Main text with same styling as DIVIPHET */}
                <span className="relative tracking-wider drop-shadow-2xl">
                  ROADMAP
                </span>
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--cambridge-blue)]/20 via-[var(--delft-blue)]/20 to-[var(--light-green)]/20 blur-3xl rounded-3xl"></div>
            </h1>
            <p className="text-xl text-[var(--foreground)]/80 max-w-3xl mx-auto mb-8">
              Track our progress as we build the tabletop tools that don&apos;t replace your creativity, they augment it.
            </p>

            {/* Progress Overview */}
            <div className="bg-[var(--surface)]/50 border border-[var(--border)] rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--light-green)]">
                    {completedItems}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/60 font-medium">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--cambridge-blue)]">
                    {inProgressItems}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/60 font-medium">In Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--delft-blue)]">
                    {roadmapData.filter(item => item.status === 'planned').length}
                  </div>
                  <div className="text-sm text-[var(--foreground)]/60 font-medium">Planned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-orbitron font-black text-[var(--cambridge-blue)]">
                    {progressPercentage}%
                  </div>
                  <div className="text-sm text-[var(--foreground)]/60 font-medium">Overall Progress</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[var(--surface)] rounded-full h-3 mb-4">
                <div
                  className="bg-gradient-to-r from-[var(--cambridge-blue)] to-[var(--light-green)] h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-[var(--foreground)]/60 text-center">
                Updated regularly • Last update: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {roadmapQuarters.map((quarterData) => (
            <QuarterSection
              key={`${quarterData.quarter}-${quarterData.year}`}
              quarter={quarterData.quarter}
              year={quarterData.year}
              items={quarterData.items}
            />
          ))}

          {/* Future Plans */}
          <div className="text-center mt-16 p-12 bg-gradient-to-r from-[var(--delft-blue)]/10 to-[var(--cambridge-blue)]/10 rounded-2xl border border-[var(--border)]">
            <h2 className="text-2xl font-orbitron font-bold text-[var(--foreground)] mb-4">
              Beyond 2026
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
              We&apos;re constantly evolving our roadmap based on community feedback and technological advances.
              Join our Discord to help shape the future of Diviphet and suggest new features.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="bg-gradient-to-r from-[var(--delft-blue)] to-[var(--cambridge-blue)] hover:from-[var(--delft-blue)]/80 hover:to-[var(--cambridge-blue)]/80 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 justify-center max-w-sm mx-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
                Share Your Ideas
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
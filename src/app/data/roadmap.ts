import { RoadmapItem, RoadmapQuarter } from '../types/roadmap';

export const roadmapData: RoadmapItem[] = [
  {
    id: "community-v1",
    title: "Diviphet Community Discord",
    description: "Establish the Diviphet Community",
    category: "community",
    status: "in-progress",
    estimatedRelease: "Q3 2025",
    features: [
      "Discord community for collaboration"
    ],
    priority: "high"
  },
  {
    id: "alpha-testers",
    title: "Sign up alpha testing squad",
    description: "We're looking for alpha testers! Join the discord community or sign up to our mailing list to request access",
    category: "core",
    status: "in-progress",
    estimatedRelease: "Q4 2025",
    features: [
      "Test our hypothesis",
      "Direct feedback to the diviphet team",
      "Ability to shape the project",
      "Lifelong discount for the service as thanks for your contributions"
    ],
    priority: "high"
  },
  {
    id: 'core-assistant-v1',
    title: 'Core AI Assistant Launch',
    description: 'Launch the foundational AI assistant for tabletop RPGs with rule lookups and basic encounter management.',
    category: 'core',
    status: 'in-progress',
    estimatedRelease: 'Q1 2026',
    features: [
      'SRD rule reference and lookup',
      'Initiative tracking',
      'Basic damage calculations',
      'Spell and ability quick reference',
      'Discord bot integration'
    ],
    priority: 'high'
  },
  {
    id: "mcp server",
    title: "MCP Server",
    description: "Launch foundational MCP server",
    category: "core",
    status: "in-progress",
    estimatedRelease: "Q1 2026",
    features: [
      "Integrate with your favorite agents"
    ],
    priority: "high"
  },
  {
    id: 'character-management',
    title: 'Character Management Suite',
    description: 'Comprehensive character creation, tracking, and management tools for players.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q2 2026',
    features: [
      'Character sheet integration',
      'Level progression tracking',
      'Equipment and inventory management',
      'Character build optimization suggestions',
      'Export to popular VTT platforms'
    ],
    priority: 'medium'
  },
  {
    id: 'encounter-builder',
    title: 'Smart Encounter Builder',
    description: 'AI-powered encounter generation and balancing for game masters.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q2 2026',
    features: [
      'Balanced encounter generation',
      'Environmental hazard suggestions',
      'Loot and treasure recommendations',
      'NPC stat block creation',
      'Encounter difficulty scaling'
    ],
    priority: 'medium'
  },
  {
    id: 'vtt-integrations',
    title: 'VTT Platform Integrations',
    description: 'Deep integrations with popular virtual tabletop platforms.',
    category: 'integrations',
    status: 'planned',
    estimatedRelease: 'Q3 2026',
    features: [
      'Roll20 integration',
      'Foundry VTT plugin',
      'Fantasy Grounds support',
      'Real-time sync capabilities',
      'Cross-platform compatibility'
    ],
    priority: 'high'
  },
  {
    id: 'campaign-tools',
    title: 'Campaign Management Hub',
    description: 'Complete campaign planning and session management tools for game masters.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q4 2026',
    features: [
      'Session planning and notes',
      'NPC relationship mapping',
      'World building templates',
      'Story arc tracking',
      'Player engagement analytics'
    ],
    priority: 'medium'
  },
  {
    id: 'community-features',
    title: 'Community Content Platform',
    description: 'Platform for sharing and discovering community-created content.',
    category: 'community',
    status: 'planned',
    estimatedRelease: 'Q4 2026',
    features: [
      'User-generated encounter library',
      'Community character builds',
      'Homebrew rule sharing',
      'Rating and review system',
      'Creator monetization tools'
    ],
    priority: 'low'
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI Storytelling',
    description: 'Next-generation AI features for dynamic storytelling assistance.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q2 2026',
    features: [
      'Dynamic plot generation',
      'Character dialogue suggestions',
      'Adaptive story branching',
      'Voice synthesis for NPCs',
      'Real-time narrative analysis'
    ],
    priority: 'low'
  }
];

export const roadmapQuarters: RoadmapQuarter[] = [
  {
    quarter: 'Q1',
    year: 2025,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q1 2025')
  },
  {
    quarter: 'Q2',
    year: 2025,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q2 2025')
  },
  {
    quarter: 'Q3',
    year: 2025,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q3 2025')
  },
  {
    quarter: 'Q4',
    year: 2025,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q4 2025')
  },
  {
    quarter: 'Q1',
    year: 2026,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q1 2026')
  },
  {
    quarter: 'Q2',
    year: 2026,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q2 2026')
  }
];
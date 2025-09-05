import { RoadmapItem, RoadmapQuarter } from '../types/roadmap';

export const roadmapData: RoadmapItem[] = [
  {
    id: "alpha-testers",
    title: "Alpha Testing Program",
    description: "Friends and family alpha testing to validate core concepts and gather feedback",
    category: "core",
    status: "completed",
    estimatedRelease: "Q3 2025",
    features: [
      "Invite-only alpha access",
      "Rule lookup and game mechanics",
      "Limited Game Master assistance",
      "Direct feedback collection",
      "Core feature validation"
    ],
    priority: "high"
  },
  {
    id: "improved-interactions",
    title: "Improved Interactions",
    description: "Improve intent detection, narrative components, and rule retrieval.",
    category: "core",
    status: "in-progress",
    estimatedRelease: "Q3 2025",
    features: [
      "Better intent detection on requests, e.g. 'What dice do I roll for a fireball spell?",
      "Improved accuracy on rule lookup and citation",
      "UI Improvements",
      "Better confidence scores on retrieval operations"
    ],
    priority: "high"
  },
    {
    id: "note-manager",
    title: "Campaign Note Manager",
    description: "Store, retrieve, and integrate your campaign notes.",
    category: "core",
    status: "in-progress",
    estimatedRelease: "Q4 2025",
    features: [
      "Allows you to store campaign notes and retreive them in chat sessions",
      "Integrate notes with custom and canoncial rules",
      "Bug fixes and UI improvements around citations and attribution",
    ],
    priority: "high"
  },
  {
    id: 'core-assistant-v1',
    title: 'AI Game Master Beta',
    description: 'Refined AI assistant for tabletop RPGs with expanded capabilities based on alpha feedback',
    category: 'core',
    status: 'in-progress',
    estimatedRelease: 'Q4 2026',
    features: [
      'SRD rule reference and lookup',
      'Initiative tracking',
      'Advanced damage calculations',
      'Spell and ability quick reference',
      'Session management improvements'
    ],
    priority: 'high'
  },
  {
    id: "community-v1",
    title: "Diviphet Community Discord",
    description: "Launch community platform after alpha validation",
    category: "community",
    status: "completed",
    estimatedRelease: "Q3 2025",
    features: [
      "Discord community for collaboration",
      "Alpha tester feedback integration",
      "Community-driven feature requests"
    ],
    priority: "medium"
  },
  {
    id: "mcp-server",
    title: "MCP Server Integration",
    description: "Claude integration server for enhanced AI capabilities",
    category: "core",
    status: "planned",
    estimatedRelease: "Q2 2026",
    features: [
      "Integrate with Claude and other AI agents",
      "Enhanced rule processing",
      "Advanced conversation context"
    ],
    priority: "medium"
  },
  {
    id: 'campaign-portal',
    title: 'Campaign Portal',
    description: 'A place to organize the details of your campaign.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q1 2026',
    features: [
      'PDF and document upload',
      'Campaign notes and organization',
      'Session planning tools',
      'Character sheet storage',
      'Rule reference management'
    ],
    priority: 'high'
  },
  {
    id: 'character-management',
    title: 'Character Management Suite',
    description: 'Comprehensive character creation, tracking, and management tools for players.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q4 2026',
    features: [
      'Character sheet integration',
      'Level progression tracking',
      'Equipment and inventory management',
      'Character build optimization suggestions',
      'Import/export capabilities'
    ],
    priority: 'medium'
  },
  {
    id: 'encounter-builder',
    title: 'Smart Encounter Builder',
    description: 'Generate fair and balanced encounters, or learn how to build them.',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q1 2026',
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
    estimatedRelease: 'Q1 2026',
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
    title: 'GM Pair Assistant',
    description: 'If you are a new GM, you will love this feature',
    category: 'core',
    status: 'planned',
    estimatedRelease: 'Q4 2026',
    features: [
      'Helps you learn to run the game',
      'Character dialogue suggestions',
      'Adaptive story branching',
      'NPC Management',
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
  },
  {
    quarter: 'Q3',
    year: 2026,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q3 2026')
  },
  {
    quarter: 'Q4',
    year: 2026,
    items: roadmapData.filter(item => item.estimatedRelease === 'Q4 2026')
  }
];
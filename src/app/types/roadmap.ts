export type RoadmapStatus = 'planned' | 'in-progress' | 'completed' | 'delayed';

export type RoadmapCategory = 'core' | 'integrations' | 'community' | 'platform';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  category: RoadmapCategory;
  status: RoadmapStatus;
  estimatedRelease: string; // Quarter format like "Q1 2025"
  features: string[];
  priority: 'high' | 'medium' | 'low';
}

export interface RoadmapQuarter {
  quarter: string;
  year: number;
  items: RoadmapItem[];
}
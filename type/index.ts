export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  isUpcomingLaunch?: boolean;
}

export interface Pillar {
  number: string;
  text: string;
}

export interface Project {
  title: string;
  creator: string;
  creatorAvatar: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  tag: string;
  image: string;
  link: string;
}

export interface FluidExpandingGridProps {
  items?: EventItem[];
  className?: string;
  id?: string;
}

export type EventItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  date: string;
  category: string; // Workshop | Conference | Meetup
  mode: "Online" | "In Person";
  link?: string;
};

export interface Company {
  name: string;
  slug: string;
  logo: string;
  description: string;
  detailedDescription: string;
  industry: string;
  location: string;
  website: string;
  founded: string;
  teamSize: string;
  technologies: string[];
  features: string[];
  image: string;
}

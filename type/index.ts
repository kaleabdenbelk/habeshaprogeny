export interface NewsItem {
  title: string;
  author: string;
  date: string;
  image: string;
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

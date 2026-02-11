import { NewsItem, Project, Pillar, EventItem } from "@/type";

export const pillars: Pillar[] = [
  {
    number: "1",
    text: "Build Real Things. We create projects, startups, and systems that move beyond theory.",
  },
  {
    number: "2",
    text: "Grow Through Discipline. Talent matters, but consistency creates impact.",
  },
  {
    number: "3",
    text: "Rise Together. African ambition amplified through collaboration.",
  },
];

export const newsItems: NewsItem[] = [
  {
    title: "Introducing North: The next era of enterprise AI",
    author: "COHERE TEAM",
    date: "AUG 06, 2025",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4628c7189?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Defining AI automation: A new kind of workplace",
    author: "COHERE TEAM",
    date: "JUN 13, 2025",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Bringing secure AI to critical systems",
    author: "COHERE TEAM",
    date: "JUN 30, 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
  },
];

export const projects: Project[] = [
  {
    title: "Neural Explorer",
    creator: "Dr. Elena Vance",
    creatorAvatar: "https://i.pravatar.cc/100?u=elena",
    description:
      "A real-time 3D visualization of transformer attention layers.",
    detailedDescription:
      "Neural Explorer is a cutting-edge research tool designed to make the invisible visible. It provides a real-time, three-dimensional visualization of transformer attention layers, allowing AI researchers to peer into the 'black box' of model reasoning. By mapping high-dimensional vector spaces into an interactive 3D environment, researchers can identify anomalies in attention heads and debug complex reasoning patterns with unprecedented clarity.",
    technologies: ["React", "Three.js", "PyTorch", "WebGL"],
    features: [
      "Real-time attention mapping",
      "Interactive 3D model architecture",
      "Per-layer analysis tools",
      "Direct integration with HuggingFace models",
    ],
    tag: "Research",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/hpweb/neural-explorer",
  },
  {
    title: "Semantic Search Pro",
    creator: "Marcus Chen",
    creatorAvatar: "https://i.pravatar.cc/100?u=marcus",
    description: "Enterprise-grade vector search engine for legal compliance.",
    detailedDescription:
      "Semantic Search Pro redefines enterprise information retrieval. Built on the foundation of Cohere's latest embedding models, it enables legal and compliance teams to search through millions of documents using natural language instead of rigid keywords. The system maintains strict data privacy while providing millisecond response times, making it the go-to solution for large-scale litigation and regulatory reviews.",
    technologies: ["Next.js", "Pinecone", "Cohere Embed", "TypeScript"],
    features: [
      "Multilingual semantic understanding",
      "SOC2 compliant data processing",
      "Automated document summarization",
      "Advanced filtering and tagging",
    ],
    tag: "Enterprise",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    link: "https://demo.hpweb.ai/semantic-search",
  },
  {
    title: "Aether Flow",
    creator: "Sarah Jenkins",
    creatorAvatar: "https://i.pravatar.cc/100?u=sarah",
    description: "Generative UI system that adapts to user sentiment.",
    detailedDescription:
      "Aether Flow represents the next evolution of user interface design. It is a generative UI system that doesn't just respond to clicks—it adapts to human emotion. By analyzing user sentiment and intent in real-time, Aether Flow dynamically adjusts layouts, color palettes, and component complexity to create a truly personalized digital experience that feels recursive and alive.",
    technologies: ["React", "Framer Motion", "OpenAI API", "Tailwind CSS"],
    features: [
      "Sentiment-driven styling",
      "Dynamic layout generation",
      "Adaptive component library",
      "Micro-interaction engine",
    ],
    tag: "Design",
    image:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    link: "https://aetherflow.design",
  },
];
export const faqs = [
  {
    question: "What exactly is the Inner Circle?",
    answer:
      "The Inner Circle is a committed group of builders inside HabeshaProgeny who take on deeper challenges, develop real projects, and help guide the community. It is not about status — it is about responsibility, discipline, and execution.",
  },
  {
    question: "How can I join the Inner Circle?",
    answer:
      "Anyone can apply. Applicants are given a practical challenge to complete. We are not testing intelligence — we are looking for commitment, consistency, and the ability to follow through.",
  },
  {
    question: "Do I need to be in the Inner Circle to participate?",
    answer:
      "No. The broader community is open to everyone. You can join events, collaborate on projects, and grow your skills without being part of the Inner Circle.",
  },
  {
    question: "How does startup support work?",
    answer:
      "We support founders in two ways. First, through technical collaboration where skilled members can directly contribute to building the project. Second, through community-driven support where founders connect with designers, developers, and marketers to move their ideas forward.",
  },
  {
    question: "Is there a cost to join HabeshaProgeny?",
    answer:
      "The community is open and accessible. Some specialized programs or future initiatives may have specific requirements, but our goal is to lower barriers and focus on contribution rather than fees.",
  },
];

export const ITEMS: EventItem[] = [
  {
    id: "grassy",
    title: "Highlands Tech Summit",
    subtitle: "Golden fields under the giant",
    description:
      "A 2-day immersive tech summit covering AI, cloud systems, and startup scaling strategies.",
    image:
      "https://images.unsplash.com/photo-1755441172753-ac9b90dcd930?w=600&auto=format&fit=crop&q=60",
    color: "#84cc16",
    date: "March 12, 2026",
    category: "Conference",
    mode: "In Person",
    link: "#",
  },
  {
    id: "misty",
    title: "Crimson Design Workshop",
    subtitle: "A scarlet flame in the mountains",
    description:
      "Hands-on UI/UX workshop focused on motion design and modern web experiences.",
    image:
      "https://plus.unsplash.com/premium_photo-1667423711653-1ffb899172bc?w=600&auto=format&fit=crop&q=60",
    color: "#10b981",
    date: "April 2, 2026",
    category: "Workshop",
    mode: "Online",
    link: "#",
  },
  {
    id: "desert",
    title: "Deep Sea AI Meetup",
    subtitle: "Floating gracefully in the abyss",
    description:
      "A local developer meetup discussing LLMs, embeddings, and practical AI products.",
    image:
      "https://images.unsplash.com/photo-1757263005786-43d955f07fb1?w=600&auto=format&fit=crop&q=60",
    color: "#0369a1",
    date: "May 8, 2026",
    category: "Meetup",
    mode: "In Person",
    link: "#",
  },
];

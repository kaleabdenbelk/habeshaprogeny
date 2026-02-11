import { projects } from "@/constant";

export const Projects = () => {
  

  return (
    <section id="projects" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">COMMUNITY SHOWCASE</span>
                <div className="h-[1px] w-8 bg-black/10"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif-display leading-tight tracking-tight text-[#16364d]">
                Built with <br />
                <span className="italic">purpose.</span>
              </h2>
            </div>
            <button className="text-sm font-semibold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity w-fit">
              Submit your project
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          {/* Bottom Call to Action */}
          {/* <div className="flex justify-center mt-12">
             <div className="bg-white/50 backdrop-blur-sm border border-black/[0.05] p-6 rounded-[2rem] flex items-center gap-6 max-w-2xl">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?u=stack${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Member" />
                   ))}
                </div>
                <p className="text-sm text-black/60">
                  <span className="font-semibold text-black">420+ new projects</span> were launched this month by the Inner Circle.
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-blue-600 ml-auto whitespace-nowrap">
                  View Directory
                </button>
             </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  creator: string;
  creatorAvatar: string;
  description: string;
  tag: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, creator, creatorAvatar, description, tag, image }) => (
  <div className="group flex flex-col bg-white rounded-[2.5rem] border border-black/[0.03] shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
      />
      <div className="absolute top-6 left-6">
        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase shadow-sm">
          {tag}
        </span>
      </div>
    </div>
    
    <div className="p-10 flex flex-col flex-1 gap-6">
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-serif-display tracking-tight leading-tight">{title}</h4>
        <div className="flex items-center gap-2">
          <img src={creatorAvatar} className="w-5 h-5 rounded-full grayscale" alt={creator} />
          <span className="text-[11px] font-medium text-black/40 uppercase tracking-wider">By {creator}</span>
        </div>
      </div>
      
      <p className="text-black/50 text-sm leading-relaxed font-light">
        {description}
      </p>
      
      <div className="mt-auto pt-6 border-t border-black/[0.03] flex justify-between items-center">
        <a href="#" className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 group/link">
          Explore Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export const Events = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">EVENTS & HACKATHONS</span>
              <div className="h-[1px] w-8 bg-black/10"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif-display leading-tight tracking-tight text-[#16364d]">
              Fuel your ambition with <br />
              <span className="italic">collaborative intensity.</span>
            </h2>
          </div>

          {/* Featured Upcoming Event */}
          <div className="group relative overflow-hidden bg-black text-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase">Coming Soon: In-Person</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif-display">Inner Circle Summit: <br />San Francisco 2024</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                  Our flagship in-person gathering returns. A high-bandwidth weekend of deep-tech demos, closed-door strategy sessions, and the strongest networking in the ecosystem.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium w-fit hover:scale-105 transition-transform">
                  Request Invite
                </button>
              </div>
              
              <div className="hidden md:flex justify-end">
                <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full blur-sm"></div>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full blur-sm"></div>
                   <div className="w-32 h-32 border border-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent"></div>
            </div>
          </div>

          {/* Event Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <EventCard 
              title="Practice Pitching"
              description="Get raw, actionable feedback from industry veterans before you step into the boardroom. Refine your narrative in a high-trust environment."
              tag="PITCH"
              color="bg-blue-500/10"
              textColor="text-blue-600"
            />
            <EventCard 
              title="Build Hackathons"
              description="Intensive 48-hour sprints focused on shipping production-ready prototypes. Tackle real-world challenges with direct access to our latest models."
              tag="BUILD"
              color="bg-pink-500/10"
              textColor="text-pink-600"
            />
            <EventCard 
              title="Networking Mixers"
              description="Curated socials for builders, researchers, and founders. No awkward small talk—just high-signal conversations with the pioneers of AI."
              tag="CONNECT"
              color="bg-orange-400/10"
              textColor="text-orange-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const EventCard: React.FC<{ 
  title: string; 
  description: string; 
  tag: string; 
  color: string;
  textColor: string;
}> = ({ title, description, tag, color, textColor }) => (
  <div className="bg-white p-10 rounded-[2rem] border border-black/[0.03] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col gap-6">
    <div className={`px-3 py-1 rounded-full ${color} w-fit`}>
      <span className={`text-[9px] font-bold tracking-widest uppercase ${textColor}`}>{tag}</span>
    </div>
    <h4 className="text-2xl font-semibold tracking-tight">{title}</h4>
    <p className="text-black/50 text-sm leading-relaxed font-light">
      {description}
    </p>
    <div className="mt-auto pt-6 border-t border-black/[0.02]">
      <a href="#" className="text-xs font-semibold uppercase tracking-widest hover:opacity-50 transition-opacity inline-flex items-center gap-2">
        Learn more 
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
);

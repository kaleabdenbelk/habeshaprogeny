import { projects } from "@/constant";
import { ExpandableCard } from "@/components/ui/expandable-card";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">
                  COMMUNITY SHOWCASE
                </span>
                <div className="h-[1px] w-8 bg-black/10"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif-display leading-tight tracking-tight text-[#16364d]">
                Built with <br />
                <span className="italic text-[#16364d]">purpose.</span>
              </h2>
            </div>
            <button className="text-sm font-semibold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity w-fit text-[#16364d]">
              Submit your project
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ExpandableCard
                key={index}
                title={project.title}
                src={project.image}
                description={project.tag}
                className="group border border-black/[0.03] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 rounded-[2.5rem] p-4 bg-white"
                classNameExpanded="bg-white dark:bg-zinc-950 sm:rounded-[2.5rem]"
              >
                <div className="flex flex-col gap-8 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.creatorAvatar}
                      className="w-10 h-10 rounded-full grayscale"
                      alt={project.creator}
                    />
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-black/40 uppercase tracking-widest">
                        Creator
                      </span>
                      <span className="text-sm font-medium text-black">
                        {project.creator}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-black">
                      About the project
                    </h4>
                    <p className="text-black/60 text-base leading-relaxed font-light">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {project.technologies && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-black">
                        Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.features && (
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-black">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-black/60"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-6 border-t border-black/[0.05] mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#16364d] text-white px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      Visit Project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ExpandableCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

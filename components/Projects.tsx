"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/constant";
import { ArrowRight } from "lucide-react";

export const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">
                COMMUNITY SHOWCASE
              </span>
              <div className="h-[1px] w-8 bg-black/10"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif-display leading-[0.9] tracking-[-0.05em] text-[#16364d]">
              Built with <br />
              <span className="italic">purpose.</span>
            </h2>
          </div>

          {/* Featured Project */}
          {featuredProject && (
            <div className="group relative overflow-hidden bg-[#16364d] text-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit">
                    <span className="text-[10px] font-bold tracking-wider uppercase">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-serif-display">
                    {featuredProject.title}
                  </h3>
                  <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
                    {featuredProject.description}
                  </p>
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#16364d] px-8 py-4 rounded-full text-sm font-bold w-fit hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    View Project
                    <ArrowRight size={18} />
                  </a>
                </div>

                <div className="relative h-64 md:h-96 w-full rounded-[2rem] overflow-hidden">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                </div>
              </div>

              {/* Background Texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
              </div>
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tag={project.tag}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  title: string;
  description: string;
  tag: string;
  image: string;
  link: string;
}> = ({ title, description, tag, image, link }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-black/[0.03] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col gap-6 group">
    <div className="relative h-48 w-full rounded-[1.5rem] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute top-4 left-4">
        <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-sm border border-black/5">
          <span className="text-[9px] font-bold tracking-widest uppercase text-[#16364d]">
            {tag}
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h4 className="text-xl font-semibold tracking-tight text-[#16364d]">
        {title}
      </h4>
      <p className="text-black/50 text-sm leading-relaxed font-light line-clamp-2">
        {description}
      </p>
    </div>
    <div className="mt-auto pt-4 border-t border-black/[0.02]">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-semibold uppercase tracking-widest text-[#16364d] hover:opacity-50 transition-opacity inline-flex items-center gap-2"
      >
        Explore Case Study
        <ArrowRight size={14} />
      </a>
    </div>
  </div>
);

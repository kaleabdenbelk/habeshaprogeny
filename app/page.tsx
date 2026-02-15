import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Events } from "@/components/Events";
import { FAQ } from "@/components/FAQ";
import { Mission } from "@/components/Mission";
import { Navbar } from "@/components/Navbar";
import { News } from "@/components/News";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { Projects } from "@/components/Projects";
import { pillars } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero */}
      <main className="bg-[#f4f1ea]">
        <section className="pt-24 mb-16 pb-5 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="italic text-5xl md:text-8xl text-[#16364d] font-serif-display tracking-[-0.06em] leading-[0.9]">
            Where Young Potential <br />
            meets Execution
          </h1>

          <p className="text-lg md:text-xl text-[#16364d]/70 max-w-2xl font-light leading-relaxed">
            HabeshaProgeny builds communities, projects, and startup ecosystems
            that turn ambitious Africans into real-world builders.
          </p>
        </section>
        {/* Mission */}
        <section
          id="mission"
          className="px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px] scroll-mt-24"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#16364d]">
              OUR MISSION
            </span>
            <h2 className="text-[10px] md:text-3xl font-normal leading-snug max-w-lg text-black">
              We believe talent is everywhere, but structure and execution
              isn't. Our mission is to empower Africans and Ethiopians to learn
              collaborate and build, Create real projects, real startups, and
              real progress that moves beyond conversation. We are committed to
              turning potential into disciplined action.
            </h2>
          </div>

          <div className="relative w-full h-[500px] overflow-visible">
            <div className="absolute inset-0 z-0 opacity-80 particle-container">
              <ParticleCanvas />
            </div>
          </div>
        </section>
        {/* Values */}
        <section id="values" className="text-[#16364d] py-32 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
              <div className="lg:col-span-4 lg:pt-4">
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm">
                  Beyond flawless execution, it's our mindset that makes the
                  difference. As a global agent agency, we combine human-first
                  thinking, creative precision, and an obsession with detail
                  that earns the spotlight.
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-6xl md:text-9xl font-semibold tracking-tighter leading-[0.9]">
                  What we're <br /> made of
                </h2>
              </div>
            </div>

            {/* Pillars Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 text-white rounded-[2rem] p-8 md:p-12 min-h-[400px] flex flex-col md:flex-row items-start gap-6 hover:scale-[1.02] transition-transform duration-500"
                >
                  <div className="text-6xl md:text-8xl font-medium leading-none tracking-tighter border-b border-black/10 pb-4 md:border-b-0 md:pb-0">
                    {pillar.number}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-sm md:text-base leading-relaxed text-[#f4f1ea] font-medium">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* News */}
        <News />
        {/* Community */}
        <section
          id="community"
          className="py-32 px-6 overflow-hidden bg-[#faf8f5] scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Side: Copy */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">
                    COMMUNITY
                  </span>
                  <div className="h-[1px] w-8 bg-black/10"></div>
                </div>

                <h2 className="text-5xl italic md:text-7xl font-serif-display leading-[0.9] tracking-[-0.05em] text-[#16364d]">
                  A home for every <br />
                  <span className="italic text-[#16364d]">pioneer.</span>
                </h2>

                <p className="text-xl text-black/60 max-w-xl leading-relaxed font-light">
                  We’re creating more than just a community; we’re fostering an
                  ecosystem where every developer, researcher, and builder feels
                  at home. Join a global collective dedicated to shaping the
                  next generation with integrity and human insight.
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-xl shadow-black/5">
                    Join the Community
                  </button>
                  <button className="group bg-[#16a34a] border border-black/10 px-8 py-4 rounded-full text-sm font-medium hover:bg-black/5 transition-colors flex items-center gap-2">
                    <span>Access the Inner Circle</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Side: Visual Element */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-2xl shadow-black/[0.02] relative z-10">
                  <div className="flex flex-col gap-10">
                    <div className="space-y-4">
                      {/* <div className="flex -space-x-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full border-4 border-white bg-neutral-100 flex items-center justify-center overflow-hidden"
                          >
                            <img
                              src={`https://i.pravatar.cc/100?u=${i + 10}`}
                              alt="User"
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-white bg-black text-white flex items-center justify-center text-[10px] font-bold">
                          +2k
                        </div>
                      </div> */}
                      <h3 className="font-semibold text-lg">
                        Inner Circle Benefits
                      </h3>
                      <p className="text-sm text-black/50 leading-relaxed">
                        Get exclusive access to beta features, private
                        networking events, and direct architectural support from
                        our core engineering team.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Blurs */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-200/30 rounded-full blur-[100px] -z-0"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-[100px] -z-0"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Events */}
        <Events />
        {/* Projects */}
        <Projects />
        {/* FAQ */}
        <FAQ />
        {/* Contact */}
        <Contact />
        {/* CTA */}
        {/* <CTA /> */}

        {/* Footer */}
        <footer className="py-20 px-6 max-w-7xl mx-auto border-t border-black/5 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/logoo.png"
                alt="Habesha progeny"
                width={50}
                height={50}
              />
              <span className="font-semibold text-2xl text-[#16364d] tracking-tight">
                Habesha Progeny
              </span>
            </div>
            <p className="text-sm text-[#16a34a]">
              © 2024 Habesha Progeny. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

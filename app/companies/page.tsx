"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { companies } from "@/constant";
import { Building2, MapPin, Globe, ArrowRight } from "lucide-react";

const CompaniesPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#16364d] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">
              OUR NETWORK
            </span>
            <div className="h-[1px] w-8 bg-black/10"></div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-serif-display leading-[0.9] tracking-[-0.05em] mb-4"
          >
            Built with <br />
            <span className="italic">ambition.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/60 text-lg max-w-2xl font-light"
          >
            Connecting visionary companies and startups within the Habesha tech
            ecosystem. Discover the organizations driving innovation across the
            continent.
          </motion.p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/companies/${company.slug}`}>
                <div className="h-full bg-white border border-black/[0.03] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 rounded-[2.5rem] p-4 flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden rounded-[2rem] mb-6">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />

                    {/* Logo Overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md border border-black/5 flex items-center justify-center overflow-hidden p-2 shadow-xl">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="px-4 pb-4 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black/60">
                        {company.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 text-[#16364d] group-hover:italic transition-all duration-300">
                      {company.name}
                    </h3>

                    <p className="text-black/60 text-sm mb-8 line-clamp-2 font-light leading-relaxed">
                      {company.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-black/[0.05] flex items-center justify-between">
                      <div className="flex items-center text-black/40 text-[11px] font-bold uppercase tracking-widest gap-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} />
                          {company.location.split(",")[0]}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Building2 size={12} />
                          {company.teamSize}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#16364d] flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-all duration-500">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;

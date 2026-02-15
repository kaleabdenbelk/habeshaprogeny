"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import { companies } from "@/constant";
import {
  Building2,
  MapPin,
  Globe,
  Calendar,
  Users,
  ChevronLeft,
  ExternalLink,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const CompanyDetailsPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#16364d] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-black/40 hover:text-[#16364d] transition-colors group font-bold text-xs uppercase tracking-widest"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Network
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="relative mb-20 rounded-[3rem] overflow-hidden bg-white border border-black/[0.03] shadow-sm">
          <div className="h-[350px] md:h-[450px] relative">
            <Image
              src={company.image}
              alt={company.name}
              fill
              className="object-cover grayscale opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
            <div className="flex flex-col md:flex-row md:items-end gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 md:w-40 md:h-40 rounded-[2.5rem] bg-white border border-black/5 flex items-center justify-center p-6 shadow-2xl overflow-hidden relative z-10"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </motion.div>

              <div className="flex-grow">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-black/60">
                      {company.industry}
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-serif-display leading-[0.9] tracking-[-0.05em] text-[#16364d]">
                    {company.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-6 text-black/40 font-bold text-[11px] uppercase tracking-widest pt-2">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#16364d]" />
                      {company.location}
                    </span>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#16364d] hover:underline"
                    >
                      <Globe size={14} />
                      Official Website
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2
                className="text-3xl font-serif-display text-[#16364d] mb-8 italic"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                Our Story
              </h2>
              <p className="text-xl leading-relaxed text-black/70 font-light">
                {company.detailedDescription}
              </p>
            </section>

            <section>
              <h2
                className="text-3xl font-serif-display text-[#16364d] mb-10 flex items-center gap-3"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {company.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 rounded-2xl bg-white border border-black/[0.05] text-sm font-semibold text-black/60 shadow-sm hover:border-[#16364d]/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2
                className="text-3xl font-serif-display text-[#16364d] mb-10 flex items-center gap-3"
                style={{ fontFamily: "Instrument Serif, serif" }}
              >
                Capabilities & Innovations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {company.features.map((feature) => (
                  <div
                    key={feature}
                    className="group flex items-start gap-4 p-6 rounded-[2rem] bg-white border border-black/[0.03] shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#16364d]/20 group-hover:bg-[#16364d] transition-colors" />
                    <span className="text-black/70 font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-10 rounded-[2.5rem] bg-white border border-black/[0.05] shadow-xl space-y-10">
              <h3 className="text-xl font-bold text-[#16364d] border-b border-black/[0.05] pb-6 uppercase tracking-widest text-[11px]">
                Snapshot
              </h3>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                    <Calendar size={20} className="text-[#16364d]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-black/40 uppercase font-black tracking-widest mb-1">
                      Founded
                    </p>
                    <p className="text-[#16364d] font-bold text-lg">
                      {company.founded}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                    <Users size={20} className="text-[#16364d]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-black/40 uppercase font-black tracking-widest mb-1">
                      Team Size
                    </p>
                    <p className="text-[#16364d] font-bold text-lg">
                      {company.teamSize} members
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f1ea] flex items-center justify-center">
                    <Building2 size={20} className="text-[#16364d]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-black/40 uppercase font-black tracking-widest mb-1">
                      Industry
                    </p>
                    <p className="text-[#16364d] font-bold text-lg">
                      {company.industry}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 rounded-2xl bg-[#16364d] text-white font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  Visit Directory
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsPage;

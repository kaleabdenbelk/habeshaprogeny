"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Tag, Share2, Clock } from "lucide-react";
import { newsItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function NewsDetailsPage() {
  const { slug } = useParams();
  const router = useRouter();
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return (
      <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center p-6">
        <div className="text-center flex flex-col gap-6">
          <h1 className="text-4xl font-serif-display text-[#16364d]">
            Story not found
          </h1>
          <p className="text-black/50">
            The story you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-[#16364d] text-white px-8 py-3 rounded-full text-sm font-semibold hover:scale-105 transition-transform mx-auto"
          >
            <ArrowLeft size={16} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-md rounded-full px-4 py-2 pointer-events-auto border border-black/5 shadow-sm">
          <Link
            href="/news"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#16364d] hover:opacity-50 transition-opacity"
          >
            <ArrowLeft size={14} /> Back to Stories
          </Link>
          <div className="flex items-center gap-4">
            <button className="text-[#16364d] opacity-40 hover:opacity-100 transition-opacity">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full pt-20 px-6">
        <div className="max-w-7xl mx-auto h-full relative rounded-[3rem] overflow-hidden shadow-2xl">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16364d] via-[#16364d]/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#57ff8f] text-[#16364d] rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {news.category}
                </span>
                {news.isUpcomingLaunch && (
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Project Launch
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-7xl font-serif-display leading-[1] tracking-[-0.05em] text-white italic max-w-4xl">
                {news.title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-8 text-white/60 text-sm font-medium border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#57ff8f]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                    Written By
                  </span>
                  <span className="text-white">{news.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#57ff8f]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                    Published
                  </span>
                  <span className="text-white">{news.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#57ff8f]" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                    Read Time
                  </span>
                  <span className="text-white">5 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-headings:font-serif-display prose-headings:text-[#16364d] prose-p:text-black/60 prose-p:font-light prose-p:leading-relaxed">
            <p className="text-2xl font-normal text-[#16364d] leading-snug mb-12 border-l-4 border-[#57ff8f] pl-8 italic">
              {news.excerpt}
            </p>

            <div className="space-y-8 text-lg font-light leading-relaxed text-black/70">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-3xl font-serif-display tracking-tight text-[#16364d] mt-12 mb-6">
                Deep Dive into the Innovation
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <div className="my-12 relative h-96 rounded-[2rem] overflow-hidden bg-[#16364d]">
                <Image
                  src={news.image}
                  alt="Section Image"
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <blockquote className="my-12 p-8 bg-white rounded-[2rem] border border-black/5 italic text-xl text-[#16364d]">
                "Innovation distinguishes between a leader and a follower. Our
                goal with this launch is to lead the way into a new era of
                digital interaction."
              </blockquote>

              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-black/5 flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-black/5 rounded-full text-xs font-medium text-black/40">
              #innovation
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-full text-xs font-medium text-black/40">
              #future
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-full text-xs font-medium text-black/40">
              #tech
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-full text-xs font-medium text-black/40">
              #africa
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#16364d] text-white p-12 md:p-20 rounded-[3rem] text-center flex flex-col gap-8 shadow-2xl overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif-display italic mb-4">
                Stay ahead of the curve.
              </h2>
              <p className="text-white/60 font-light max-w-md mx-auto mb-10">
                Get the latest insights on AI, community building, and upcoming
                launches delivered straight to your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-white/10 border border-white/20 rounded-full px-6 py-4 outline-none focus:ring-2 ring-white/20 flex-1 text-sm"
                />
                <button className="bg-white text-[#16364d] px-8 py-4 rounded-full text-sm font-bold hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

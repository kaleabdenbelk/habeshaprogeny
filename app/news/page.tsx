"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ArrowRight, Calendar, User, Tag } from "lucide-react";
import { newsItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "All",
  "AI",
  "Ecosystem",
  "Launch",
  "Community",
  "Workplace",
  "Security",
];

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const upcomingLaunches = useMemo(() => {
    return newsItems.filter((item) => item.isUpcomingLaunch);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1ea]">
      <main className="max-w-7xl mx-auto px-6 py-32">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">
                THE LATEST INSIGHTS
              </span>
              <div className="h-[1px] w-8 bg-black/10"></div>
            </div>
            <h1 className="italic text-5xl md:text-8xl text-[#16364d] font-serif-display tracking-[-0.06em] leading-[0.9]">
              News, Stories & <br />
              <span className="italic">Project Launches.</span>
            </h1>
          </motion.div>
        </section>

        {/* Upcoming Launches Highlight */}
        {upcomingLaunches.length > 0 && (
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-serif-display text-[#16364d]">
                Upcoming Launches
              </h2>
              <div className="flex-1 h-[1px] bg-black/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingLaunches.map((launch) => (
                <Link
                  href={`/news/${launch.slug}`}
                  key={launch.id}
                  className="group"
                >
                  <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden bg-[#16364d] text-white p-8 md:p-12 flex flex-col justify-end">
                    <Image
                      src={launch.image}
                      alt={launch.title}
                      fill
                      className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16364d] via-transparent to-transparent"></div>
                    <div className="relative z-10 flex flex-col gap-4">
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full w-fit">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#57ff8f]">
                          Upcoming Launch
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif-display tracking-tight leading-tight">
                        {launch.title}
                      </h3>
                      <p className="text-white/60 font-light leading-relaxed line-clamp-2 max-w-lg">
                        {launch.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                        Read more <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Search & Filter Bar */}
        <section className="mb-12 sticky top-24 z-40">
          <div className="bg-white/80 backdrop-blur-xl border border-black/5 p-4 rounded-[2rem] shadow-xl shadow-black/[0.02] flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20"
                size={18}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/5 rounded-full text-sm outline-none focus:ring-2 ring-[#16364d]/10 transition-all font-light"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              <Filter className="text-black/20 mr-2 flex-shrink-0" size={18} />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all",
                    selectedCategory === cat
                      ? "bg-[#16364d] text-white shadow-lg shadow-black/10"
                      : "bg-black/5 text-black/40 hover:bg-black/10",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((news, index) => (
                <motion.div
                  layout
                  key={news.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/news/${news.slug}`} className="group">
                    <div className="bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-widest uppercase text-[#16364d]">
                            {news.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col gap-4 flex-1">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-black/30 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} /> {news.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User size={12} /> {news.author}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#16364d] leading-tight group-hover:text-black transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-black/50 text-sm font-light leading-relaxed line-clamp-3">
                          {news.excerpt}
                        </p>
                        <div className="mt-auto pt-6 border-t border-black/[0.02]">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#16364d] group-hover:gap-4 flex items-center gap-2 transition-all">
                            Read full story <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredNews.length === 0 && (
            <div className="py-32 text-center text-black/30">
              <p className="text-xl font-light italic">
                No stories found matching your criteria.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

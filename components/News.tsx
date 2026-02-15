import { newsItems } from "@/constant";
import { NewsItem } from "@/type";

export const News = () => {
  return (
    <section id="news" className="py-24 px-6 bg-[#f4f1ea] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">
                  LATEST INSIGHTS
                </span>
                <div className="h-[1px] w-8 bg-black/10"></div>
              </div>
              <h2 className="italic text-4xl md:text-6xl font-serif-display leading-[0.9] tracking-[-0.06em] text-[#16364d]">
                The future, <br />
                <span className="italic">unfolding.</span>
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm font-semibold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-opacity w-fit text-[#16364d]"
            >
              Explore all stories
            </Link>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import Link from "next/link";

const NewsCard: React.FC<NewsItem> = ({ title, author, date, image, slug }) => (
  <Link
    href={`/news/${slug}`}
    className="group relative flex flex-col bg-[#ebe9e1] rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-500 border border-black/[0.03]"
  >
    <div className="p-4 pb-0">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.5] group-hover:grayscale-0"
        />
        {/* Subtle overlay for visual consistency with screenshot */}
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply pointer-events-none"></div>
      </div>
    </div>

    <div className="p-8 flex flex-col gap-4 flex-1">
      <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-black/50">
        <span>{author}</span>
        <span>—</span>
        <span>{date}</span>
      </div>

      <h3 className="text-2xl font-medium leading-[1.2] tracking-tight text-neutral-900 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>

      <div className="mt-auto flex items-end justify-between relative pt-8">
        <span className="text-sm font-medium text-black group-hover:opacity-60 transition-opacity">
          Read more
        </span>

        {/* The specific cutout button design from reference */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#f4f1ea] rounded-tl-[2.5rem] flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5 group-hover:scale-110 transition-transform">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

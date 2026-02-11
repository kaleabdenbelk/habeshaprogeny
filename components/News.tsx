import { newsItems } from "@/constant";
import { NewsItem } from "@/type";

export const News = () => {
  return (
    <section id="news" className="py-24 px-6 bg-[#f4f1ea] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight">News and insights</h2>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-6 mt-12 text-sm font-medium">
            <button className="text-black/20 hover:text-black transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex items-center gap-4">
              <span className="text-blue-600 border-b-2 border-blue-600 pb-0.5">1</span>
              <span className="text-black/40 hover:text-black cursor-pointer transition-colors">2</span>
            </div>
            <button className="text-black hover:text-blue-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsCard: React.FC<NewsItem> = ({ title, author, date, image }) => (
  <div className="group relative flex flex-col bg-[#ebe9e1] rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-500 border border-black/[0.03]">
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
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                 <path d="M5 12h14M12 5l7 7-7 7"/>
               </svg>
            </div>
        </div>
      </div>
    </div>
  </div>
);
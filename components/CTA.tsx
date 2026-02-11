
export const CTA = () => {
  return (
    <section className="py-40 px-6 overflow-hidden relative">
      {/* Decorative Gradient Overlays */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-10">
        <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-white/40">READY TO BEGIN?</span>
        
        <h2 className="text-6xl md:text-9xl text-white font-serif-display leading-[0.9] tracking-tighter">
          Build the <br />
          <span className="italic text-neutral-500">unimagined.</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Join thousands of pioneers leveraging Cohere to solve 
          complex problems and redefine what’s possible in AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <button className="bg-white text-black px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.15em] hover:scale-105 transition-transform shadow-2xl shadow-white/5">
            Get Started Now
          </button>
          <button className="border border-white/20 text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.15em] hover:bg-white/5 transition-colors">
            Read Documentation
          </button>
        </div>

        <div className="mt-16 flex items-center gap-8 text-white/20">
          <div className="h-[1px] w-12 bg-white/10"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase">Trusted by the best</span>
          <div className="h-[1px] w-12 bg-white/10"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
           {/* Placeholder Logo Silhouettes */}
           <div className="w-24 h-8 bg-white/20 rounded-md"></div>
           <div className="w-28 h-8 bg-white/20 rounded-md"></div>
           <div className="w-20 h-8 bg-white/20 rounded-md"></div>
           <div className="w-32 h-8 bg-white/20 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

"use client"
export const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-[#f4f1ea]/80 backdrop-blur-md border-b border-black/[0.03]">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={scrollToTop}>
        <div className="flex gap-1 group-hover:scale-110 transition-transform">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-pink-500"></div>
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
        </div>
        <span className="font-semibold text-xl tracking-tighter">cohere</span>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <NavLink label="Mission" href="#mission" />
        <NavLink label="Values" href="#values" />
        <NavLink label="Insights" href="#news" />
        <NavLink label="Community" href="#community" />
        <NavLink label="Projects" href="#projects" />
        <NavLink label="FAQ" href="#faq" />
      </div>

      <div className="flex items-center gap-6">
        <button className="hidden sm:block text-sm font-medium hover:opacity-70 transition-opacity">Sign in</button>
        <a 
          href="#contact"
          className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-black/5"
        >
          Request a demo
        </a>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a 
    href={href} 
    className="text-xs font-bold uppercase tracking-widest text-black/50 hover:text-black transition-colors"
  >
    {label}
  </a>
);
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-[#f4f1ea]/80 backdrop-blur-md border-b border-black/[0.03]">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={scrollToTop}
      >
        <Image src="/logoo.png" alt="Logo" width={45} height={45} />
        <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#16364d]">
          Habesha Progeny
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-8">
        <NavLink label="Mission" href="#mission" />
        <NavLink label="Values" href="#values" />
        <NavLink label="Insights" href="#news" />
        <NavLink label="Community" href="#community" />
        <NavLink label="Projects" href="#projects" />
        <NavLink label="FAQ" href="#faq" />
      </div>

      {/* Mobile Button */}
      <button
        className="lg:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-[2px] bg-black" />
        <span className="w-6 h-[2px] bg-black" />
        <span className="w-6 h-[2px] bg-black" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#f4f1ea] border-b border-black/[0.03] lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <NavLink label="Mission" href="#mission" onClick={() => setOpen(false)} />
              <NavLink label="Values" href="#values" onClick={() => setOpen(false)} />
              <NavLink label="Insights" href="#news" onClick={() => setOpen(false)} />
              <NavLink label="Community" href="#community" onClick={() => setOpen(false)} />
              <NavLink label="Projects" href="#projects" onClick={() => setOpen(false)} />
              <NavLink label="FAQ" href="#faq" onClick={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

type NavLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

const NavLink = ({ label, href, onClick }: NavLinkProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-sm font-semibold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
  >
    {label}
  </Link>
);

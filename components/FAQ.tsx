"use client"
import { faqs } from '@/constant';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:opacity-60 transition-opacity pr-8 text-[#16364d]">
          {question}
        </h3>
        <span className={`transform transition-transform duration-500 flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}
      >
        <p className="text-black/50 text-lg leading-relaxed max-w-3xl font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-32 px-6 bg-[#f4f1ea] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">KNOWLEDGE BASE</span>
              <div className="h-[1px] w-8 bg-black/10"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif-display leading-tight tracking-tight text-[#16364d]">
              Common <br />
              <span className="italic">Questions.</span>
            </h2>
            
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
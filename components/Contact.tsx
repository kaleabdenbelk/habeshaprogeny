"use client";

import { useState } from "react";

export const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const telegramUsername = "emnfswjus";

    // Build the message
    const text = `Hello, my name is ${fullName}.
Email: ${email}
Organization: ${organization}
Message: ${message}`;

    // Encode message for URL
    const encoded = encodeURIComponent(text);

    // Open Telegram
    window.open(`https://t.me/${telegramUsername}?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white border-y border-black/[0.03] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Title */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">GET IN TOUCH</span>
                <div className="h-[1px] w-8 bg-black/10"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif-display leading-tight tracking-tight text-[#16364d]">
                Connect with <br />
                <span className="italic">our team.</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-[#f4f1ea] p-10 md:p-16 rounded-[2.5rem] border border-black/[0.02]">
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors placeholder:text-black/10 text-lg"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@enterprise.com"
                    className="bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors placeholder:text-black/10 text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-black/30 uppercase">Organization</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors placeholder:text-black/10 text-lg"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-widest text-black/30 uppercase">What are you building?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="bg-transparent border-b border-black/10 py-3 focus:border-black outline-none transition-colors placeholder:text-black/10 text-lg resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button className="bg-[#16a34a] text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] w-fit shadow-xl shadow-black/5 mt-4">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

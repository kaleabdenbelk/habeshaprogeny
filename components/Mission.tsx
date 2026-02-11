
import { ParticleCanvas } from './ParticleCanvas';

export const Mission = () => {
  return (
    <section id="mission" className="py-24 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[600px] scroll-mt-24">
      <div className="flex flex-col gap-6">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-black/40">OUR MISSION</span>
        <h2 className="text-2xl md:text-3xl font-normal leading-snug max-w-lg">
          We believe AI's highest purpose is to enhance human wellbeing. 
          We're committed to realizing that potential by empowering businesses 
          to scale innovation, boost productivity, and drive progress that reaches everyone.
        </h2>
      </div>
      
      <div className="relative w-full h-[500px] overflow-visible">
        <div className="absolute inset-0 z-0 opacity-80 particle-container">
           <ParticleCanvas />
        </div>
      </div>
    </section>
  );
};
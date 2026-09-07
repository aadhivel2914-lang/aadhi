import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-28 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>05 // PRACTICAL EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              EXPERIENCE & INTERNSHIPS
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Hands-on software development, applied model training, computer vision pipelines, and system integration.
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experience.map((item, idx) => (
            <div
              key={idx}
              id={`experience-item-${idx}`}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080c14] border-2 border-cyan-400 shadow-[0_0_10px_#38bdf8] group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="rounded-2xl border border-slate-800 bg-[#0a0e18]/80 hover:border-cyan-500/40 hover:bg-[#0d1220] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl space-y-4">
                {/* Year & Location Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-sm font-mono text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-200 font-semibold">{item.company}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                    KEY MILESTONES & CONTRIBUTIONS
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {item.keyHighlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

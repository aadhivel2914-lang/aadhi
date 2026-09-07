import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="relative py-24 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              LEARNING JOURNEY & MILESTONES
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Chronological milestones in artificial intelligence, mathematics, computational systems, and verified credentials.
          </p>
        </div>

        {/* Learning Journey Timeline */}
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              id={`education-node-${idx}`}
              className="relative p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0a0e18]/80 hover:border-cyan-500/40 hover:bg-[#0c1220] backdrop-blur-xl transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cyan-400 font-bold block">{item.year}</span>
                    <span className="text-slate-400 text-[11px]">{item.status}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs">
                  {item.institution}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {item.degree}
                </h3>
                <div className="text-sm text-cyan-300 font-mono">
                  Major: {item.specialization}
                </div>

                {/* Focus Areas */}
                <div className="pt-3 border-t border-slate-800/60 space-y-2">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                    CORE COURSEWORK & DOMAIN MASTERY
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                    {item.focusAreas.map((focus, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Certifications Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/20 via-[#0a0f1d] to-cyan-950/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-indigo-400 uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>VERIFIED SPECIALIZATIONS & CERTIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200 font-mono"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

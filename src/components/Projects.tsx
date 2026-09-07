import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, AlertCircle, CheckCircle2, ShieldCheck, Scan } from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData.ts';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal.tsx';
import { CertificateScannerVisual } from './CertificateScannerVisual.tsx';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="relative py-28 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>04 // CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Production-grade case studies detailing algorithmic architecture, problems solved, tech stacks, and tangible outcomes.
          </p>
        </div>

        {/* Featured Flagship Highlight: AI Fake Certificate Detection */}
        {projects[0] && (
          <div className="mb-16 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-[#0c1220] via-[#090e18] to-[#070a12] p-6 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(56,189,248,0.1)] relative overflow-hidden">
            {/* Ambient corner light */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/90 border border-cyan-700/80 text-cyan-300 font-mono text-xs font-bold tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    FLAGSHIP CASE STUDY // {projects[0].num}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/60">
                    {projects[0].tamperConfidence}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-mono uppercase tracking-tight">
                    {projects[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                    {projects[0].tagline}
                  </p>
                </div>

                {/* Problem vs Solution Snip */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <span className="text-rose-400 font-bold block mb-1">THE PROBLEM:</span>
                    <span className="text-slate-300 font-sans">{projects[0].problem}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <span className="text-emerald-400 font-bold block mb-1">THE AI SOLUTION:</span>
                    <span className="text-slate-300 font-sans">{projects[0].solution}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {projects[0].technology.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#101726] border border-cyan-800/40 text-cyan-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action trigger */}
                <div className="pt-2">
                  <button
                    id="open-flagship-case-study"
                    onClick={() => setSelectedCaseStudy(projects[0])}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
                  >
                    <span>EXPLORE FULL CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Live Interactive Certificate Scanner Visual */}
              <div className="lg:col-span-6">
                <CertificateScannerVisual />
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid (Case Study Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map(project => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedCaseStudy(project)}
              data-cursor="view"
              className="project-card group rounded-2xl border border-slate-800 bg-[#0a0e18]/80 hover:border-cyan-500/50 hover:bg-[#0e1322] p-6 backdrop-blur-md transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-4">
                {/* Number & Type */}
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-cyan-400 font-bold tracking-wider">
                    // {project.num}
                  </span>
                  <span className="p-1 rounded-full bg-slate-900 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-white font-mono group-hover:text-cyan-200 transition-colors uppercase">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem Snip */}
                <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs">
                  <span className="text-[10px] text-slate-500 font-mono uppercase block mb-1">
                    CHALLENGE:
                  </span>
                  <p className="text-slate-300 font-sans line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technology.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technology.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.technology.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Contribution & Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500 text-[11px]">CASE STUDY</span>
                <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
                  <span>INSPECT</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};

import React from 'react';
import { ArrowDown, FileDown, Sparkles, Terminal, Activity, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';
import { IdentityCard } from './IdentityCard.tsx';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { personalInfo } = portfolioData;

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-command-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Dynamic Statement */}
          <div className="lg:col-span-7 space-y-7">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#0c121e]/80 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-mono text-xs tracking-wider text-cyan-300 uppercase font-semibold">
                {personalInfo.label}
              </span>
              <span className="text-slate-600">|</span>
              <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-400" />
                SYSTEM ONLINE
              </span>
            </div>

            {/* Large Name */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-mono uppercase">
                {personalInfo.name}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 rounded-full" />
            </div>

            {/* Dynamic Statement based on actual skills */}
            <div className="space-y-4 max-w-xl">
              <p className="text-2xl sm:text-3xl font-semibold text-slate-200 tracking-tight leading-snug">
                Building intelligent solutions where{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">
                  CODE
                </span>{' '}
                meets{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-200">
                  DATA.
                </span>
              </p>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
                {personalInfo.tagline} Focused on applied computer vision, automated document forensics, and deterministic machine learning pipelines.
              </p>
            </div>

            {/* Verified Capabilities Badges */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
                #ComputerVision
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
                #DeepLearning
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
                #FullStackReact
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
                #PythonPipelines
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-explore-work-btn"
                onClick={scrollToWork}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase border border-slate-700 hover:border-cyan-500/60 transition-all backdrop-blur-md cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>DOWNLOAD RESUME</span>
              </button>

              <button
                id="hero-open-cli-btn"
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-transparent hover:bg-slate-900/50 text-slate-400 hover:text-cyan-300 font-mono text-xs border border-transparent hover:border-slate-800 transition-all cursor-pointer"
                title="Launch Terminal"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">TERMINAL</span>
              </button>
            </div>
          </div>

          {/* Right Column: Digital Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <IdentityCard />
          </div>
        </div>
      </div>
    </section>
  );
};

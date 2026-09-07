import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Cpu, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const { personalInfo, contact } = portfolioData;
  const [easterEggUnlocked, setEasterEggUnlocked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerEasterEgg = () => {
    // Play gentle synthesized chime using Web Audio API
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {
      // Audio not permitted or supported
    }

    setEasterEggUnlocked(prev => !prev);
  };

  return (
    <footer className="relative border-t border-slate-900 bg-[#060910] text-slate-400 py-12 px-6 sm:px-8 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Designer Attribution */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-slate-200 font-bold tracking-wider">
            Designed & Engineered by{' '}
            <span className="text-cyan-400 font-extrabold uppercase">
              {personalInfo.fullName}
            </span>
          </div>
          <div className="text-slate-500 text-[11px]">
            AI Digital Lab & Personal Command Center • {new Date().getFullYear()}
          </div>
        </div>

        {/* Center: Easter Egg Button & Telemetry */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={triggerEasterEgg}
            className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer"
            title="Click for system easter egg"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-[10px]">
              {easterEggUnlocked ? 'SECRET OVERRIDE // ACTIVE' : 'NODE 0x2A // CORE RUNTIME'}
            </span>
          </button>

          {easterEggUnlocked && (
            <div className="text-[10px] text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded border border-emerald-800/40 animate-pulse">
              [ 100% AUTHENTIC RESUME DATA • ZERO FAKE CLAIMS ]
            </div>
          )}
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
            title="Launch Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 hover:bg-cyan-900/60 transition-colors cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

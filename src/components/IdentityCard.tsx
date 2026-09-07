import React, { useState, useRef } from 'react';
import { ShieldCheck, Cpu, Radio, Sparkles, Upload, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const IdentityCard: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { personalInfo, floatingKeywords } = portfolioData;

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhotoUrl(url);
    }
  };

  return (
    <div
      id="digital-identity-card"
      className="relative w-full max-w-md mx-auto group select-none"
      data-cursor="explore"
    >
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Glass HUD Container */}
      <div className="relative rounded-2xl border border-slate-700/60 bg-[#0c1018]/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
        {/* Top HUD Status Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-semibold tracking-wider">IDENTITY // VERIFIED</span>
          </div>
          <span className="text-cyan-400/90 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
            ID: AP-2026-AI
          </span>
        </div>

        {/* Center Profile Area with Orbital Animation */}
        <div className="relative my-8 flex items-center justify-center">
          {/* Orbital Outer Ring 1 */}
          <div className="absolute w-64 h-64 rounded-full border border-dashed border-cyan-500/20 animate-spin [animation-duration:30s] pointer-events-none" />

          {/* Orbital Outer Ring 2 with Radar Scanner */}
          <div className="absolute w-52 h-52 rounded-full border border-slate-700/50 pointer-events-none">
            <div className="absolute inset-0 rounded-full border-t border-cyan-400/80 animate-radar" />
          </div>

          {/* Floating Technology Badges around orbit */}
          {floatingKeywords.map((tech, idx) => {
            // Distribute points evenly along 360 degrees
            const total = floatingKeywords.length;
            const angle = (idx * (360 / total) * Math.PI) / 180;
            const radius = 108; // px from center
            const x = Math.round(Math.cos(angle) * radius);
            const y = Math.round(Math.sin(angle) * radius);

            return (
              <div
                key={tech}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className="absolute z-20 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0e1422]/90 border border-cyan-500/40 shadow-lg text-[10px] font-mono text-cyan-300 backdrop-blur-md hover:scale-110 hover:border-cyan-400 transition-transform cursor-default"
                title={`Verified Resume Skill: ${tech}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{tech}</span>
              </div>
            );
          })}

          {/* Core Profile Avatar Container */}
          <div className="relative z-10 w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-500 shadow-xl overflow-hidden group/avatar">
            <div className="w-full h-full rounded-full bg-[#090d15] overflow-hidden flex items-center justify-center relative">
              {/* Display photo from /assets/profile.jpg or uploaded preview */}
              <img
                src={customPhotoUrl || personalInfo.profileImage}
                alt={personalInfo.name}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-105 ${
                  imageError && !customPhotoUrl ? 'hidden' : 'block'
                }`}
              />

              {/* Fallback Digital Avatar if 1x1 / placeholder or load error */}
              {(imageError || !customPhotoUrl) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-[#0b101c] p-2 text-center">
                  <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center mb-1">
                    <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-200">
                    {personalInfo.name}
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400/90">
                    AI LAB // AVATAR
                  </span>
                </div>
              )}

              {/* Holographic Crosshair Overlay */}
              <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full pointer-events-none" />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400/60 pointer-events-none" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400/60 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Identity Details */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-[11px] font-mono text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI & DATA SCIENCE CANDIDATE</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white font-mono">
            {personalInfo.fullName}
          </h3>

          <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Telemetry Matrix Grid */}
        <div className="grid grid-cols-3 gap-2 pt-4 mt-5 border-t border-slate-800/80 font-mono text-[10px]">
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-slate-500">CORE FOCUS</div>
            <div className="text-slate-200 font-semibold mt-0.5">VISION & ML</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-slate-500">DEGREE YR</div>
            <div className="text-cyan-400 font-semibold mt-0.5">2022 — 2026</div>
          </div>
          <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-center">
            <div className="text-slate-500">LOCATION</div>
            <div className="text-slate-200 font-semibold mt-0.5">INDIA</div>
          </div>
        </div>

        {/* Custom Photo Upload Helper */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="text-[10px] text-slate-500">Photo: /public/assets/profile.jpg</span>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer hover:underline"
            title="Preview your custom photo in this session"
          >
            <Upload className="w-3 h-3" />
            <span>Test Photo</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleCustomUpload}
          />
        </div>
      </div>
    </div>
  );
};

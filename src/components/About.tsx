import React, { useState } from 'react';
import { GraduationCap, Target, Heart, Compass, Clock, Cpu, Sparkles, Layers, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string>('focus');
  const { personalInfo, aboutCards } = portfolioData;

  const cards = [
    {
      id: 'focus',
      icon: Target,
      tag: 'PILLARS',
      title: 'CORE FOCUS',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/40',
      bgColor: 'hover:border-cyan-400/60',
      content: (
        <div className="space-y-3">
          <p className="text-xs text-slate-300 font-medium">
            {aboutCards.focus.philosophy}
          </p>
          <ul className="space-y-1.5 text-xs text-slate-400">
            {aboutCards.focus.domains.map((domain, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{domain}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'education',
      icon: GraduationCap,
      tag: 'ACADEMIC',
      title: 'EDUCATION',
      color: 'text-sky-400',
      borderColor: 'border-sky-500/40',
      bgColor: 'hover:border-sky-400/60',
      content: (
        <div className="space-y-2 text-xs">
          <div className="font-semibold text-slate-200">
            {aboutCards.education.degree}
          </div>
          <div className="text-cyan-400 font-mono text-[11px]">
            {aboutCards.education.timeline}
          </div>
          <p className="text-slate-400 leading-relaxed">
            {aboutCards.education.field}
          </p>
          <div className="pt-1 text-[11px] text-slate-500 font-mono">
            {aboutCards.education.gradeNote}
          </div>
        </div>
      )
    },
    {
      id: 'interests',
      icon: Heart,
      tag: 'CURIOSITY',
      title: 'INTERESTS',
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/40',
      bgColor: 'hover:border-indigo-400/60',
      content: (
        <div className="space-y-2.5 text-xs">
          <div className="flex flex-wrap gap-1.5">
            {aboutCards.interests.topics.map((topic, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 font-mono text-[11px]"
              >
                {topic}
              </span>
            ))}
          </div>
          <p className="text-slate-400 text-[11px] pt-1 leading-relaxed">
            {aboutCards.interests.hobby}
          </p>
        </div>
      )
    },
    {
      id: 'career',
      icon: Compass,
      tag: 'TRAJECTORY',
      title: 'CAREER GOAL',
      color: 'text-teal-400',
      borderColor: 'border-teal-500/40',
      bgColor: 'hover:border-teal-400/60',
      content: (
        <div className="space-y-2.5 text-xs">
          <p className="text-slate-300 leading-relaxed">
            {aboutCards.careerGoal.summary}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {aboutCards.careerGoal.targetRoles.map((role, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-teal-950/40 border border-teal-800/40 text-teal-300 font-mono text-[11px]"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'status',
      icon: Clock,
      tag: 'OPPORTUNITY',
      title: 'CURRENT STATUS',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      bgColor: 'hover:border-emerald-400/60',
      content: (
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{aboutCards.currentStatus.availability}</span>
          </div>
          <p className="text-slate-400">
            Work Preference: <span className="text-slate-200 font-mono">{aboutCards.currentStatus.workMode}</span>
          </p>
          <div className="text-[11px] text-slate-500 font-mono">
            Active Cycle: {aboutCards.currentStatus.lastUpdated}
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>02 // PROFILE DASHBOARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              WHO IS {personalInfo.name}?
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Interactive identity matrix highlighting education, computational pillars, and applied research direction.
          </p>
        </div>

        {/* Dashboard Grid: Left Cards + Right Interactive Network Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards Grid (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map(card => {
              const Icon = card.icon;
              const isActive = activeCardId === card.id;

              return (
                <div
                  key={card.id}
                  id={`about-card-${card.id}`}
                  onClick={() => setActiveCardId(card.id)}
                  className={`relative p-5 rounded-xl border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                    isActive
                      ? `bg-[#0f1422] ${card.borderColor} shadow-[0_0_20px_rgba(56,189,248,0.15)] ring-1 ring-cyan-500/30`
                      : 'bg-[#090d16]/70 border-slate-800 hover:border-slate-700 hover:bg-[#0c111e]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg bg-slate-900/80 border border-slate-800 ${card.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                        {card.title}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {card.tag}
                    </span>
                  </div>

                  {card.content}
                </div>
              );
            })}
          </div>

          {/* Right Interactive Neural / Data Visualization Graphic (5 columns) */}
          <div className="lg:col-span-5 h-full">
            <div className="relative rounded-2xl border border-slate-800 bg-[#0a0e18]/80 backdrop-blur-xl p-6 shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              {/* Graphic Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>NEURAL GRAPH MATRIX</span>
                </div>
                <span className="text-[11px] text-slate-500">LIVE COUPLING</span>
              </div>

              {/* Animated Interactive SVG Node Network */}
              <div className="relative my-4 flex-1 flex items-center justify-center">
                <svg className="w-full h-64 overflow-visible" viewBox="0 0 400 300">
                  {/* Connection Lines */}
                  <line x1="200" y1="150" x2="80" y2="80" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="200" y1="150" x2="320" y2="70" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="200" y1="150" x2="100" y2="230" stroke="rgba(20, 184, 166, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="200" y1="150" x2="310" y2="220" stroke="rgba(244, 63, 94, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="80" y1="80" x2="320" y2="70" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                  <line x1="100" y1="230" x2="310" y2="220" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

                  {/* Pulsing signal rings from center */}
                  <circle cx="200" cy="150" r="45" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" className="animate-ping" style={{ animationDuration: '4s' }} />

                  {/* Peripheral Nodes */}
                  <g className="cursor-pointer group" onClick={() => setActiveCardId('focus')}>
                    <circle cx="80" cy="80" r="24" fill="#0d1424" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="80" y="84" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">VISION</text>
                  </g>

                  <g className="cursor-pointer group" onClick={() => setActiveCardId('education')}>
                    <circle cx="320" cy="70" r="26" fill="#0d1424" stroke="#6366f1" strokeWidth="1.5" />
                    <text x="320" y="74" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="monospace" fontWeight="bold">B.TECH</text>
                  </g>

                  <g className="cursor-pointer group" onClick={() => setActiveCardId('career')}>
                    <circle cx="100" cy="230" r="25" fill="#0d1424" stroke="#14b8a6" strokeWidth="1.5" />
                    <text x="100" y="234" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontFamily="monospace" fontWeight="bold">AI / ML</text>
                  </g>

                  <g className="cursor-pointer group" onClick={() => setActiveCardId('status')}>
                    <circle cx="310" cy="220" r="25" fill="#0d1424" stroke="#10b981" strokeWidth="1.5" />
                    <text x="310" y="224" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace" fontWeight="bold">ACTIVE</text>
                  </g>

                  {/* Center Master Node */}
                  <g className="cursor-pointer">
                    <circle cx="200" cy="150" r="34" fill="#080c14" stroke="#38bdf8" strokeWidth="2.5" />
                    <circle cx="200" cy="150" r="28" fill="rgba(56, 189, 248, 0.15)" />
                    <text x="200" y="148" textAnchor="middle" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">AADHI</text>
                    <text x="200" y="161" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace">CORE HUB</text>
                  </g>
                </svg>
              </div>

              {/* Graphic Footer Insight */}
              <div className="pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                <span>ACTIVE NODE:</span>
                <span className="text-cyan-300 uppercase font-bold tracking-wider">
                  [{activeCardId}]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

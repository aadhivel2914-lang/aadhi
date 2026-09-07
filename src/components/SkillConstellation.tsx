import React, { useState } from 'react';
import { Network, Sparkles, Layers, ArrowRight, Code2, Cpu, Globe, Wrench, CheckCircle2 } from 'lucide-react';
import { portfolioData, SkillNode } from '../data/portfolioData.ts';

export const SkillConstellation: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(skills.nodes[0]); // default to Python

  const categoryIcons: Record<string, React.ReactNode> = {
    'PROGRAMMING': <Code2 className="w-3.5 h-3.5" />,
    'AI / DATA': <Cpu className="w-3.5 h-3.5" />,
    'WEB': <Globe className="w-3.5 h-3.5" />,
    'TOOLS': <Wrench className="w-3.5 h-3.5" />
  };

  const categoryColors: Record<string, { badge: string; nodeStroke: string; text: string }> = {
    'PROGRAMMING': { badge: 'bg-cyan-950/60 text-cyan-300 border-cyan-800/60', nodeStroke: '#38bdf8', text: 'text-cyan-400' },
    'AI / DATA': { badge: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/60', nodeStroke: '#818cf8', text: 'text-indigo-400' },
    'WEB': { badge: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60', nodeStroke: '#34d399', text: 'text-emerald-400' },
    'TOOLS': { badge: 'bg-amber-950/60 text-amber-300 border-amber-800/60', nodeStroke: '#fbbf24', text: 'text-amber-400' }
  };

  const filteredNodes = activeCategory === 'ALL'
    ? skills.nodes
    : skills.nodes.filter(n => n.category === activeCategory);

  const isConnectedToSelected = (nodeId: string) => {
    if (!selectedSkill) return false;
    return (
      selectedSkill.id === nodeId ||
      selectedSkill.connections.includes(nodeId) ||
      skills.nodes.find(n => n.id === nodeId)?.connections.includes(selectedSkill.id)
    );
  };

  return (
    <section id="skills" className="relative py-28 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>03 // TECHNICAL CONSTELLATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              TECH STACK & ARCHITECTURE
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Interactive skill graph connecting foundational algorithms, machine learning models, and modern web systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('ALL')}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer border ${
              activeCategory === 'ALL'
                ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            ALL CAPABILITIES ({skills.nodes.length})
          </button>

          {skills.categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs transition-all cursor-pointer border ${
                  isActive
                    ? `${categoryColors[cat].badge} font-bold shadow-md`
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Main Constellation Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive Constellation Grid Canvas (7 columns) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#090d16]/80 backdrop-blur-xl p-6 relative overflow-hidden flex flex-col justify-between">
            {/* HUD Status Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 font-mono text-xs text-slate-400">
              <span className="flex items-center gap-2 text-slate-300">
                <Network className="w-4 h-4 text-cyan-400" />
                ACTIVE TOPOLOGY // CLICK ANY NODE
              </span>
              <span className="text-[11px] text-cyan-400">
                CONNECTED TO: {selectedSkill ? selectedSkill.name : 'NONE'}
              </span>
            </div>

            {/* Constellation Nodes Interactive Grid */}
            <div className="relative py-8 min-h-[360px] flex items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
                {filteredNodes.map(node => {
                  const isSelected = selectedSkill?.id === node.id;
                  const isConnected = isConnectedToSelected(node.id);
                  const colors = categoryColors[node.category];

                  return (
                    <button
                      key={node.id}
                      id={`skill-node-${node.id}`}
                      onClick={() => setSelectedSkill(node)}
                      className={`relative p-3.5 rounded-xl border font-mono text-left transition-all duration-300 cursor-pointer group ${
                        isSelected
                          ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.25)] ring-1 ring-cyan-400 scale-105 z-10'
                          : isConnected
                          ? 'bg-[#0d1322] border-cyan-500/40 shadow-sm'
                          : 'bg-[#0b0f19]/80 border-slate-800/90 opacity-70 hover:opacity-100 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      {/* Live pulse if connected or selected */}
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                      )}

                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-1">
                        {categoryIcons[node.category]}
                        <span className="truncate">{node.category}</span>
                      </div>

                      <div className={`text-sm font-bold tracking-wide ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {node.name}
                      </div>

                      <div className="text-[10px] text-slate-400 mt-1 truncate">
                        {node.level}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Constellation Hint Footer */}
            <div className="pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-500 flex items-center justify-between">
              <span>ACTIVE COUPLING: DYNAMIC SVG MESH</span>
              <span className="text-cyan-400/80">NO ESTIMATED / FAKE % BARS</span>
            </div>
          </div>

          {/* Selected Skill Detail Inspector (5 columns) */}
          <div className="lg:col-span-5">
            {selectedSkill ? (
              <div
                id="skill-inspector-panel"
                className="h-full rounded-2xl border border-cyan-500/30 bg-[#0b0f1a]/95 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Category Pill & Level */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${categoryColors[selectedSkill.category].badge}`}>
                      {selectedSkill.category}
                    </span>
                    <span className="font-mono text-xs text-cyan-400 font-semibold">
                      {selectedSkill.level}
                    </span>
                  </div>

                  {/* Skill Title */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-white font-mono">
                      {selectedSkill.name}
                    </h3>
                    <div className="h-0.5 w-16 bg-cyan-400" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedSkill.description}
                  </p>

                  {/* Related Sub-Technologies */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Associated Sub-Technologies & Workflows
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.related.map((rel, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                        >
                          {rel}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connected Nodes in Constellation */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Networked Nodes in Graph
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.connections.map(connId => {
                        const targetNode = skills.nodes.find(n => n.id === connId);
                        if (!targetNode) return null;

                        return (
                          <button
                            key={connId}
                            onClick={() => setSelectedSkill(targetNode)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
                          >
                            <span>{targetNode.name}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Note */}
                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Extracted directly from verified projects & coursework</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X, ExternalLink, Github, Cpu, ShieldCheck, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData.ts';
import { CertificateScannerVisual } from './CertificateScannerVisual.tsx';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#04060b]/90 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-slate-700/80 bg-[#0a0e18] shadow-2xl p-6 sm:p-8 my-auto overflow-hidden font-mono"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-bold">
            CASE STUDY // {project.num}
          </span>
          {project.isFeaturedAi && (
            <span className="px-2.5 py-1 rounded bg-indigo-950/80 border border-indigo-800 text-indigo-300 text-xs font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              SPECIAL AI & VISION FOCUS
            </span>
          )}
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* If AI Fake Certificate Detection -> Show the Interactive Scanner Visual */}
        {project.isFeaturedAi ? (
          <div className="mb-8">
            <CertificateScannerVisual />
          </div>
        ) : (
          /* Large Visual Card for Other Projects */
          <div className="mb-8 p-6 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <div className="space-y-2">
              <div className="text-xs text-cyan-400">ARCHITECTURAL SYSTEM DIAGRAM</div>
              <div className="text-sm text-slate-300 font-sans">
                End-to-end computational pipeline from ingestion, feature transformation, model inference to reactive dashboard telemetry.
              </div>
            </div>
            <Cpu className="w-12 h-12 text-slate-600 hidden sm:block" />
          </div>
        )}

        {/* Case Study Structured Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          {/* Problem */}
          <div className="space-y-2 p-4 rounded-xl bg-[#0d121f] border border-slate-800">
            <div className="text-xs text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>THE PROBLEM</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2 p-4 rounded-xl bg-[#0d121f] border border-slate-800">
            <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE SOLUTION</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* My Contribution */}
          <div className="space-y-2 p-4 rounded-xl bg-[#0d121f] border border-slate-800">
            <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
              MY CONTRIBUTION & LEADERSHIP
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Outcome */}
          <div className="space-y-2 p-4 rounded-xl bg-[#0d121f] border border-slate-800">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
              MEASURABLE OUTCOME
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
          <div className="text-xs text-slate-400 uppercase">TECH STACK DEPLOYED</div>
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GITHUB REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-colors cursor-pointer"
          >
            CLOSE CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, CheckCircle2, ChevronRight, FastForward } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete, forceShow = false }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const steps = [
    { label: 'INITIALIZING PERSONAL PORTFOLIO...', detail: 'Kernel v4.19 / Loading Aadhipradhap Digital Workspace' },
    { label: 'LOADING EXPERIENCE...', detail: 'AI & Data Science Lab Work • Predictive Pipelines' },
    { label: 'LOADING PROJECTS...', detail: 'AI Fake Certificate Detection • Smart Vision Engines' },
    { label: 'LOADING SKILLS...', detail: 'Python • Deep Learning • Computer Vision • React' },
    { label: 'SYSTEM READY.', detail: 'Access Granted • Launching Command Center' }
  ];

  useEffect(() => {
    // Check if user already saw intro and not forced
    if (!forceShow) {
      const hasSeen = localStorage.getItem('aadhipradhap_portfolio_intro_seen');
      if (hasSeen === 'true') {
        onComplete();
        return;
      }
    }

    // Step timer sequence
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setTimeout(() => {
            handleFinish();
          }, 800);
          return prev;
        }
      });
    }, 700);

    // Progress bar ticker
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 90);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [forceShow]);

  const handleFinish = () => {
    try {
      localStorage.setItem('aadhipradhap_portfolio_intro_seen', 'true');
    } catch {
      // Ignore localStorage errors in sandboxed iframes
    }
    setIsSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  if (isSkipped) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="system-intro-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06080d] text-slate-100 p-6 select-none"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-command-grid opacity-30 pointer-events-none" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Skip button in top right */}
        <button
          id="skip-intro-button"
          onClick={handleFinish}
          className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800 text-xs text-slate-400 hover:text-cyan-300 transition-all cursor-pointer backdrop-blur-md"
        >
          <span>Skip Intro (ESC)</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>

        {/* Central Terminal Box */}
        <div className="w-full max-w-lg rounded-xl border border-slate-800 bg-[#0c1018]/90 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                AADHIPRADHAP_SYS_INIT.sh
              </span>
            </div>
            <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
              BOOT {Math.min(100, Math.round(progress))}%
            </span>
          </div>

          {/* Console Output Sequence */}
          <div className="space-y-2.5 font-mono text-xs min-h-[160px]">
            {steps.map((step, idx) => {
              const isPast = currentStep > idx;
              const isCurrent = currentStep === idx;
              const isPending = currentStep < idx;

              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 transition-all duration-300 ${
                    isPending ? 'opacity-20 translate-y-1' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <div className="mt-0.5">
                    {isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : isCurrent ? (
                      <span className="inline-block w-3.5 h-3.5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span
                        className={`${
                          isCurrent
                            ? 'text-cyan-300 font-semibold tracking-wide'
                            : isPast
                            ? 'text-slate-300'
                            : 'text-slate-500'
                        }`}
                      >
                        {step.label}
                      </span>
                      {isPast && <span className="text-[10px] text-emerald-400/90 font-mono">OK</span>}
                    </div>
                    {(isCurrent || isPast) && (
                      <p className="text-[11px] text-slate-500 mt-0.5">{step.detail}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Progress Bar */}
          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-cyan-400" />
                AI & DATA SCIENCE WORKSPACE
              </span>
              <span>2026 RELEASE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

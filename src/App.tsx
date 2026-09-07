import React, { useState } from 'react';
import { IntroLoader } from './components/IntroLoader.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { SkillConstellation } from './components/SkillConstellation.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Education } from './components/Education.tsx';
import { ResumeSection } from './components/ResumeSection.tsx';
import { PortfolioAI } from './components/PortfolioAI.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { AITerminal } from './components/AITerminal.tsx';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06090f] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Intro System Initialization Animation */}
      <IntroLoader />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation Dock */}
      <Navigation
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(prev => !prev)}
      />

      {/* Main Command Center Stream */}
      <main className="relative z-10">
        {/* Section 01: Asymmetric Hero */}
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Section 02: About / Who Is Aadhipradhap */}
        <About />

        {/* Section 03: Technology Constellation */}
        <SkillConstellation />

        {/* Section 04: Selected Work / Case Studies + AI Scanner */}
        <Projects />

        {/* Section 05: Experience & Internships Timeline */}
        <Experience />

        {/* Section 06: Academic Journey & Certifications */}
        <Education />

        {/* Section 07: Dedicated Resume Section & Modal */}
        <ResumeSection
          isModalOpen={isResumeModalOpen}
          onOpenModal={() => setIsResumeModalOpen(true)}
          onCloseModal={() => setIsResumeModalOpen(false)}
        />

        {/* Section 08: Ask My Portfolio (AI Knowledge Engine) */}
        <PortfolioAI />

        {/* Section 09: Contact / Transmission Channel */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Floating Personal AI Terminal Overlay (Toggleable from anywhere) */}
      {isTerminalOpen && (
        <AITerminal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          isFloating={true}
        />
      )}

      {/* Floating Bottom Quick Launcher for Terminal if closed */}
      {!isTerminalOpen && (
        <button
          id="quick-terminal-launcher"
          onClick={() => setIsTerminalOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#0a0e18]/90 hover:bg-[#12192c] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] backdrop-blur-lg transition-all duration-300 group cursor-pointer"
          title="Open AADHIPRADHAP_AI Terminal"
          aria-label="Open Terminal"
        >
          <TerminalIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="sr-only">Open Terminal</span>
        </button>
      )}
    </div>
  );
}

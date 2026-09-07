import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, Menu, X, FileText, ChevronUp } from 'lucide-react';

interface NavigationProps {
  onOpenTerminal?: () => void;
  onOpenResume?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', num: '01', label: 'HOME' },
    { id: 'about', num: '02', label: 'ABOUT' },
    { id: 'skills', num: '03', label: 'SKILLS' },
    { id: 'work', num: '04', label: 'WORK' },
    { id: 'experience', num: '05', label: 'EXPERIENCE' },
    { id: 'contact', num: '06', label: 'CONTACT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sectionElements = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet Floating Dock */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-full max-w-4xl px-4 pointer-events-none">
        <nav
          id="floating-navigation-dock"
          className={`pointer-events-auto mx-auto flex items-center justify-between px-3 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0a0d16]/85 border-slate-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl'
              : 'bg-[#0a0d16]/60 border-slate-800/80 shadow-lg backdrop-blur-md'
          }`}
        >
          {/* Identity Monogram */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 pl-2 pr-3 py-1 group cursor-pointer"
            title="Aadhipradhap Command Center"
          >
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-[11px] font-mono font-bold text-white shadow-sm group-hover:scale-105 transition-transform">
              AP
            </div>
            <span className="hidden sm:inline font-mono text-xs font-semibold tracking-wider text-slate-300 group-hover:text-cyan-300 transition-colors">
              AADHIPRADHAP
            </span>
          </button>

          {/* Center Navigation Links (Hidden on small mobile) */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800/60">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-cyan-950/60 shadow-sm border border-cyan-800/60'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="opacity-40 text-[10px] mr-1">{item.num}</span>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Command Quick Actions */}
          <div className="flex items-center gap-1.5">
            {onOpenTerminal && (
              <button
                id="dock-terminal-btn"
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-800/60 hover:bg-slate-700/60 text-slate-300 hover:text-cyan-300 text-xs font-mono border border-slate-700/40 transition-all cursor-pointer"
                title="Launch AADHIPRADHAP_AI Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden lg:inline text-[11px]">CLI</span>
              </button>
            )}

            <button
              id="dock-ask-ai-btn"
              onClick={() => scrollTo('ask-portfolio')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-200 hover:text-white text-xs font-mono border border-indigo-800/40 transition-all cursor-pointer"
              title="Ask My Portfolio"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden lg:inline text-[11px]">Q&A</span>
            </button>

            {onOpenResume && (
              <button
                id="dock-resume-btn"
                onClick={onOpenResume}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-200 text-xs font-mono border border-cyan-800/40 transition-all cursor-pointer"
                title="View Resume"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px]">CV</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-4 top-20 z-40 p-4 rounded-2xl bg-[#0b0e17]/95 border border-slate-800 shadow-2xl backdrop-blur-xl md:hidden flex flex-col gap-2"
        >
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-800/60 text-xs font-mono text-slate-400">
            <span>COMMAND DOCK</span>
            <span className="text-cyan-400">SELECT DESTINATION</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-left transition-all ${
                    isActive
                      ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/60 font-semibold'
                      : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span className="text-[10px] text-cyan-400/80">{item.num}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pt-2 mt-1 border-t border-slate-800/60">
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-800/80 text-xs font-mono text-cyan-300 border border-slate-700/60"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>TERMINAL</span>
              </button>
            )}
            {onOpenResume && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-cyan-950/70 text-xs font-mono text-cyan-200 border border-cyan-800/60"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>RESUME</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

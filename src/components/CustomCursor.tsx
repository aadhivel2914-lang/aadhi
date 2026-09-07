import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports fine hover (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      setIsEnabled(false);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Inspect target element for cursor hints
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="view"]') || target.closest('.project-card');
      const linkEl = target.closest('[data-cursor="open"]') || target.closest('a');
      const imageEl = target.closest('[data-cursor="explore"]') || target.closest('img') || target.closest('.image-card');
      const buttonEl = target.closest('button') || target.closest('.cursor-pointer');

      if (projectEl) {
        setCursorText('VIEW');
        setIsHovered(true);
      } else if (linkEl) {
        setCursorText('OPEN');
        setIsHovered(true);
      } else if (imageEl) {
        setCursorText('EXPLORE');
        setIsHovered(true);
      } else if (buttonEl) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop for ring
    const animate = () => {
      const ease = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isEnabled || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Central Sharp Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-cyan-400 mix-blend-screen shadow-[0_0_8px_#38bdf8] pointer-events-none transition-transform duration-75 ease-out"
      />

      {/* Orbiting Ring / Badge */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 flex items-center justify-center rounded-full pointer-events-none transition-all duration-200 ${
          cursorText
            ? 'w-16 h-16 -ml-8 -mt-8 bg-cyan-500/20 border border-cyan-400/80 backdrop-blur-xs scale-100'
            : isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-white/5 border border-cyan-400/60 scale-110'
            : 'w-8 h-8 -ml-4 -mt-4 border border-slate-500/40 opacity-70'
        }`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold tracking-widest text-cyan-200 animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

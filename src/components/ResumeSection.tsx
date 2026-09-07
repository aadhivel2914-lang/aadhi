import React, { useState } from 'react';
import { FileText, Download, Eye, CheckCircle2, ExternalLink, X, Printer, Shield, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

interface ResumeSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  isModalOpen: externalModalOpen,
  onCloseModal,
  onOpenModal
}) => {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const { personalInfo, education, skills, projects, experience, certifications } = portfolioData;

  const isModalOpen = externalModalOpen !== undefined ? externalModalOpen : internalModalOpen;
  const handleOpen = onOpenModal || (() => setInternalModalOpen(true));
  const handleClose = onCloseModal || (() => setInternalModalOpen(false));

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="relative py-24 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              THE FULL PROFILE
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Verified resume synopsis encompassing education, machine learning competencies, case studies, and career objectives.
          </p>
        </div>

        {/* Beautiful Resume Preview Card */}
        <div className="rounded-3xl border border-slate-700/80 bg-gradient-to-b from-[#0b101c] to-[#070a12] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Resume Document Mock Visual */}
            <div className="lg:col-span-6">
              <div
                onClick={handleOpen}
                className="group relative aspect-[1/1.3] max-w-sm mx-auto rounded-xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-2xl hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 cursor-pointer overflow-hidden font-mono"
              >
                {/* Holographic Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] text-slate-400">
                  <span className="text-cyan-400 font-bold">{personalInfo.name.toUpperCase()} // CV</span>
                  <span>PDF 1.4</span>
                </div>

                {/* Simulated Document Preview */}
                <div className="mt-4 space-y-3 text-[9px] text-slate-400">
                  <div className="text-xs font-bold text-slate-200">
                    {personalInfo.fullName}
                  </div>
                  <div className="text-cyan-300 text-[10px]">
                    {personalInfo.title}
                  </div>
                  <div className="text-slate-500 truncate">
                    {personalInfo.email} • {personalInfo.location}
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <div className="font-bold text-slate-300 uppercase text-[9px]">OBJECTIVE</div>
                    <p className="text-slate-400 leading-tight line-clamp-2">
                      {personalInfo.careerObjective}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <div className="font-bold text-slate-300 uppercase text-[9px]">EDUCATION</div>
                    <div className="text-slate-200">{education[0]?.degree}</div>
                    <div className="text-slate-500">{education[0]?.year}</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1">
                    <div className="font-bold text-slate-300 uppercase text-[9px]">PROJECT HIGHLIGHT</div>
                    <div className="text-cyan-300 font-semibold">{projects[0]?.title}</div>
                    <p className="text-slate-500 line-clamp-2">{projects[0]?.tagline}</p>
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-cyan-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-cyan-300 backdrop-blur-xs">
                  <Eye className="w-8 h-8 mb-2 animate-pulse" />
                  <span className="font-mono text-xs font-bold tracking-wider">CLICK TO VIEW FULL CV</span>
                </div>
              </div>
            </div>

            {/* Right Information & Action Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>VERIFIED RECRUITMENT ASSET</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight uppercase">
                  READY FOR REVIEW
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  Directly compiled from authentic academic achievements, verified project repositories, and machine learning models.
                </p>
              </div>

              {/* Verified Checklist */}
              <div className="space-y-2 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Artificial Intelligence & Data Science Coursework</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Computer Vision & Deep Learning Project Artifacts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Contact & Direct Social Repository Links</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  id="view-resume-modal-btn"
                  onClick={handleOpen}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW RESUME</span>
                </button>

                <a
                  id="download-resume-pdf-btn"
                  href={personalInfo.resumeFile}
                  download="Aadhipradhap_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider uppercase border border-slate-700 hover:border-cyan-500/60 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>

              {/* Configuration File Path Reference Note */}
              <div className="pt-2 text-[11px] font-mono text-slate-500">
                <span>Direct PDF storage: </span>
                <span className="text-cyan-400/80">/public/assets/resume.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Resume Viewer Modal */}
      {isModalOpen && (
        <div
          id="resume-full-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#04060b]/90 backdrop-blur-xl overflow-y-auto"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-slate-700/80 bg-[#090d16] shadow-2xl p-6 sm:p-10 my-auto overflow-hidden font-mono"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Controls Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>AADHIPRADHAP_RESUME_VERIFIED.pdf</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <a
                  href={personalInfo.resumeFile}
                  download="Aadhipradhap_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD</span>
                </a>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document Body View */}
            <div className="bg-[#0e1422] p-6 sm:p-8 rounded-xl border border-slate-800 text-slate-300 space-y-6 max-h-[70vh] overflow-y-auto font-sans">
              {/* Header */}
              <div className="border-b border-slate-800 pb-4 text-center space-y-1 font-mono">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personalInfo.fullName}
                </h1>
                <div className="text-cyan-400 text-sm font-semibold">
                  {personalInfo.title}
                </div>
                <div className="text-xs text-slate-400 flex flex-wrap justify-center gap-3 pt-1">
                  <span>{personalInfo.email}</span>
                  <span>•</span>
                  <span>{personalInfo.location}</span>
                  <span>•</span>
                  <span>GitHub: aadhipradhap</span>
                </div>
              </div>

              {/* Career Objective */}
              <div className="space-y-1">
                <h2 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase border-b border-slate-800 pb-1">
                  CAREER OBJECTIVE
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  {personalInfo.careerObjective}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase border-b border-slate-800 pb-1">
                  EDUCATION
                </h2>
                {education.map((item, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <div className="flex justify-between font-semibold text-slate-200">
                      <span>{item.degree} — {item.specialization}</span>
                      <span className="font-mono text-cyan-400">{item.year}</span>
                    </div>
                    <div className="text-slate-400">{item.institution} ({item.status})</div>
                  </div>
                ))}
              </div>

              {/* Technical Skills */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase border-b border-slate-800 pb-1">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-200 font-mono">Programming: </span>
                    <span className="text-slate-400">Python, C, C++, JavaScript, TypeScript, SQL</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200 font-mono">AI / Data: </span>
                    <span className="text-slate-400">Machine Learning, Deep Learning, OpenCV, Scikit-Learn, Pandas</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200 font-mono">Web Engineering: </span>
                    <span className="text-slate-400">React, HTML5, CSS3, Tailwind CSS, Node.js</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-200 font-mono">Developer Tools: </span>
                    <span className="text-slate-400">Git, GitHub, VS Code, Linux, Jupyter, Colab</span>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase border-b border-slate-800 pb-1">
                  KEY PROJECTS
                </h2>
                {projects.map(proj => (
                  <div key={proj.id} className="text-xs space-y-1">
                    <div className="flex justify-between font-semibold text-slate-200">
                      <span>{proj.title}</span>
                      <span className="font-mono text-cyan-400">{proj.num}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed font-sans">{proj.tagline}</p>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Tech: {proj.technology.join(', ')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase border-b border-slate-800 pb-1">
                  EXPERIENCE & INTERNSHIP
                </h2>
                {experience.map((exp, idx) => (
                  <div key={idx} className="text-xs space-y-1">
                    <div className="flex justify-between font-semibold text-slate-200">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="font-mono text-cyan-400">{exp.year}</span>
                    </div>
                    <p className="text-slate-400 font-sans">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

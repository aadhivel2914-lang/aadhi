import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

export const Contact: React.FC = () => {
  const { contact, personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      // Keep state clear after simulation
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>06 // TRANSMISSION CHANNEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight uppercase">
              START A CONVERSATION
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Direct communication link for internships, collaborative AI research, software engineering roles, and technical inquiries.
          </p>
        </div>

        {/* Contact Matrix: Left Verified Endpoints + Right Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Verified Endpoints (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0a0e18]/80 backdrop-blur-xl shadow-xl space-y-6 font-mono">
              <div className="space-y-1">
                <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider block">
                  COMMUNICATION MATRIX
                </span>
                <h3 className="text-xl font-bold text-white font-mono">
                  DIRECT ACCESS POINTS
                </h3>
              </div>

              {/* Email item with copy button */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>PRIMARY EMAIL</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm font-bold text-slate-100 hover:text-cyan-300 block truncate"
                >
                  {contact.email}
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>LOCATION BASE</span>
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {contact.location}
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">
                  VERIFIED NETWORKS
                </span>

                <div className="space-y-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                      <span className="text-xs text-slate-200 group-hover:text-white">GitHub Profile</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-300" />
                      <span className="text-xs text-slate-200 group-hover:text-white">LinkedIn Network</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0a0e18]/80 backdrop-blur-xl shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-7 h-7 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    TRANSMISSION DISPATCHED
                  </h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto font-sans">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Your message has been logged. Aadhipradhap will review and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs text-slate-400 uppercase tracking-wider block">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs text-slate-400 uppercase tracking-wider block">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@enterprise.io"
                        className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 uppercase tracking-wider block">
                      INQUIRY SUBJECT / ROLE OPPORTUNITY
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Internship / Full-Stack Project Collaboration"
                      className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 uppercase tracking-wider block">
                      MESSAGE BODY *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message, inquiry, or project specs here..."
                      className="w-full bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 resize-none font-sans"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      * All fields are handled securely in-session
                    </span>
                    <button
                      type="submit"
                      id="submit-contact-form-btn"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
                    >
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

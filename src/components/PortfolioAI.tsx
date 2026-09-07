import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, CheckCircle2, CornerDownLeft, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

interface QAHistoryItem {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const PortfolioAI: React.FC = () => {
  const { predefinedQuestions, personalInfo, skills, projects, education, experience, contact } = portfolioData;

  const [customQuestion, setCustomQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [qaList, setQaList] = useState<QAHistoryItem[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: `Hello! I am Aadhipradhap's portfolio intelligence engine. Ask me anything about his technical stack, machine learning projects, educational background, or availability for internships!`,
      timestamp: 'ONLINE'
    }
  ]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('tech') || q.includes('skill') || q.includes('language') || q.includes('python') || q.includes('code')) {
      return `Aadhipradhap specializes in Python, C, C++, JavaScript, TypeScript, and SQL. His AI & data science toolkit includes Machine Learning, Deep Learning, OpenCV for Computer Vision, Scikit-Learn, Pandas, and NumPy. On the web side, he engineers with React, Tailwind CSS, HTML5, CSS3, and Node.js.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('portfolio') || q.includes('case stud')) {
      return `He has engineered 4 primary projects: (1) AI Fake Certificate Detection (deep learning & forensic computer vision inspection), (2) Data-Driven Predictive Analytics Engine (multivariate ML classification), (3) Smart Vision Object Classifier (real-time CNN inference), and (4) this Personal Digital Command Center.`;
    }

    if (q.includes('cert') || q.includes('fake') || q.includes('detect') || q.includes('forensic')) {
      return `The AI Fake Certificate Detection system is his flagship project! It scans certificates using computer vision and deep learning to spot manipulated fonts, irregular noise textures, altered stamps, and cross-references digital hashes to determine document authenticity.`;
    }

    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('school')) {
      return `He is pursuing a Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science (2022–2026), focusing on deep neural networks, pattern recognition, algorithmic analysis, and statistical data modeling.`;
    }

    if (q.includes('experience') || q.includes('intern') || q.includes('job') || q.includes('work')) {
      return `Aadhipradhap has worked as an AI & Data Science Trainee / Intern, where he built image preprocessing pipelines for forensic analysis, conducted model evaluation with cross-validation, and linked ML inference feeds with modern web applications.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('linkedin')) {
      return `You can reach him directly at ${contact.email}, view his repositories at ${contact.github}, or connect on LinkedIn at ${contact.linkedin}. He is actively open to internships and software engineering opportunities!`;
    }

    if (q.includes('where') || q.includes('location') || q.includes('city') || q.includes('relocat')) {
      return `Aadhipradhap is based in India and is open to remote roles as well as on-site / hybrid relocation opportunities for software engineering and AI positions.`;
    }

    // Default intelligent synthesis
    return `Based on his resume, Aadhipradhap is an AI & Data Science Developer dedicated to building intelligent solutions where code meets data. Feel free to ask about his specific skills in Python/React, his Fake Certificate Detection system, or his education!`;
  };

  const handleAsk = (questionText: string) => {
    const text = questionText.trim();
    if (!text) return;

    const userMsg: QAHistoryItem = {
      id: String(Date.now()),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setQaList(prev => [...prev, userMsg]);
    setCustomQuestion('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateAnswer(text);
      const botMsg: QAHistoryItem = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setQaList(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <section id="ask-portfolio" className="relative py-24 px-6 sm:px-8 border-t border-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>INTELLIGENT KNOWLEDGE SYNTHESIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight uppercase">
            ASK MY PORTFOLIO
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto font-mono">
            Query Aadhipradhap's technical qualifications, project architecture, or career trajectory with instantaneous local intelligence.
          </p>
        </div>

        {/* Predefined Question Chips */}
        <div className="mb-6 space-y-2">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block text-center">
            RECOMMENDED INQUIRIES
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {predefinedQuestions.map(item => (
              <button
                key={item.id}
                onClick={() => handleAsk(item.question)}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-[#121829] text-xs font-mono text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm"
              >
                {item.question}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Chat Console Window */}
        <div className="rounded-2xl border border-slate-800 bg-[#090d16]/90 backdrop-blur-xl shadow-2xl p-6 overflow-hidden">
          {/* Messages Feed */}
          <div className="space-y-4 min-h-[220px] max-h-[360px] overflow-y-auto pr-2">
            {qaList.map(item => (
              <div
                key={item.id}
                className={`flex items-start gap-3 ${
                  item.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {item.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-700/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-indigo-400" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    item.sender === 'user'
                      ? 'bg-cyan-950/80 border border-cyan-700/80 text-cyan-100 font-mono'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-300 font-sans'
                  }`}
                >
                  <p>{item.text}</p>
                  <span className="block text-[10px] text-slate-500 mt-1 text-right font-mono">
                    {item.timestamp}
                  </span>
                </div>

                {item.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-700/60 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 pl-10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Synthesizing portfolio records...</span>
              </div>
            )}
          </div>

          {/* Prompt Input Box */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleAsk(customQuestion);
            }}
            className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2"
          >
            <input
              type="text"
              value={customQuestion}
              onChange={e => setCustomQuestion(e.target.value)}
              placeholder="Ask a question (e.g. 'What ML algorithms has he used?')..."
              className="flex-1 bg-slate-900/70 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-mono"
            />
            <button
              type="submit"
              disabled={!customQuestion.trim() || isTyping}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>ASK</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

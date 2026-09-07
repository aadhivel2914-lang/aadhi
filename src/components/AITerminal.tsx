import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, X, Minus, Square, Trash2, Cpu, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.ts';

interface TerminalMessage {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  content: string | React.ReactNode;
}

interface AITerminalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isFloating?: boolean;
}

export const AITerminal: React.FC<AITerminalProps> = ({
  isOpen = true,
  onClose,
  isFloating = false
}) => {
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const initialWelcome: TerminalMessage[] = [
    {
      id: 'welcome-1',
      type: 'system',
      content: `AADHIPRADHAP_AI (v2.6.0-prod) — AI & DATA SCIENCE DIGITAL WORKSPACE`
    },
    {
      id: 'welcome-2',
      type: 'system',
      content: `System ready. Type "help" to view available diagnostic commands.`
    }
  ];

  const [messages, setMessages] = useState<TerminalMessage[]>(initialWelcome);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    // Add to history
    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    // Append user input line
    const userMsg: TerminalMessage = {
      id: String(Date.now()),
      type: 'input',
      content: cmd
    };

    let responseContent: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        responseContent = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-cyan-400 font-bold">SYSTEM DIAGNOSTIC COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] font-mono">
              <div><span className="text-cyan-300 font-semibold">«about»</span> — Professional summary & identity</div>
              <div><span className="text-cyan-300 font-semibold">«skills»</span> — Verified technical capabilities</div>
              <div><span className="text-cyan-300 font-semibold">«projects»</span> — Production case studies</div>
              <div><span className="text-cyan-300 font-semibold">«education»</span> — Degree & academic path</div>
              <div><span className="text-cyan-300 font-semibold">«experience»</span> — Internships & lab milestones</div>
              <div><span className="text-cyan-300 font-semibold">«contact»</span> — Communication endpoints</div>
              <div><span className="text-cyan-300 font-semibold">«resume»</span> — Downloadable CV information</div>
              <div><span className="text-cyan-300 font-semibold">«scan»</span> — AI Certificate forensic scanner</div>
              <div><span className="text-cyan-300 font-semibold">«clear»</span> — Reset console output buffer</div>
            </div>
          </div>
        );
        break;

      case 'about':
        responseContent = (
          <div className="space-y-1.5 text-xs">
            <div className="text-cyan-400 font-bold">PROFILE: {portfolioData.personalInfo.fullName}</div>
            <div className="text-slate-300">{portfolioData.personalInfo.title}</div>
            <div className="text-slate-400">{portfolioData.personalInfo.tagline}</div>
            <div className="text-slate-400">{portfolioData.personalInfo.careerObjective}</div>
            <div className="text-emerald-400 font-semibold">Status: {portfolioData.personalInfo.status}</div>
          </div>
        );
        break;

      case 'skills':
        responseContent = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-400 font-bold">LOADING TECHNICAL CAPABILITIES...</div>
            <div className="space-y-1 text-[11px]">
              <div><span className="text-slate-400">PROGRAMMING:</span> <span className="text-slate-200">Python, C, C++, JavaScript, TypeScript, SQL</span></div>
              <div><span className="text-slate-400">AI / DATA:</span> <span className="text-slate-200">Machine Learning, Deep Learning, Computer Vision, OpenCV, Pandas, NumPy, Scikit-Learn</span></div>
              <div><span className="text-slate-400">WEB:</span> <span className="text-slate-200">React, HTML5, CSS3, Tailwind CSS, Node.js, REST APIs</span></div>
              <div><span className="text-slate-400">TOOLS:</span> <span className="text-slate-200">Git, GitHub, VS Code, Linux, Jupyter Notebook, Google Colab</span></div>
            </div>
          </div>
        );
        break;

      case 'projects':
        responseContent = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-400 font-bold">VERIFIED REPOSITORIES & CASE STUDIES:</div>
            <div className="space-y-2">
              {portfolioData.projects.map(p => (
                <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800 text-[11px]">
                  <div className="text-cyan-300 font-bold">{p.num} // {p.title}</div>
                  <div className="text-slate-400">{p.tagline}</div>
                  <div className="text-slate-500">Tech: {p.technology.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'education':
        responseContent = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-400 font-bold">ACADEMIC BACKGROUND:</div>
            {portfolioData.education.map((e, i) => (
              <div key={i} className="text-[11px] space-y-0.5">
                <div className="text-slate-200 font-semibold">{e.degree} ({e.year})</div>
                <div className="text-slate-400">{e.institution} • {e.specialization}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        responseContent = (
          <div className="space-y-2 text-xs">
            <div className="text-cyan-400 font-bold">PRACTICAL EXPERIENCE:</div>
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="text-[11px] space-y-0.5">
                <div className="text-slate-200 font-semibold">{exp.role} ({exp.year})</div>
                <div className="text-cyan-300">{exp.company}</div>
                <div className="text-slate-400">{exp.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        responseContent = (
          <div className="space-y-1 text-xs">
            <div className="text-cyan-400 font-bold">COMMUNICATION ENDPOINTS:</div>
            <div className="text-[11px] space-y-0.5">
              <div>Email: <a href={`mailto:${portfolioData.contact.email}`} className="text-cyan-300 hover:underline">{portfolioData.contact.email}</a></div>
              <div>GitHub: <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{portfolioData.contact.github}</a></div>
              <div>LinkedIn: <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">{portfolioData.contact.linkedin}</a></div>
              <div>Location: <span className="text-slate-300">{portfolioData.contact.location}</span></div>
            </div>
          </div>
        );
        break;

      case 'resume':
        responseContent = (
          <div className="space-y-1.5 text-xs">
            <div className="text-cyan-400 font-bold">CURRICULUM VITAE ACCESS:</div>
            <div className="text-slate-300 text-[11px]">
              The verified PDF is available at /public/assets/resume.pdf
            </div>
            <div>
              <a
                href={portfolioData.personalInfo.resumeFile}
                download="Aadhipradhap_Resume.pdf"
                className="inline-block mt-1 px-3 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-[11px]"
              >
                DOWNLOAD AADHIPRADHAP_RESUME.pdf
              </a>
            </div>
          </div>
        );
        break;

      case 'scan':
        responseContent = (
          <div className="space-y-1 text-xs">
            <div className="text-cyan-400 font-bold">AI FAKE CERTIFICATE SCANNER:</div>
            <div className="text-[11px] text-slate-300">
              Triggering document forensic inspection module... Scroll to Section 04 (Selected Work) or click Flagship Case Study.
            </div>
          </div>
        );
        break;

      case 'clear':
        setMessages([]);
        setInputVal('');
        return;

      default:
        responseContent = (
          <div className="text-xs text-rose-400">
            command not recognized: "{cmd}". Type <span className="text-cyan-300 font-semibold">«help»</span> to view valid commands.
          </div>
        );
    }

    const responseMsg: TerminalMessage = {
      id: String(Date.now() + 1),
      type: 'output',
      content: responseContent
    };

    setMessages(prev => [...prev, userMsg, responseMsg]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="aadhipradhap-ai-terminal"
      className={`rounded-2xl border border-cyan-500/40 bg-[#070b14]/95 backdrop-blur-2xl shadow-2xl overflow-hidden font-mono transition-all duration-300 ${
        isFloating
          ? 'fixed bottom-6 right-6 z-50 w-full max-w-xl max-h-[500px]'
          : 'w-full'
      }`}
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1422] border-b border-slate-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer"
              title="Close"
            />
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer"
              title="Minimize"
            />
            <button
              onClick={() => setIsMinimized(false)}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer"
              title="Maximize"
            />
          </div>
          <span className="text-xs font-bold text-slate-300 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>AADHIPRADHAP_AI // CLI</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMessages([])}
            className="p-1 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            title="Clear Console"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {!isMinimized && (
        <div className="p-4 sm:p-5 flex flex-col justify-between space-y-4 max-h-[420px]">
          {/* Quick Help Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-slate-800/80 text-[10px]">
            <span className="text-slate-500 mr-1">QUICK CHIPS:</span>
            {['help', 'about', 'skills', 'projects', 'education', 'contact', 'resume'].map(cmd => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-700/60 transition-colors cursor-pointer"
              >
                «{cmd}»
              </button>
            ))}
          </div>

          {/* Console Stream */}
          <div className="space-y-3 overflow-y-auto max-h-[280px] pr-1">
            {messages.map(msg => (
              <div key={msg.id} className="leading-relaxed">
                {msg.type === 'input' && (
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                    <span className="text-slate-500">aadhipradhap@lab:~$</span>
                    <span>{msg.content}</span>
                  </div>
                )}
                {msg.type === 'system' && (
                  <div className="text-[11px] text-cyan-400/90 bg-cyan-950/20 p-1.5 rounded border border-cyan-900/30">
                    {msg.content}
                  </div>
                )}
                {msg.type === 'output' && (
                  <div className="text-xs text-slate-300 pl-2 border-l-2 border-slate-800 mt-1">
                    {msg.content}
                  </div>
                )}
                {msg.type === 'error' && (
                  <div className="text-xs text-rose-400 pl-2 border-l-2 border-rose-800 mt-1">
                    {msg.content}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Active Input Line */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
            <span className="text-cyan-400 text-xs font-bold">
              aadhipradhap@lab:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type «help» or any command..."
              className="flex-1 bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none font-mono"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/80 hover:bg-cyan-900 transition-colors cursor-pointer"
              title="Execute"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

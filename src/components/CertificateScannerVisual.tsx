import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Scan, RefreshCw, Cpu, CheckCircle2, Search } from 'lucide-react';

export const CertificateScannerVisual: React.FC = () => {
  const [isTamperedMode, setIsTamperedMode] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  const toggleTamper = () => {
    setIsScanning(false);
    setIsTamperedMode(!isTamperedMode);
    setTimeout(() => {
      setIsScanning(true);
    }, 400);
  };

  return (
    <div
      id="certificate-scanner-container"
      className="relative w-full rounded-2xl border border-cyan-500/30 bg-[#090d16] p-6 overflow-hidden shadow-2xl font-mono select-none"
    >
      {/* Scanner Control Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs gap-3">
        <div className="flex items-center gap-2">
          <Scan className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-slate-300 font-semibold">AI FORENSIC DOCUMENT SCANNER</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800">
            OPENCV + CNN CORE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTamper}
            className={`px-3 py-1 rounded-md text-[11px] font-mono border transition-all cursor-pointer flex items-center gap-1.5 ${
              isTamperedMode
                ? 'bg-rose-950/80 border-rose-700 text-rose-300 hover:bg-rose-900/80'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-200'
            }`}
          >
            <RefreshCw className="w-3 h-3" />
            <span>Mode: {isTamperedMode ? 'FLAGGED ANOMALY' : 'AUTHENTIC SAMPLE'}</span>
          </button>
        </div>
      </div>

      {/* Main Visual: Certificate Document Sheet with Laser Beam & Anomaly Heatmap */}
      <div className="relative mx-auto max-w-xl aspect-[1.35/1] rounded-xl border border-slate-700/80 bg-gradient-to-b from-[#0e1422] to-[#0a0e1a] p-5 shadow-inner overflow-hidden">
        {/* Certificate Watermark Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Cpu className="w-64 h-64 text-cyan-400" />
        </div>

        {/* Laser Scan Beam */}
        {isScanning && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-laser z-30 pointer-events-none" />
        )}

        {/* Certificate Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-3 relative z-10">
          <div className="space-y-1">
            <div className="text-[9px] text-cyan-400 tracking-widest uppercase">
              ACADEMIC CREDENTIAL VERIFICATION SYSTEM
            </div>
            <div className="text-sm font-bold text-slate-100">
              NATIONAL INSTITUTE OF ACCREDITATION
            </div>
          </div>
          <div className="w-10 h-10 rounded-full border border-cyan-500/40 flex items-center justify-center bg-cyan-950/40">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
          </div>
        </div>

        {/* Certificate Body Lines */}
        <div className="py-4 space-y-3 relative z-10 text-[11px]">
          <div className="text-slate-400">
            THIS IS TO CERTIFY THAT CANDIDATE <span className="text-slate-100 font-bold">AADHIPRADHAP V</span>
          </div>
          <div className="text-slate-400">
            HAS COMPLETED THE CURRICULUM IN <span className="text-cyan-300 font-semibold">ARTIFICIAL INTELLIGENCE & DATA SCIENCE</span>
          </div>

          {/* Row inspected by OCR & Font Pixel Analysis */}
          <div
            className={`relative p-2 rounded border transition-all ${
              isTamperedMode
                ? 'bg-rose-950/40 border-rose-500/80 text-rose-200'
                : 'bg-slate-900/40 border-cyan-500/20 text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>SPECIALIZATION: MACHINE LEARNING & COMPUTER VISION</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isTamperedMode ? 'bg-rose-900 text-rose-200 font-bold' : 'bg-emerald-950 text-emerald-300'
              }`}>
                {isTamperedMode ? 'TAMPER FLAGGED [FONT DEVIATION 87%]' : 'VERIFIED MATCH'}
              </span>
            </div>

            {/* Simulated Bounding Box for Tamper Detection */}
            {isTamperedMode && (
              <div className="absolute -inset-1 border-2 border-dashed border-rose-500 rounded animate-pulse pointer-events-none" />
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <div className="text-[9px] text-slate-500">DIGITAL HASH // SHA-256</div>
              <div className="text-[9px] text-cyan-400/80 truncate max-w-[200px]">
                8f2b3e47a91c0e7d58129034fecda281
              </div>
            </div>

            {/* QR / Barcode element */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded border border-slate-700 bg-slate-900 flex items-center justify-center p-1">
                <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                  <div className="bg-cyan-400" />
                  <div className="bg-slate-800" />
                  <div className="bg-cyan-400" />
                  <div className="bg-slate-800" />
                  <div className="bg-cyan-400" />
                  <div className="bg-slate-800" />
                  <div className="bg-cyan-400" />
                  <div className="bg-cyan-400" />
                  <div className="bg-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Diagnostics Overlay Strip */}
        <div className="absolute bottom-2 left-4 right-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5">
            {isTamperedMode ? (
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span className={isTamperedMode ? 'text-rose-400 font-bold' : 'text-emerald-400 font-semibold'}>
              {isTamperedMode ? 'ANOMALY DETECTED // PIXEL INCONSISTENCY' : 'INTEGRITY SECURE // CONFIDENCE 99.4%'}
            </span>
          </div>
          <span className="text-slate-500 font-mono">LATENCY: 42ms</span>
        </div>
      </div>

      {/* Forensic Inspection Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
        <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 text-[10px]">FONT FORENSICS</div>
          <div className={`font-semibold mt-0.5 ${isTamperedMode ? 'text-rose-400' : 'text-slate-200'}`}>
            {isTamperedMode ? 'Variance 87.2% (Alert)' : 'Standard Kerning 0.04%'}
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 text-[10px]">NOISE ARTIFACT FILTER</div>
          <div className={`font-semibold mt-0.5 ${isTamperedMode ? 'text-rose-400' : 'text-slate-200'}`}>
            {isTamperedMode ? 'Edge Compression Split' : 'Uniform Background Noise'}
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="text-slate-500 text-[10px]">CRYPTOGRAPHIC VERIFICATION</div>
          <div className="text-cyan-400 font-semibold mt-0.5">
            Institutional Public Key OK
          </div>
        </div>
      </div>
    </div>
  );
};

import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans">
      {/* Dynamic Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -top-20 -left-20" />
      
      {/* Main Glassmorphism Card */}
      <main className="relative w-full max-w-xl bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
        
        {/* Progress Indicator */}
        <div className="flex gap-2 mb-10">
          <div className="h-1.5 flex-1 rounded-full bg-blue-500" />
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
        </div>

        <ShieldCheck className="w-12 h-12 text-blue-400 mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight leading-tight">
          Estate Planning<br/>
          <span className="text-blue-400 font-sans italic">by Design.</span>
        </h1>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          A secure, AI-powered environment for Canadian estate management. 
          Privacy-first and jurisdictionally aware.
        </p>

        <button 
          className="group flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-blue-100 transition-all active:scale-95"
        >
          Start Consultation
          <ArrowRight className="w-5 h-5" />
        </button>
      </main>
    </div>
  );
}

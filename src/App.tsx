import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Glassmorphism Card */}
      <main className="relative w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`h-1 flex-1 rounded-full ${step >= i-1 ? 'bg-blue-400' : 'bg-white/10'}`}></div>
          ))}
        </div>

        <h1 className="font-serif text-5xl text-white mb-6 tracking-tight">
          Estate Planning <span className="text-blue-400">Simplified.</span>
        </h1>
        
        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Secure, AI-powered insights for your Canadian estate. We handle the complexity; you retain the control.
        </p>

        <button 
          onClick={() => setStep(1)}
          className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all active:scale-95"
        >
          Begin Consultation
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </button>
      </main>
    </div>
  );
}

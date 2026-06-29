function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation Header */}
      <nav className="p-6 border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-2xl text-slate-900 tracking-tight">
            EstatePlanner
          </h1>
        </div>
      </nav>

      {/* Main Content Card */}
      <main className="flex-grow max-w-4xl mx-auto w-full p-8">
        <div className="bg-white p-10 rounded-lg shadow-sm border border-slate-100">
          <h2 className="font-serif text-4xl mb-6 text-slate-800">
            Canadian Estate Planning Portal
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-lg">
            Secure, AI-assisted guidance for your estate requirements. Please begin 
            your consultation to receive advice tailored to your specific province.
          </p>
          
          <button className="bg-slate-800 text-white px-8 py-3 rounded-sm hover:bg-slate-700 transition duration-200 font-medium">
            Start Consultation
          </button>
        </div>
      </main>

      {/* Professional Footer */}
      <footer className="p-8 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>© 2026 Estate Planner. This is not official legal advice. Consult a licensed professional.</p>
      </footer>
    </div>
  );
}

export default App;

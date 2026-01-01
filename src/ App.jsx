import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, Disc } from 'lucide-react';
// This assumes your image is named hero-nexus.jpg and is in the assets folder
import heroImage from './assets/hero-nexus.jpg';

export default function LandingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Initializing sync...", "Scanning repos...", "Linking PRs...", "Sync Complete!"];

  useEffect(() => {
    const timer = setInterval(() => setActiveStep(s => (s + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl z-50 p-4 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-white"><Zap className="text-indigo-500"/> NexusOS</div>
          <button className="bg-white text-black px-4 py-1.5 rounded-lg font-bold text-sm">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        {/* Animated Hero Image Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.2)] border border-white/10"
        >
          <img src={heroImage} alt="Nexus Hero" className="w-full h-auto object-cover" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          The everything app <br/>
          <span className="text-indigo-400 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">for work.</span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
          Unify your projects, docs, and team in one futuristic workspace.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition shadow-[0_0_20px_rgba(79,70,229,0.4)]">
          Get Started Free
        </button>
      </section>

      {/* Bento Grid Preview */}
      <motion.section 
  initial={{ opacity: 0, y: 40 }}      // Starts invisible and 40px down
  whileInView={{ opacity: 1, y: 0 }}   // Animates to visible when you scroll to it
  viewport={{ once: true }}           // Only animate the first time you see it
  transition={{ duration: 0.8 }}       // Take 0.8 seconds to finish
  className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {/* Box 1: Large Command Center */}
  <div className="md:col-span-2 bg-neutral-900/50 border border-white/10 p-8 rounded-3xl h-64">
     <h3 className="text-xl font-bold text-white mb-2">Command Center</h3>
     <div className="mt-4 bg-black rounded-lg p-4 border border-white/5 text-indigo-400 font-mono text-sm animate-pulse"> 
       {">"} Searching files...
     </div>
  </div>

  {/* Box 2: Small Sync Circle */}
  <div className="bg-indigo-900/20 border border-indigo-500/30 p-8 rounded-3xl h-64 flex flex-col justify-center items-center text-center">
     <Disc className="text-indigo-400 animate-spin-slow mb-4" size={40} />
     <h3 className="text-xl font-bold text-white">Always Synced</h3>
  </div>
</motion.section>

      {/* Live Sync Demo */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Real-time Sync.</h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div key={i} className={`flex items-center gap-3 transition-opacity duration-500 ${i <= activeStep ? 'opacity-100 text-green-400' : 'opacity-30'}`}>
                <CheckCircle2 size={22}/> <span className="text-lg">{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black border border-white/10 p-8 rounded-3xl font-mono text-xs shadow-2xl">
          <div className="text-neutral-500 mb-4">// System Logs v2.0</div>
          <div className="text-indigo-300 mb-2">{"> "} status: active</div>
          <div className="text-white">{"> "} {steps[activeStep]}</div>
          <div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
             <motion.div className="h-full bg-indigo-500" animate={{ width: `${(activeStep + 1) * 25}%` }} />
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 text-neutral-600 text-sm italic">
        © 2026 NexusOS. Building the future of collaboration.
      </footer>
    </div>
  );
}
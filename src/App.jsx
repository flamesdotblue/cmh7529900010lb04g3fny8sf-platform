import React from 'react';
import Hero from './components/Hero.jsx';
import AboutSkills from './components/AboutSkills.jsx';
import Projects from './components/Projects.jsx';
import TimelineCerts from './components/TimelineCerts.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter selection:bg-emerald-400/30 selection:text-emerald-200">
      <Hero />
      <main className="relative z-10">
        <AboutSkills />
        <Projects />
        <TimelineCerts />
        <Contact />
      </main>
    </div>
  );
}

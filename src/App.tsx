import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter bg-neuro-bg min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
    
      <Contact />
    </div>
  );
}

export default App;
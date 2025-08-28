import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-neuro-bg relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-neuro bg-neuro-bg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/me.jpg" alt="Profile" className="w-28 h-28 rounded-full object-cover" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Lina Rodriguez
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-600 mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypeWriter 
              texts={[
                "Software Developer",
                "Systems Engineer",
                "UI/UX Enthusiast",
                "Problem Solver"
              ]}
              speed={100}
              deleteSpeed={50}
              delayBetweenTexts={2000}
            />
          </motion.div>

          <motion.p
            className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full bg-neuro-bg shadow-neuro text-gray-800 font-semibold hover:shadow-neuro-hover transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
            
           <motion.a
              href="/CV.pdf"
              download="Lina_Rodriguez_CV.pdf"
              className="px-8 py-4 rounded-full inline-flex items-center bg-accent-pink text-white font-semibold hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
};

export default Hero;
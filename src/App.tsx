import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, 
  FaExternalLinkAlt, FaCode, FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, 
  SiExpress, SiNextdotjs, SiFirebase, SiFigma, SiReact, SiPostgresql,SiDjango, SiPython
} from 'react-icons/si';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const projects = [
    {
      id: 1,
      title: "Agrolog",
      description: "Platform for agricultural management, connecting farmers with resources and tools.",
      image: "/agrolog.png",
      technologies: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />, <FaNodeJs key="node" />, <SiPostgresql key="postgres" />],
      link: "https://agrolog.vercel.app/"
    },
    {
      id: 2,
      title: "Chinese dictionary",
      description: "Simple interface to search and learn Chinese words with definitions.",
      image: "/chinese.png",
      technologies: [<SiReact key="react" />, <SiTypescript key="ts" />, <SiNextdotjs key="next" />],
      link: "https://chinese-dictionary-chi.vercel.app/"
    },
    {
      id: 3,
      title: "Coffe Shop",
      description: "Coffee shop e-commerce site with product browsing, cart, and checkout features.",
      image: "/coffeshop.png",
      technologies: [<SiDjango key="django"/>,<SiPython key="py"/> , <SiTailwindcss key="tailwind" />],
      link: "https://github.com/LiinaRodriguez/coffee-shop"
    }
  ];

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaGithub />, name: "Git" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-bone text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            className="neumorph-inset rounded-full w-36 h-36 mx-auto mb-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <img 
              src="/me.jpg" 
              alt="Profile" 
              className="w-28 h-28 rounded-full object-cover"
            />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 text-gray-800"
            variants={itemVariants}
          >
            Lina Rodriguez
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-pink-primary mb-6 h-12"
            variants={itemVariants}
          >
            {currentText}<span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Crafting beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing creative ideas to life.
          </motion.p>
          
          <motion.button 
            className="neumorph-button px-8 py-4 bg-pink-accent text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="neumorph-card rounded-3xl p-6 hover:shadow-2xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="neumorph-inset rounded-2xl p-4 mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="neumorph-icon p-2 rounded-lg text-pink-primary">
                      {tech}
                    </div>
                  ))}
                </div>
                
                <button className="w-full neumorph-button bg-pink-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <a href={project.link} target='blank_'>View Project</a>  <FaExternalLinkAlt className="text-sm" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-b from-bone to-pink-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="neumorph-card rounded-3xl p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="neumorph-inset rounded-full p-4">
                <img 
                  src="/me.jpg" 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">Hello, I'm Lina!</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate developer with 1+ year of experience creating 
                  beautiful, functional web applications. I love turning complex problems 
                  into simple, elegant solutions that users enjoy interacting with.
                </p>
                <br />
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, or enjoying a good cup of coffee 
                  while planning my next creative project.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="neumorph-icon rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-3xl text-pink-primary">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-b from-bone to-pink-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">Let's Connect!</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with 
                amazing people. Feel free to reach out if you'd like to discuss 
                opportunities or just say hello!
              </p>
              
              <div className="flex gap-4">
                <motion.a 
                  href="mailto:linnrodriguez25@gmail.com"
                  className="neumorph-icon rounded-2xl p-4 text-pink-primary hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaEnvelope size={24} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/liinarodriguez"
                  className="neumorph-icon rounded-2xl p-4 text-pink-primary hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://github.com/liinarodriguez"
                  className="neumorph-icon rounded-2xl p-4 text-pink-primary hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <p className="text-gray-600">
          © 2025 Lina. Built with React & TailwindCSS
        </p>
      </footer>
    </div>
  );
}

export default App;
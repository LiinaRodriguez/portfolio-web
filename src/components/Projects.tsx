import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiNpm, SiNextdotjs, SiDjango } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Agrolog',
      description: 'A web app for managing agricultural activities, tracking crop growth, and optimizing farm operations.',
      image: '/agrolog2.png',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Node.js', icon: SiNodedotjs },
      ],
      github: 'github.com/liinarodriguez/kaze',
      demo: 'https://agrolog.vercel.app',
      status: 'development', // Added status field
    },
    {
      id: 2,
      title: 'Chinese dictionary',
      description: 'A simple interface to Chinese Character Web APIs to search for characters, words, and phrases.',
      image: '/chi.png',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'Node.js', icon: SiNodedotjs },
      ],
      github: 'github.com/liinarodriguez/chinese-dictionary',
      demo: 'https://chinese-dictionary-chi.vercel.app',
    },
    {
      id: 3,
      title: 'Coffe Shop',
      description: 'A modern coffee shop website with online ordering, menu display, and checkout.',
      image: '/coffeshop.png',
      technologies: [
        { name: 'Django', icon: SiDjango },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
      github: 'github.com/liinarodriguez/coffee-shop',
      demo: '',
    },
    {
      id: 4,
      title: 'Kaze live editor',
      description: 'Custom language for creating diagrams and visualizations with real-time preview. Familiar syntax for developers.',
      image: '/editor.png',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind', icon: SiTailwindcss },
        { name: 'npm', icon: SiNpm}

        
      ],
      github: 'github.com/liinarodriguez/kaze-live-editor',
      demo: '',
      status: 'development', // Added status field
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-neuro-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            exceptional web experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-neuro-bg rounded-3xl shadow-neuro p-8 hover:shadow-neuro-hover transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-neuro-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 {project.status === 'development' && (
                    <div className="absolute top-2 right-2 bg-pink-200 text-blue-700 text-xs font-semibold py-1 px-2 rounded">
                      In Development
                    </div>
                  )}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-neuro-bg rounded-full shadow-neuro-sm text-sm text-gray-700"
                  >
                    <tech.icon className="w-4 h-4" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target='_blank'
                  className="flex items-center gap-2 px-4 py-2 bg-neuro-bg rounded-full shadow-neuro-sm text-gray-700 hover:shadow-neuro-hover transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium"></span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target='_blank'
                  className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 
                              ${project.demo ? 'bg-accent-pink text-white hover:shadow-xl hover:bg-pink-600' : 'bg-gray-500 text-gray-200 cursor-not-allowed'}`}
                  whileHover={project.demo ? { scale: 1.05 } : {}}
                  whileTap={project.demo ? { scale: 0.95 } : {}}
                  style={{ pointerEvents: project.demo ? 'auto' : 'none' }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
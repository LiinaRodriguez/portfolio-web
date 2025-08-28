import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiNextdotjs,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-neuro-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I work with a diverse set of technologies to build robust, scalable, and 
            beautiful web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="w-24 h-24 mx-auto rounded-full bg-neuro-bg shadow-neuro flex items-center justify-center cursor-pointer hover:shadow-neuro-hover transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon 
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: skill.color }}
                />
              </motion.div>
              <motion.p
                className="text-center mt-4 text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
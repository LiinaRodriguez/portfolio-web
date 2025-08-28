import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: MapPin, label: 'Based In', value: 'San Francisco' },
  ];

  return (
    <section className="py-20 bg-neuro-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital experiences that make a difference. My journey began with curiosity about 
                how websites work, and it has evolved into a deep love for crafting beautiful, 
                functional applications.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in the power 
                of clean code, thoughtful design, and continuous learning.
              </p>
              
              <p>
                I'm always excited to take on new challenges and collaborate with teams that 
                share my passion for creating exceptional user experiences.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-neuro-bg shadow-neuro flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent-pink" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="flex items-center gap-3 px-6 py-3 bg-neuro-bg rounded-full shadow-neuro text-gray-800 font-semibold hover:shadow-neuro-hover transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="w-full max-w-md mx-auto rounded-3xl shadow-neuro-lg overflow-hidden bg-neuro-bg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Alex Morgan"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Alex Morgan
                  </h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent-pink shadow-lg flex items-center justify-center text-white font-bold text-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✨ Hi!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
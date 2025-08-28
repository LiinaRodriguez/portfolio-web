import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'linnrodriguez25@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Colombia' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/liinarodriguez', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/lliinarodriguez', label: 'LinkedIn' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-neuro-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
        </motion.div>

         <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-sretch">

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="space-y-8 h-full"
          >
            <div className="bg-neuro-bg rounded-3xl shadow-neuro p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-6 lg:h-full">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neuro-bg shadow-neuro flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-accent-pink" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">{info.label}</p>
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
           
            className="space-y-8 h-full"
          >
            <div className="bg-neuro-bg rounded-3xl shadow-neuro p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Social
              </h3>
              
              <div className="flex gap-4 ">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-neuro-bg shadow-neuro flex items-center justify-center text-gray-600 hover:text-accent-pink hover:shadow-neuro-hover transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

           
          </motion.div>
        </div> 
      </div>
    </section>
  );
};

export default Contact;
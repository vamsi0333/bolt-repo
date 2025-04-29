import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { socials } from '../../data/portfolio';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Feel free to contact me for any opportunities or collaborations"
          centered
        />
        
        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm currently open to new opportunities in DevOps engineering and cloud infrastructure roles. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>
            
            <div className="flex justify-center space-x-6">
              {socials.map((social, index) => {
                // Get the icon from Lucide
                const Icon = (LucideIcons as Record<string, React.ComponentType<any>>)[social.icon] || LucideIcons.Link;
                
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {social.platform}
                    </span>
                  </motion.a>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 text-center"
            >
              <a 
                href="mailto:vamsi.bhavana@example.com"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Me an Email
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
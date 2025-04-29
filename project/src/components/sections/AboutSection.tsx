import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { about } from '../../data/portfolio';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know my professional journey"
        />
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-lg"></div>
              <img 
                src={about.image} 
                alt="Vamsi Krishna Bhavana" 
                className="rounded-xl w-full object-cover z-10 relative h-[400px]"
              />
              
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-20">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Briefcase size={16} className="mr-2 text-blue-600" />
                  <span>DevOps Engineer</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              {about.headline}
            </h3>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {about.introduction}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {about.description}
            </p>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Mission</h4>
              <p className="italic text-gray-700 dark:text-gray-300">
                "{about.mission}"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Calendar size={18} className="mr-2 text-blue-600" />
                <span>2+ years of experience</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin size={18} className="mr-2 text-blue-600" />
                <span>Available for remote positions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

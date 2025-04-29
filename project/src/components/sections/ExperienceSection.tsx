import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { experience } from '../../data/portfolio';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My professional journey in DevOps and software engineering"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {experience.map((job, index) => (
              <div key={index} className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 hidden md:block"></div>
                  
                  {/* Date */}
                  <div className="md:w-1/2 mb-4 md:mb-0 px-4">
                    <div className={`md:text-right ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      <span className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        <Calendar size={14} className="mr-1" />
                        {job.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 px-4">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {job.company}
                      </h4>
                      
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </div>
                      
                      <ul className="space-y-2">
                        {job.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex">
                            <ChevronRight size={18} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 ml-2">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
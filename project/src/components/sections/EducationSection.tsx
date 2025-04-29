import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { education } from '../../data/portfolio';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="bg-blue-600 p-4 rounded-t-xl">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">
                        {edu.institution}
                      </h3>
                      <div className="p-2 bg-white rounded-full">
                        <GraduationCap size={20} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {edu.degree}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-blue-600" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-600" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
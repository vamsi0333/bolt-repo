import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { certifications } from '../../data/portfolio';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional credentials and achievements"
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="w-full md:w-80 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Award size={24} className="text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                  <span className="font-medium">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2 text-blue-600" />
                  <span>{cert.date}</span>
                </div>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span className="mr-1">View Credential</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ProgressBar from '../ui/ProgressBar';
import CloudCanvas from '../3d/CloudCanvas';
import { skills } from '../../data/portfolio';

const SkillsSection: React.FC = () => {
  const categories = [
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'containerization', name: 'Containerization' },
    { id: 'cicd', name: 'CI/CD & DevOps' },
    { id: 'programming', name: 'Programming' },
    { id: 'other', name: 'Other Skills' },
  ];

  // Group skills by category
  const skillsByCategory = categories.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.id)
  }));

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My expertise in DevOps and cloud technologies"
          centered
        />
        
        <div className="mb-16">
          <CloudCanvas />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsByCategory.map((category, categoryIndex) => (
            category.skills.length > 0 && (
              <motion.div 
                key={category.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {category.name}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => {
                    // Get the icon from Lucide
                    const Icon = (LucideIcons as Record<string, React.ComponentType<any>>)[skill.icon] || LucideIcons.Code;
                    
                    return (
                      <motion.div 
                        key={skill.name}
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md mr-3">
                            <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <ProgressBar 
                          percentage={skill.level} 
                          color="bg-blue-600"
                          animated
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
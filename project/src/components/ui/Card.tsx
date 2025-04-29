import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${
        hoverEffect ? 'hover:shadow-xl transition-shadow duration-300' : ''
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverEffect ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
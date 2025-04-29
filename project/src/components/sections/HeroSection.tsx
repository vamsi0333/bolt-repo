import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import CubeScene from '../3d/CubeScene';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 z-10 text-center">
        {/* Profile Image + Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <img
            src="/images/profile.jpeg"
            alt="Vamsi Krishna Bhavana"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Vamsi Krishna Bhavana
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
            DevOps Engineer | AWS & Kubernetes Specialist
          </h2>
        </motion.div>

        {/* 3D Cube */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <CubeScene />
        </motion.div>

        {/* Description + Scroll Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Automating cloud infrastructure, streamlining DevOps pipelines, and delivering high-availability solutions at scale.
          </p>

          <button
            onClick={scrollToAbout}
            className="flex items-center mx-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            <span className="mr-2">Learn more</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </button>
        </motion.div>
    </section>
  );
};

export default HeroSection;

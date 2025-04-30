import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

import './index.css';

function App() {
  useEffect(() => {
    // dark mode handling...
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Header />
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;

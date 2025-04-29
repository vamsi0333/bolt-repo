import React from 'react';
import * as LucideIcons from 'lucide-react';
import { socials } from '../../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-blue-400">
              VKB
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              DevOps Engineer specializing in automating deployments, building resilient infrastructure, and optimizing cloud resources.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socials.map((social) => {
              // Get the icon from Lucide
              const Icon = (LucideIcons as Record<string, React.ComponentType<any>>)[social.icon] || LucideIcons.Link;
              
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Vamsi Krishna Bhavana. All rights reserved.
          </p>
          <p className="mt-1">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
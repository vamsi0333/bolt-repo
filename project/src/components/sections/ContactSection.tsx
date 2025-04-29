import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Feel free to reach out to me through any of the platforms below!
        </p>

        <div className="mt-8 space-y-4">
          <p className="text-gray-700 dark:text-gray-400">
            📧 Email: 
            <a href="mailto:durga1481@gmail.com" className="text-blue-500 hover:underline ml-2">
              durga1481@gmail.com
            </a>
            <br />
            📧 Alternate Email: 
            <a href="mailto:vamsikrishnabhavana8@gmail.com" className="text-blue-500 hover:underline ml-2">
              vamsikrishnabhavana8@gmail.com
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            📱 Mobile: 551-998-8446
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://github.com/vamsi0333" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vamsikrishnabhavana" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

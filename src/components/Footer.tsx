
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">James White</h2>
            <p className="text-gray-300">Senior Software Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:abc.xyz@gmail.com" 
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} James White. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

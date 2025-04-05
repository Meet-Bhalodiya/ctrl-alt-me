
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              I'm always open to discussing new projects, opportunities in software engineering, or potential collaborations. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:meet.bhalodiya259@gmail.com" className="text-primary hover:underline">
                    meet.bhalodiya259@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/meet1998/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    linkedin.com/in/meet1998
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Github className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">GitHub</h3>
                  <a href="https://github.com/Meet-Bhalodiya" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    github.com/Meet-Bhalodiya
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16.5 3.5a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 1 0 5h-9"></path>
                    <line x1="8" y1="9" x2="13" y2="9"></line>
                    <line x1="8" y1="15" x2="13" y2="15"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">LeetCode</h3>
                  <a href="https://leetcode.com/u/meet_bhalodiya/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    leetcode.com/u/meet_bhalodiya
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-4">Send me a message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

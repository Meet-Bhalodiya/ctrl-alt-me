
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-navy-800 leading-tight">
            James White
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-navy-600 mb-8 font-light">
            Senior Software Engineer
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <p className="text-navy-600 text-lg">
              <span className="font-semibold">Location:</span> Bengaluru, India
            </p>
            <span className="hidden md:block text-gray-400">•</span>
            <p className="text-navy-600 text-lg">
              <span className="font-semibold">Email:</span> abc.xyz@gmail.com
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="#about" className="bg-navy-600 hover:bg-navy-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </a>
            <a href="#contact" className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-navy-600 hover:text-navy-800 transition-colors">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

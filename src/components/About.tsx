
import React from 'react';
import { User, Briefcase, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Highly competent personality with over 5 years of experience as a Python Software Engineer in the
              FinTech industry, possessing excellent analytical skills and a proven track record in requirement
              analysis, robust development, and team leadership.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              A passionate engineer, a math wiz, and a machine
              learning enthusiast, dedicated to leveraging expertise to amplify success together.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                  <User className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Team Leadership</h3>
                  <p className="text-gray-600">
                    Led teams of 4-8 developers through full SDLC with proven success in project delivery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">FinTech Expert</h3>
                  <p className="text-gray-600">
                    Specialized in financial technology solutions with focus on performance optimization.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-blue-100 rounded-lg">
                  <Code className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Python Specialist</h3>
                  <p className="text-gray-600">
                    Advanced expertise in Python, Django, and modern DevOps practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4 border-b pb-2">Education</h3>
              <div className="mb-4">
                <h4 className="font-medium">Bachelor of Technology</h4>
                <p className="text-gray-700">Information Technology</p>
                <p className="text-gray-600 text-sm">Parul University</p>
                <p className="text-gray-500 text-sm">Aug 2016 – Apr 2020 | Vadodara, India</p>
              </div>
              
              <h3 className="font-semibold text-lg mb-4 border-b pb-2 mt-6">Languages</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">English</li>
                <li className="text-gray-700">Hindi</li>
                <li className="text-gray-700">Gujarati</li>
              </ul>
              
              <h3 className="font-semibold text-lg mb-4 border-b pb-2 mt-6">Certificates</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">Machine Learning Specialization <span className="text-sm text-gray-500">(Stanford University, pursuing)</span></li>
                <li className="text-gray-700">Learn to code for Data Analysis <span className="text-sm text-gray-500">(Open University, 2020)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

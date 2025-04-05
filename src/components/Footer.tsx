
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Meet Bhalodiya</h2>
            <p className="text-gray-300">Senior Software Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Meet-Bhalodiya" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/meet1998/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://leetcode.com/u/meet_bhalodiya/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LeetCode"
            >
              <svg width="40" height="40" viewBox="0 0 90 77" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(26, 15)">
                    <path d="m27.975805 34.4239192c1.0334271-1.0319064 2.7062531-1.0292113 3.7363613.0060198 1.0301083 1.0352311 1.0274178 2.7109772-.0060093 3.7428837l-4.5888896 4.5821372c-4.2336212 4.2275107-11.1372543 4.2888144-15.4422777.1424038-.0248818-.0238393-1.94181117-1.9034349-8.2655916-8.1043646-4.20705666-4.125135-4.62618076-10.7259344-.66722808-14.964776l7.38143308-7.9036364c3.9291915-4.20741973 11.1720964-4.66726841 15.6645732-1.0342221l6.7041065 5.4218253c1.1353316.918179 1.3126656 2.5844847.3960867 3.7217981-.9165789 1.1373135-2.579981 1.3149571-3.7153126.3967781l-6.7040613-5.4217888c-2.3494736-1.900009-6.4593748-1.6390733-8.486714.5318229l-7.38152793 7.903738c-1.92731642 2.0635733-1.71623277 5.3879367.50484905 7.5657686 4.64368158 4.5534699 8.22251198 8.0625994 8.22665258 8.0665792 2.2381521 2.1556839 5.8571109 2.1235478 8.0546337-.0708032z" fill="currentColor" fill-rule="nonzero"/>
                    <path d="m16.8281226 29.8384229c-1.4591418 0-2.6420099-1.184933-2.6420099-2.6466218 0-1.4616889 1.1828681-2.6466219 2.6420099-2.6466219h19.4848225c1.4591418 0 2.6420099 1.184933 2.6420099 2.6466219 0 1.4616888-1.1828681 2.6466218-2.6420099 2.6466218z" fill="currentColor"/>
                    <path d="m20.4772239.83850541c.99686-1.06739497 2.6687614-1.12316416 3.7342964-.12456398 1.0655349.99860019 1.1212069 2.67342017.1243469 3.74081515l-17.73498005 18.98985612c-1.92738418 2.0634167-1.71630181 5.38776.50463376 7.5656795l8.19027629 8.0313209c1.0427196 1.0224827 1.0605693 2.6981356.0398683 3.7426754-1.0207009 1.0445398-2.6934338 1.0624206-3.7361534.0399379l-8.19031415-8.0313581c-4.20681066-4.1253311-4.62593329-10.7261075-.66680421-14.9646673z" fill="currentColor"/>
                  </g>
                </g>
              </svg>
            </a>
            <a 
              href="mailto:meet.bhalodiya259@gmail.com" 
              className="w-10 h-10 rounded-full bg-navy-700 flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Meet Bhalodiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

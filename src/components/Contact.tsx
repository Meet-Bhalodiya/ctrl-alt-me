
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // The form will be handled by formsubmit.co
    // This is just to show a toast after submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
    }, 2000);
  };
  
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
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <span className="text-gray-700">Bengaluru, India</span>
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
                  <svg width="50" height="50" viewBox="0 0 90 77" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <g fill="none" fill-rule="evenodd">
                      <g transform="translate(26, 15)">
                        <path d="m27.975805 34.4239192c1.0334271-1.0319064 2.7062531-1.0292113 3.7363613.0060198 1.0301083 1.0352311 1.0274178 2.7109772-.0060093 3.7428837l-4.5888896 4.5821372c-4.2336212 4.2275107-11.1372543 4.2888144-15.4422777.1424038-.0248818-.0238393-1.94181117-1.9034349-8.2655916-8.1043646-4.20705666-4.125135-4.62618076-10.7259344-.66722808-14.964776l7.38143308-7.9036364c3.9291915-4.20741973 11.1720964-4.66726841 15.6645732-1.0342221l6.7041065 5.4218253c1.1353316.918179 1.3126656 2.5844847.3960867 3.7217981-.9165789 1.1373135-2.579981 1.3149571-3.7153126.3967781l-6.7040613-5.4217888c-2.3494736-1.900009-6.4593748-1.6390733-8.486714.5318229l-7.38152793 7.903738c-1.92731642 2.0635733-1.71623277 5.3879367.50484905 7.5657686 4.64368158 4.5534699 8.22251198 8.0625994 8.22665258 8.0665792 2.2381521 2.1556839 5.8571109 2.1235478 8.0546337-.0708032z" fill="currentColor" fill-rule="nonzero"/>
                        <path d="m16.8281226 29.8384229c-1.4591418 0-2.6420099-1.184933-2.6420099-2.6466218 0-1.4616889 1.1828681-2.6466219 2.6420099-2.6466219h19.4848225c1.4591418 0 2.6420099 1.184933 2.6420099 2.6466219 0 1.4616888-1.1828681 2.6466218-2.6420099 2.6466218z" fill="currentColor"/>
                        <path d="m20.4772239.83850541c.99686-1.06739497 2.6687614-1.12316416 3.7342964-.12456398 1.0655349.99860019 1.1212069 2.67342017.1243469 3.74081515l-17.73498005 18.98985612c-1.92738418 2.0634167-1.71630181 5.38776.50463376 7.5656795l8.19027629 8.0313209c1.0427196 1.0224827 1.0605693 2.6981356.0398683 3.7426754-1.0207009 1.0445398-2.6934338 1.0624206-3.7361534.0399379l-8.19031415-8.0313581c-4.20681066-4.1253311-4.62593329-10.7261075-.66680421-14.9646673z" fill="currentColor"/>
                      </g>
                    </g>
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
            
            <form 
              action="https://formsubmit.co/meet.bhalodiya259@gmail.com" 
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Optional: honeypot to prevent spam */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Success page redirect (optional) */}
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
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
                  name="email"
                  required
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
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

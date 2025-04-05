
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="mt-12">
          {/* Goldman Sachs */}
          <div className="timeline-item">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-navy-800">Software Engineer</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <span className="text-lg font-semibold text-primary">Goldman Sachs</span>
                <span className="hidden md:block text-gray-400">•</span>
                <span className="text-gray-600">Jul 2023 – Present | Bengaluru, India</span>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Supervised a team of 4 developers, handling end-to-end project management tasks, including technical discussions, assigning tasks, and performing code reviews to ensure seamless project delivery.</li>
              <li>Developed and deployed 6 Cron applications as part of a microservice-oriented loan fintech product, leading to significant time savings of approximately 4000 man-hours annually.</li>
              <li>Improved the performance of an application by 50% by implementing multithreading & AsyncIO. Also reduced the running time of an application from 60 minutes to 30 seconds.</li>
              <li>Migrated existing applications to on-premise Kubernetes clusters within 2 weeks.</li>
              <li>Implemented unit testing using Pytest & Behavior Driven Development (BDD) testing using Behave to maintain an overall test coverage of 80%.</li>
              <li>Conducted high-quality knowledge-sharing sessions which helped team members improve their understanding of fundamentals of engineering concepts resulting in topping the Leaderboard across 1000+ members.</li>
            </ul>
          </div>
          
          {/* Trellissoft */}
          <div className="timeline-item">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-navy-800">Software Engineer</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                <span className="text-lg font-semibold text-primary">Trellissoft, Inc.</span>
                <span className="hidden md:block text-gray-400">•</span>
                <span className="text-gray-600">Jan 2020 – Jul 2023 | Gandhinagar, India</span>
              </div>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Managed a team of 8 Developers and QA through the full software development lifecycle, from planning to deployment.</li>
              <li>Developed highly optimized ORM queries for dashboard metrics and reduced processing time by 96%.</li>
              <li>Enhanced the middleware processing time by 80% by implementing Redis cache & optimizing queries, resulting in an overall application performance improvement.</li>
              <li>Mentored and trained 5 newly hired employees and interns on project process, architecture, and technical skills and received recognition for the mentorship.</li>
              <li>Integrated Payment Gateways like Western Union, SnapCheck, Plaid, and AvidPay for payment solutions, which got SMBs paid faster with 0% payment failure, resulting in more than $75 million in funding to SMBs.</li>
              <li>Carried out major backend operations & undertook full ownership of a web application-based fintech product using Python, Django, and Django REST framework, having proficiency in different phases of the SDLC.</li>
              <li>Executed the development and maintenance of new APIs for product enhancement, and refined existing APIs to ensure seamless operation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

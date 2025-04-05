
import React from 'react';

const Projects = () => {
  // These would be replaced with actual projects
  const projects = [
    {
      title: "Microservice Loan Platform",
      description: "A microservice-oriented loan fintech product with 6 Cron applications that saved approximately 4000 man-hours annually.",
      technologies: ["Python", "Django", "Kubernetes", "Docker"],
      image: "/placeholder.svg"
    },
    {
      title: "Payment Gateway Integration",
      description: "Integration of multiple payment gateways resulting in more than $75 million in funding to SMBs with 0% payment failure.",
      technologies: ["Python", "Django", "REST API", "Payment Gateways"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-heading">Featured Projects</h2>
        
        <p className="text-gray-600 max-w-3xl mb-10">
          Highlights from my work in FinTech application development, performance optimization,
          and system integration. Each project demonstrates my commitment to delivering 
          high-quality, efficient software solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-navy-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-blue-50 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

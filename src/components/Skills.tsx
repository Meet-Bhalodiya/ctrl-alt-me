
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python"]
    },
    {
      title: "Web Frameworks",
      skills: ["Django", "Flask", "FastAPI", "Django REST framework (DRF)"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database design", "SQLAlchemy", "Relational and Non-Relational Databases"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes (K8s)", "ArgoCD", "Amazon web services (AWS)", "CI/CD pipeline"]
    },
    {
      title: "Miscellaneous",
      skills: [
        "Artificial Intelligence (AI)",
        "Machine learning (ML)",
        "Celery",
        "Microservices",
        "Agile methodologies",
        "Object oriented programming (OOPs)",
        "Data Structures and Algorithms (DSA)",
        "Design patterns",
        "Version control (Git, Github, Gitlab)"
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-lg p-6 shadow-sm ${
                category.title === "Miscellaneous" ? "lg:col-span-2" : ""
              }`}
            >
              <h3 className="text-lg font-semibold mb-4 text-navy-800 border-b pb-2">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

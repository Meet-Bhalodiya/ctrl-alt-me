
import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: "Bronze Award",
      company: "Genpact",
      year: "2024"
    },
    {
      title: "Employee of the Quarter",
      company: "Trellissoft, Inc.",
      year: "Q4-2022"
    },
    {
      title: "Employee of the Quarter",
      company: "Trellissoft, Inc.",
      year: "Q1-2022"
    },
    {
      title: "Employee of the Quarter",
      company: "Trellissoft, Inc.",
      year: "Q4-2021"
    },
    {
      title: "Employee of the Quarter",
      company: "Trellissoft, Inc.",
      year: "Q1-2021"
    },
    {
      title: "Employee of the Year",
      company: "Trellissoft, Inc.",
      year: "2020"
    }
  ];

  return (
    <section id="awards" className="section bg-white">
      <div className="container">
        <h2 className="section-heading">Awards & Recognition</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg text-navy-800">{award.title}</h3>
              <p className="text-primary mt-2">{award.company}</p>
              <p className="text-gray-600 text-sm mt-1">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

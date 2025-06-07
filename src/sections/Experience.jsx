import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      role: 'Project Manager',
      company: 'Soft Zone Private Limited',
      duration: 'Jan 2025 - Present',
      description: 'Helping College Students to finish their Final Year Project with Innovative Thoughts and Ideas.',
    },
    {
      role: 'Python Full Stack Developer',
      company: 'Nass Online Practice Private Limited',
      duration: 'Nov 2024 - Jan 2025',
      description: 'Learned Python, Django, dived deep in to Web Application with Created a Vacation Job Project.',
    },
    {
      role: 'C# Application Deveoper',
      company: 'Logic Technologies Private Limited',
      duration: 'Jun 2024 - Nov 2024',
      description: 'Developed Windows Application For Retail, Super Market Billing Software with C#, .Net, SQL server, Crystal Reports.',
    },
    {
      role: 'SAP Basis Consultant',
      company: 'FAMS Consultancy Private Limited',
      duration: 'Jan 2024 - Apr 2024',
      description: 'Maintained SAP Systems, Managed User Administration, Worked with Work Processors for Specific Tasks.',
    },
  ];

  return (
    <section className="bg-white py-12 px-4" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="text-sm text-gray-600">{item.company} — <span>{item.duration}</span></p>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

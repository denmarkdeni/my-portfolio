import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.A. English Literature',
      institution: 'V.O.Chidambaranar College , Manonmaniam Sundaranar University',
      year: '2020 - 2024',
      description: 'Explored literature, communication, and critical thinking while building a strong foundation in research and analysis.',
    },
    {
      degree: 'Mathematics & Biology',
      institution: 'St.Francis Xavier Higher Secondary School, Tuticorin',
      year: '2018 - 2020',
      description:
        'Interested in mathematics , Javelin sport. Three times first prize in mathematics.',
    },
  ];

  return (
    <section className="bg-white py-12 px-4" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-700">{item.degree}</h3>
              <p className="text-sm text-gray-600">
                {item.institution} — <span>{item.year}</span>
              </p>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

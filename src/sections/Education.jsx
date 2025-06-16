import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.A. English Literature',
      institution: 'V.O.Chidambaranar College, Manonmaniam Sundaranar University',
      year: '2020 - 2024',
      description: 'Explored literature, communication, and critical thinking while building a strong foundation in research and analysis.',
    },
    {
      degree: 'Mathematics & Biology',
      institution: 'St.Francis Xavier Higher Secondary School, Tuticorin',
      year: '2018 - 2020',
      description: 'Interested in mathematics, Javelin sport. Three times first prize in mathematics.',
    },
  ];

  return (
    <section className="py-12 px-4" id="education">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#22D3EE]">Education</h2>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-[#22D3EE] pl-6 py-4 bg-[#3770c82e] bg-opacity-90 rounded shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#22D3EE]">{item.degree}</h3>
              <p className="text-sm text-[#CCC]">
                {item.institution} — <span>{item.year}</span>
              </p>
              <p className="text-[#FFF] mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
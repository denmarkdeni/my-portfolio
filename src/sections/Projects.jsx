import React, { useState } from 'react';

const projectData = [
  {
    id: 1,
    title: 'Fake Detect',
    description:
      'E-commerce platform that detects counterfeit products based on seller history and customer review, feedback.',
    tech: ['Django', 'React', 'Sqlite', 'Bootstrap'],
    link: 'https://github.com/denmarkdeni/FakeDetect',
  },
  {
    id: 2,
    title: 'Estate Connect',
    description:
      'A Real Estate Web Platform to Provide Material, Cost Suggestions with machine learning model and 2D plan generation.',
    tech: ['Django', 'ML model', 'MatPlotLib', 'three.js'],
    link: 'https://github.com/denmarkdeni/Estate_Connect',
  },
  {
    id: 3,
    title: 'Forensic Ai',
    description:
      'An AI-enhanced forensic case tracking and analysis platform designed to support investigators, analysts, and admins with digital tools.',
    tech: ['Pytesseract', 'Deepface', 'OpenCV'],
    link: 'https://github.com/denmarkdeni/ForensicAi',
  },
  {
    id: 4,
    title: 'Organ Connect',
    description:
      'A Website connecting Doctors, Donors, Recipients for Organ Donation and Transplantation, Guiding the users through responsive chat bot.',
    tech: ['Django', 'Rasa Chatbot', 'Sqlite'],
    link: 'https://github.com/denmarkdeni/organ_connect',
  },
  {
    id: 5,
    title: 'Vacation Jobs',
    description:
      'A web application that connects students looking for temporary jobs during holidays with companies offering short-term roles.',
    tech: ['Django', 'Sqlite', 'Razorpay', 'Bootstrap'],
    link: 'https://github.com/denmarkdeni/Vacation_Jobs',
  },
  {
    id: 6,
    title: 'Fin Finance',
    description:
      'Financial management system with budget manager, EMI calculator, payment tracker, and financial expert booking.',
    tech: ['Django', 'Sqlite', 'Tailwind'],
    link: 'https://github.com/denmarkdeni/FinFinance',
  },
  {
    id: 7,
    title: 'Be Clean Be Free',
    description:
      'Anti-drug awareness platform with anonymous reporting, counselor support, and quiz features.',
    tech: ['Django', 'Bootstrap', 'Sqlite'],
    link: 'https://github.com/denmarkdeni/BeCleanBeFree',
  },
  {
    id: 8,
    title: 'Dyslexi Mate',
    description:
      'Helps people with dyslexia by converting normal text into a dyslexic-friendly format using NLP techniques.',
    tech: ['Reportlab', 'HTML to PDF', 'Django'],
    link: 'https://github.com/denmarkdeni/DyslexiMate',
  },
  {
    id: 9,
    title: 'Ren Park',
    description:
      'A Website allows Tenants or Landlords, book or rent out parking spots, and manage all parking activities with ease.',
    tech: ['SQlite', 'HTML/CSS', 'Django'],
    link: 'https://github.com/denmarkdeni/RenPark',
  },
  {
    id: 10,
    title: 'Campus Track',
    description:
      'A high-tech web-based platform designed to streamline the academic and cultural lifecycle of college students.',
    tech: ['Sqlite', 'Bootstrap', 'Django'],
    link: 'https://github.com/denmarkdeni/CampusTrack',
  },
  {
    id: 11,
    title: 'Django Deni',
    description:
      'My Personal deployed web application that includes habit tracker and small apps.',
    tech: ['Sqlite', 'CSS', 'Django'],
    link: 'https://djangodeni.pythonanywhere.com/',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);

  return (
    <section className="py-12 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#22D3EE]">Projects</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#3770c8] bg-opacity-10 rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#22D3EE]">
                {project.title}
              </h3>
              <p className="text-[#FFF] mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-[#22D3EE] bg-opacity-20 text-[#111] text-sm px-2 py-1 rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#3770c8] hover:text-[#1E3A8A] hover:underline transition duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {projectData.length > 3 && (
          <div className="mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#22D3EE] text-[#1E3A8A] px-5 py-2 rounded-lg hover:bg-[#1E3A8A] hover:text-[#F5F5F5] transition duration-300"
            >
              {showAll ? 'Show Less' : 'See My 8 More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
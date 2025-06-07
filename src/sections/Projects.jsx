import React from 'react';

const projectData = [
  {
    id:1,
    title: 'Fake Detect',
    description:
      'E-commerce platform that detects counterfeit products based on seller history and customer review, feedback.',
    tech: ['Django', 'React', 'Sqlite','Bootstrap'],
    link: 'https://github.com/denmarkdeni/FakeDetect',
  },
  {
    id:2,
    title: 'Estate Connect',
    description:
      'A Real Estate Web Platform to Provide Material, Cost Suggestions with machine learning model and 2D plan generation.',
    tech: ['Django', 'ML model', 'MatPlotLib','three.js'],
    link: 'https://github.com/denmarkdeni/Estate_Connect',
  },
  {
    id:3,
    title: 'Forensic Ai',
    description:
      'an AI-enhanced forensic case tracking and analysis platform designed to support investigators, analysts, and admins with digital tools.',
    tech: ['Pytesseract', 'Deepface', 'OpenCV'],
    link: 'https://github.com/denmarkdeni/ForensicAi',
  },
  {
    id:4,
    title: 'Organ Connect',
    description:
      'A Website connecting Doctors, Donors, Recipients for Organ Donation and Transplantation, Guiding the users through responsive chat bot.',
    tech: ['Django', 'Rasa Chatbot', 'Sqlite'],
    link: 'https://github.com/denmarkdeni/organ_connect',
  },
  {
    id:5,
    title: 'Vacation Jobs',
    description:
      'a web application that connects students looking for temporary jobs during holidays with companies offering short-term roles.',
    tech: ['Django', 'Sqlite', 'Razorpay', 'Bootstrap'],
    link: 'https://github.com/denmarkdeni/Vacation_Jobs',
  },
  {
    id:6,
    title: 'Fin Finance',
    description:
      'Financial management system with budget manager, EMI calculator, payment tracker, and financial expert booking.',
    tech: ['Django', 'Sqlite', 'Tailwind'],
    link: 'https://github.com/denmarkdeni/Vacation_Jobs',
  },
  {
    id:7,
    title: 'Be Clean Be Free',
    description:
      'Anti-drug awareness platform with anonymous reporting, counselor support, and quiz features.',
    tech: ['Django', 'Bootstrap', 'Sqlite'],
    link: 'https://github.com/denmarkdeni/BeCleanBeFree',
  },
  {
    id:8,
    title: 'Dyslexi Mate',
    description:
      'Helps people with dyslexia by converting normal text into a dyslexic-friendly format using NLP techniques.',
    tech: ['Reportlab', 'HTML to PDF', 'Django'],
    link: 'https://github.com/denmarkdeni/Vacation_Jobs',
  },
  {
    id:9,
    title: 'Ren Park',
    description:
      'A Website allows Tenants or Landlords, book or rent out parking spots, and manage all parking activities with ease.',
    tech: ['SQlite', 'HTML/CSS', 'Django'],
    link: 'https://github.com/denmarkdeni/RenPark',
  },
  {
    id:10,
    title: 'Campus Track',
    description:
      'A high-tech web-based platform designed to streamline the academic and cultural lifecycle of college students.',
    tech: ['Sqlite', 'Bootstrap', 'Django'],
    link: 'https://github.com/denmarkdeni/CampusTrack',
  },
  {
    id:11,
    title: 'Django Deni',
    description:
      'My Personal deployed web application that includes habit tracker and small apps.',
    tech: ['Sqlite', 'CSS', 'Django'],
    link: 'https://djangodeni.pythonanywhere.com/',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 py-12 px-4" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

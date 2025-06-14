import React from 'react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiJavascript, SiMongodb, SiSqlite } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="py-12 px-4" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#22D3EE]">Skills & Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          <SkillItem icon={<FaPython size={40} />} label="Python" />
          <SkillItem icon={<SiDjango size={40} />} label="Django" />
          <SkillItem icon={<FaReact size={40} />} label="React" />
          <SkillItem icon={<SiTailwindcss size={40} />} label="Tailwind CSS" />
          <SkillItem icon={<SiJavascript size={40} />} label="JavaScript" />
          <SkillItem icon={<FaHtml5 size={40} />} label="HTML5" />
          <SkillItem icon={<FaCss3Alt size={40} />} label="CSS3" />
          <SkillItem icon={<SiSqlite size={40} />} label="SQLite" />
          <SkillItem icon={<SiMongodb size={40} />} label="MongoDB" />
          <SkillItem icon={<FaDocker size={40} />} label="Docker" />
          <SkillItem icon={<FaGithub size={40} />} label="GitHub" />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-[#22D3EE] mb-2 hover:text-[#1E3A8A] transition duration-300">{icon}</div>
    <p className="text-[#F5F5F5] font-medium hover:text-[#22D3EE] transition duration-300">{label}</p>
  </div>
);

export default Skills;
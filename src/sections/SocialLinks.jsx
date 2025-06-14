import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaReddit,
  FaHackerrank,
  FaStackOverflow,
} from 'react-icons/fa';
import { SiLeetcode, SiGmail, SiSololearn, SiGeeksforgeeks } from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaGithub />,
    link: 'https://github.com/denmarkdeni',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/maria-deniston/',
    label: 'LinkedIn',
  },
  {
    icon: <FaTwitter />,
    link: 'https://x.com/Deniston003',
    label: 'Twitter',
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/maria.deniston',
    label: 'Instagram',
  },
  {
    icon: <FaReddit />,
    link: 'https://www.reddit.com/user/denmark_019/',
    label: 'Reddit',
  },
  {
    icon: <FaHackerrank />,
    link: 'https://www.hackerrank.com/profile/mariadeniston111',
    label: 'HackerRank',
  },
  {
    icon: <SiLeetcode />,
    link: 'https://leetcode.com/u/denmarkdeni/',
    label: 'LeetCode',
  },
  {
    icon: <FaStackOverflow />,
    link: 'https://stackoverflow.com/users/29881014/maria-deniston',
    label: 'Stack Overflow',
  },
  {
    icon: <SiSololearn />,
    link: 'https://www.sololearn.com/en/profile/33061963',
    label: 'SoloLearn',
  },
  {
    icon: <SiGeeksforgeeks />,
    link: 'https://www.geeksforgeeks.org/user/mariadenie7n5/',
    label: 'GeeksforGeeks',
  },
  {
    icon: <SiGmail />,
    link: 'mailto:mariadeniston111@gmail.com',
    label: 'Gmail',
  },
];

const SocialLinks = () => {
  return (
    <section className="py-12 px-4" id="socials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#22D3EE]">Connect with Me</h2>
        <p className="text-[#F5F5F5] mb-6">Let’s build something great together 🚀</p>

        <div className="flex flex-wrap justify-center gap-6 text-3xl text-[#22D3EE]">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFF] transition-transform transform hover:scale-125"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
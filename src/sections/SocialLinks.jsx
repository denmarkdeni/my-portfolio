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
    link: 'https://github.com/denny',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    link: 'https://linkedin.com/in/denny',
    label: 'LinkedIn',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/denny',
    label: 'Twitter',
  },
  {
    icon: <FaInstagram />,
    link: 'https://instagram.com/denny',
    label: 'Instagram',
  },
  {
    icon: <FaReddit />,
    link: 'https://reddit.com/user/denny',
    label: 'Reddit',
  },
  {
    icon: <FaHackerrank />,
    link: 'https://www.hackerrank.com/denny',
    label: 'HackerRank',
  },
  {
    icon: <SiLeetcode />,
    link: 'https://leetcode.com/denny',
    label: 'LeetCode',
  },
  {
    icon: <FaStackOverflow />,
    link: 'https://stackoverflow.com/users/denny',
    label: 'Stack Overflow',
  },
  {
    icon: <SiSololearn />,
    link: 'https://www.sololearn.com/profile/denny',
    label: 'SoloLearn',
  },
  {
    icon: <SiGeeksforgeeks />,
    link: 'https://auth.geeksforgeeks.org/user/denny',
    label: 'GeeksforGeeks',
  },
  {
    icon: <SiGmail />,
    link: 'mailto:denny@example.com',
    label: 'Gmail',
  },
];

const SocialLinks = () => {
  return (
    <section className="bg-white py-12 px-4" id="socials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Connect with Me</h2>
        <p className="text-gray-600 mb-6">Let’s build something great together 🚀</p>

        <div className="flex flex-wrap justify-center gap-6 text-3xl text-blue-600">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800 transition-transform transform hover:scale-125"
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

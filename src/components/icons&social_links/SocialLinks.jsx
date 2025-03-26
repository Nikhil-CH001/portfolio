import React from 'react';

const socialData = [
  { name: 'GitHub', url: 'https://github.com/Nikhil-CH001', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Twitter/X', url: 'https://x.com/Nikhil_CH001', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikhil-chaudhary-4595b0345/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
];

const SocialLinks = ({ className, iconSize = 'w-6 h-6 sm:w-8 sm:h-8' }) => (
  <ul className={className}>
    {socialData.map((social, index) => (
      <li key={index}>
        <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-300 transition-colors">
          <img src={social.icon} alt={social.name} className={iconSize} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
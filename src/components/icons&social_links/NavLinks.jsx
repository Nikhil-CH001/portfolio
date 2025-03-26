import React from 'react';

const navLinksData = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#qualification', label: 'Qualification' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const NavLinks = ({ className, onLinkClick }) => (
  <ul className={className}>
    {navLinksData.map((link, index) => (
      <li key={index} className="h-14 hover:bg-[#004d69] transition-colors lg:h-auto lg:hover:bg-transparent">
        <a
          href={link.href}
          className="flex items-center h-full px-6 hover:cursor-pointer lg:px-0 lg:hover:text-[#ff7b02] lg:transition-colors"
          onClick={onLinkClick}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

export default NavLinks;
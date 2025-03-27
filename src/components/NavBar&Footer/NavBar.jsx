import { useState } from 'react';
import SocialLinks from '../icons&social_links/SocialLinks';
import NavLinks from '../icons&social_links/NavLinks';
import Logo from '../icons&social_links/Logo';

function NavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      {/* Add Unicons for toggle buttons */}
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      <nav className="fixed top-0 left-0 w-full h-16 sm:h-20 grid place-items-center z-50 bg-[#003347] shadow-lg">
        <div className="container mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8 max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          {/* Logo */}
          <Logo />
          {/* Nav Links - Desktop */}
          <NavLinks
            className="hidden lg:flex gap-4 xl:gap-8 text-white text-base md:text-lg xl:text-xl font-bold"
            onLinkClick={() => {}}
          />
          {/* Social Links - Desktop */}
          <SocialLinks className="hidden lg:flex gap-4" />
          {/* Toggle Buttons */}
          <button
            onClick={toggleMobileNav}
            className={`${isMobileNavOpen ? 'hidden' : 'block'} lg:hidden text-2xl sm:text-3xl text-white hover:cursor-pointer`}
            id="nav__toggle-open"
          >
            <i className="uil uil-bars" />
          </button>
          <button
            onClick={toggleMobileNav}
            className={`${isMobileNavOpen ? 'block' : 'hidden'} lg:hidden text-2xl sm:text-3xl text-white hover:cursor-pointer`}
            id="nav__toggle-close"
          >
            <i className="uil uil-multiply" />
          </button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 sm:top-20 right-0 w-64 bg-[#003347] shadow-2xl transition-all duration-300 ease-in-out lg:hidden z-50 ${
          isMobileNavOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        id="mobile-nav"
      >
        <NavLinks
          className="flex flex-col text-white text-base sm:text-lg font-bold"
          onLinkClick={toggleMobileNav}
        />
        {/* Social Links - Mobile */}
        <SocialLinks className="flex justify-center gap-6 py-4 bg-[#00293b]" />
      </div>
    </>
  );
}

export default NavBar;
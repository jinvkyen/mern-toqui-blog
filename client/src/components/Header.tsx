import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu after navigation
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className='w-full bg-toquiPrimary'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-4 flex justify-between items-center'>
              {/* Logo */}
              {/* link to Home */}
        <Link to='/' className='flex items-center justify-center space-x-2'>
          <img src='/assets/rabbit.png' alt='Toqui Co. Logo' className='h-12 w-auto scale-x-[-1]' />
          <span className='text-3xl font-bold text-white'>Toqui Co.</span>
        </Link>

        {/* Hamburger button for mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-toquiPrimary focus:outline-none'
            aria-label='Toggle navigation'>
            {isOpen ? (
              // X (close) icon
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              // Hamburger icon
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className='hidden md:flex space-x-12'>
          <NavLink
            to='/'
            end
            className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-200")}>
            Home
          </NavLink>
          <NavLink
            to='/timeline'
            className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-200")}>
            Timeline
          </NavLink>
          <NavLink
            to='/fun-facts'
            className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-200")}>
            Fun Facts
          </NavLink>
          <NavLink
            to='/highlights'
            className={({ isActive }) => (isActive ? "text-white font-bold" : "text-gray-200")}>
            Highlights
          </NavLink>
        </nav>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <nav className='md:hidden bg-white border-t'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-1'>
            <NavLink
              to='/'
              end
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "block py-2 text-toquiPrimary font-semibold" : "block py-2 text-gray-600"
              }>
              Home
            </NavLink>
            <NavLink
              to='/timeline'
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "block py-2 text-toquiPrimary font-semibold" : "block py-2 text-gray-600"
              }>
              Timeline
            </NavLink>
            <NavLink
              to='/fun-facts'
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "block py-2 text-toquiPrimary font-semibold" : "block py-2 text-gray-600"
              }>
              Fun Facts
            </NavLink>
            <NavLink
              to='/highlights'
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "block py-2 text-toquiPrimary font-semibold" : "block py-2 text-gray-600"
              }>
              Highlights
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

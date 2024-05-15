import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/Logo';
import MenuIcon from '../assets/MenuIcon';
import SearchIcon from '../assets/SearchIcon';
import CloseIcon from './CloseIcon';

const navbarOptions = [
  {
    id: 1,
    name: 'Home',
    link: 'home',
  },
  {
    id: 2,
    name: 'About Us',
    link: 'about-us',
  },
  {
    id: 3,
    name: 'Services',
    link: 'services',
  },
  {
    id: 4,
    name: 'Portfolio',
    link: 'portfolio',
  },
  {
    id: 5,
    name: 'Contact Us',
    link: 'contact-us',
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 z-50 bg-black text-white font-poppins md:py-4 bg-navbarGradient">
      <div className="flex items-center max-sm:mx-4 justify-between max-w-7xl mx-auto">
        <Logo className="w-[40%] sm:w-[20%] lg:w-fit" />
        <div className="flex p-3 gap-1 md:gap-2 max-sm:hidden lg:gap-3 sm:text-sm md:text-base lg:text-xl items-center">
          {navbarOptions.map((option) => (
            <Link
              to={option.link}
              className="py-2 px-2 lg:px-4 text-center cursor-pointer hover:text-primary"
              key={option.id}
              spy
              smooth
              offset={-100}
              duration={500}
              activeClass="active"
            >
              {option.name}
            </Link>
          ))}
          <SearchIcon className="max-lg:w-16" />
        </div>
        <MenuIcon
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={classNames(
          'h-screen w-full bg-mobileMenu2 absolute top-0 z-[60] transition-all translate-x-0 flex items-center justify-center sm:hidden',
          {
            'translate-x-full': !isMenuOpen,
          }
        )}
      >
        <CloseIcon
          className="absolute top-7 right-7"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="items-center gap-10 flex-col flex">
          {navbarOptions.map((option) => (
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              key={option.id}
              to={option.link}
              className="px-5 py-2 w-fit text-lg"
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

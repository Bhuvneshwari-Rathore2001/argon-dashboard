import { Link } from 'react-router-dom';
import Logo from '../assets/Logo';
import MenuIcon from '../assets/MenuIcon';
import SearchIcon from '../assets/SearchIcon';
import { PATH_AGENCY } from '../routes';

const navbarOptions = [
  {
    id: 1,
    name: 'Home',
    link: PATH_AGENCY.root,
  },
  {
    id: 2,
    name: 'About Us',
    link: PATH_AGENCY.aboutUs,
  },
  {
    id: 3,
    name: 'Services',
    link: PATH_AGENCY.services,
  },
  {
    id: 4,
    name: 'Portfolio',
    link: PATH_AGENCY.portfolio,
  },
  {
    id: 5,
    name: 'Contact Us',
    link: PATH_AGENCY.contactUs,
  },
];

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-black text-white font-poppins py-4 bg-navbarGradient">
      <div className="flex items-center max-sm:mx-4 justify-between max-w-7xl mx-auto">
        <Logo className="w-[40%] sm:w-[20%] lg:w-fit" />
        <div className="flex p-3 gap-1 md:gap-2 max-sm:hidden lg:gap-3 sm:text-sm md:text-base lg:text-xl items-center">
          {navbarOptions.map((option) => (
            <Link
              className="py-2 px-2 lg:px-4 text-center hover:text-primary"
              to={option.link}
              key={option.id}
            >
              {option.name}
            </Link>
          ))}
          <SearchIcon className="max-lg:w-16" />
        </div>
        <MenuIcon className="sm:hidden" />
      </div>
      {/* Mobile Menu */}
    </div>
  );
};

export default Navbar;

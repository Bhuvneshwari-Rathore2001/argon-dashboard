import Logo from '../assets/Logo';
import SearchIcon from '../assets/SearchIcon';
import { Link } from 'react-router-dom';
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
    <div className="w-full py-4 bg-navbarGradient">
      <div className="flex items-center justify-between  max-w-7xl mx-auto">
        <Logo />
        <div className="flex p-3 gap-4 text-xl items-center">
          {navbarOptions.map((option) => (
            <Link
              className="py-2 px-4 hover:text-primary"
              to={option.link}
              key={option.id}
            >
              {option.name}
            </Link>
          ))}
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

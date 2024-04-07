import { PATH_DASHBOARD } from '../routes';
import Logo from '../assets/Logo';
import SearchIcon from '../assets/SearchIcon';
import { Link } from 'react-router-dom';

const navbarOptions = [
  {
    id: 1,
    name: 'Home',
    link: PATH_DASHBOARD.root,
  },
  {
    id: 2,
    name: 'About Us',
    link: PATH_DASHBOARD.aboutUs,
  },
  {
    id: 3,
    name: 'Services',
    link: PATH_DASHBOARD.services,
  },
  {
    id: 4,
    name: 'Portfolio',
    link: PATH_DASHBOARD.portfolio,
  },
  {
    id: 5,
    name: 'Contact Us',
    link: PATH_DASHBOARD.contactUs,
  },
];

const Navbar = () => {
  return (
    <div className="w-full py-4 bg-navbarGradient">
      <div className="flex items-center justify-between  max-w-7xl mx-auto">
        <Logo />
        <div className="flex p-3 gap-4 text-xl items-center">
          {navbarOptions.map((option) => (
            <Link className="py-2 px-4" to={option.link} key={option.id}>
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

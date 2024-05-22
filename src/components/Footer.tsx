import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import GithubIcon from '../assets/GithubIcon';
import LinkedInIcon from '../assets/LinkedInIcon';
import { navbarOptions } from './Navbar';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl max-2xl:px-6 m-auto">
      <div className="font-semibold lg:text-6xl md:text-5xl text-4xl text-primary md:pb-5 max-md:pb-2">
        BR
      </div>
      <div className="font-normal md:text-sm max-md:text-xs pb-1">
        CREATIVE AGENCY
      </div>
      <div className="border-2 border-white w-20 "></div>
      <div className="flex md:gap-6 max-md:gap-3 font-medium md:text-xl max-md:text-xs text-primary md:pt-6 max-md:pt-4 cursor-pointer">
        {navbarOptions.map((option) => (
          <ScrollLink to={option.link} key={option.id}>
            {option.name}
          </ScrollLink>
        ))}
      </div>
      <div className="font-light md:text-xl max-md:text-base pt-5 max-md:text-center">
        Thank you for choosing us to bring your vision to life!
      </div>
      <div className="flex gap-7 pt-20 items-center justify-center">
        <Link
          to="https://www.linkedin.com/in/bhuvneshwari-rathore-86190b287/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/Bhuvneshwari-Rathore2001" target="_blank">
          <GithubIcon />
        </Link>
      </div>
      <div className="font-light text-sm md:pt-48 max-md:pt-5 max-md:pb-6 md:pb-9">
        BR Agency | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

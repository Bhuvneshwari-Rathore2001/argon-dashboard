import LinkedInIcon from '../assets/LinkedInIcon';
import WhatsAppIcon from '../assets/WhatsAppIcon';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-semibold text-6xl text-primary pb-5">BR</div>
      <div className="font-normal text-sm pb-1">CREATIVE AGENCY</div>
      <div className="border-2 border-white w-20 "></div>
      <div className="flex gap-6 font-medium text-xl text-primary pt-6">
        <div>Categories</div>
        <div>About</div>
        <div>Services</div>
        <div>Portfolio</div>
        <div>Support</div>
      </div>
      <div className="font-light text-xl pt-5">
        Thank you for choosing us to bring your vision to life!
      </div>
      <div className="flex gap-7 pt-20">
        <WhatsAppIcon />
        <LinkedInIcon />
      </div>
      <div className="font-light text-sm pt-48 pb-20">
        BR Agency | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

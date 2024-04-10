import AddressIcon from '../assets/AddressIcon';
import CallIcon from '../assets/CallIcon';
import MailIcon from '../assets/MailIcon';

const GetInTouch = () => {
  return (
    <div className="bg-getInTouchGradient">
      <div className="max-w-7xl m-auto pt-44 flex gap-36">
        <div className="flex flex-col gap-7">
          <div className="font-bold text-5xl">
            GET IN <span className="text-primary">TOUCH</span>
          </div>
          <div className="border-2 border-white w-24"></div>
          <div className="font-light text-xl">
            Reach out to us today! We&apos;re here to transform your vision into
            reality with our expertise and creativity. Let&apos;s create
            something amazing together
          </div>
          <div className="flex gap-7 items-center">
            <AddressIcon />
            <div className="flex flex-col">
              <div className="font-bold text-xl">Office Address</div>
              <div className="font-normal text-base text-primary">
                Jaipur, Rajasthan, India
              </div>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <CallIcon />
            <div className="flex flex-col">
              <div className="font-bold text-xl">Call Us</div>
              <div className="font-normal text-base text-primary">
                (+91) 77 371 918 11
              </div>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <MailIcon />
            <div className="flex flex-col">
              <div className="font-bold text-xl">Mail Us</div>
              <div className="font-normal text-base text-primary">
                bhuvneshwarirathore4@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

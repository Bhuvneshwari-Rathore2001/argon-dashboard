import { useState } from 'react';
import AddressIcon from '../assets/AddressIcon';
import CallIcon from '../assets/CallIcon';
import MailIcon from '../assets/MailIcon';

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleContactForm = () => {
    const data = { name, email, msg };
    console.log(data);
  };

  return (
    <div className="bg-getInTouchGradient pb-32">
      <div className="max-w-5xl m-auto pt-44 flex gap-36 justify-between">
        <div className="flex flex-col gap-7 max-w-lg">
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
        <div className="bg-inputGradient w-2/5 p-12 h-full rounded-3xl">
          <div className="flex flex-col gap-5">
            <div className="font-normal text-base">YOUR NAME</div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
            <div className="font-normal text-base">YOUR EMAIL</div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
            <div className="font-normal text-base">YOUR MESSAGE</div>
            <textarea
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="w-full bg-transparent h-44 border-white border placeholder:text-blue-500 px-2 py-2 text-blue-500 resize-none"
            ></textarea>
          </div>
          <div className="flex items-center mt-5 justify-center">
            <button
              onClick={handleContactForm}
              className="px-5 py-2 bg-[#6D95FC] text-[#111728] font-medium text-base w-fit"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

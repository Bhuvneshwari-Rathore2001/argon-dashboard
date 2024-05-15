import { useState } from 'react';
import { Element } from 'react-scroll';
import AddressIcon from '../assets/AddressIcon';
import CallIcon from '../assets/CallIcon';
import MailIcon from '../assets/MailIcon';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({ name: '', email: '' });

  // Function to validate the email address
  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@&*()-+!^$]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Handle form input changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate email and set error message if invalid
    if (name === 'email') {
      if (validateEmail(value)) {
        setError((prevData) => ({
          ...prevData,
          email: '',
        }));
      } else {
        setError((prevData) => ({
          ...prevData,
          email: 'Invalid Email',
        }));
      }
    } else {
      if (name === 'name' && value.length >= 3) {
        setError((prevData) => ({
          ...prevData,
          name: '',
        }));
      } else {
        setError((prevData) => ({
          ...prevData,
          name: 'Minimum 3 letters required',
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!error.email && !error.name) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <Element name="contact-us">
      <div className="bg-getInTouchGradient lg:pb-24 md:pb-16 pb-7">
        <div className="max-w-5xl max-2xl:px-6 m-auto md:pt-40 max-md:pt-12 flex max-md:flex-col max-md:items-center md:gap-12 max-md:gap-7 justify-between md:flex-1">
          <div className="flex flex-col md:gap-7 max-md:gap-4 md:w-2/4 max-md:items-center max-md:justify-center">
            <div className="font-bold lg:text-5xl md:text-4xl text-3xl">
              GET IN <span className="text-primary">TOUCH</span>
            </div>
            <div className="border-2 border-white w-1/4" />
            <div className="font-light lg:text-xl md:text-lg text-base max-md:text-center">
              Reach out to us today! We&apos;re here to transform your vision
              into reality with our expertise and creativity. Let&apos;s create
              something amazing together
            </div>
            <div className="max-sm:px-4 max-md:my-8 flex gap-6 flex-col">
              <div className="flex lg:gap-7 max-lg:gap-5 items-center md:w-full">
                <AddressIcon className="md:w-6 md:h-9 max-md:w-5 max-md:h-8" />
                <div className="flex flex-col">
                  <div className="font-bold md:text-lg max-md:text-sm">
                    Office Address
                  </div>
                  <div className="font-normal md:text-base max-md:text-xs text-primary">
                    Jaipur, Rajasthan, India
                  </div>
                </div>
              </div>
              <div className="flex lg:gap-7 max-lg:gap-5 items-center md:w-full">
                <CallIcon className="md:w-7 md:h-7 max-md:w-6 max-md:h-6" />
                <div className="flex flex-col">
                  <div className="font-bold md:text-lg max-md:text-sm">
                    Call Us
                  </div>
                  <div className="font-normal md:text-base max-md:text-xs text-primary">
                    (+91) 77 371 918 11
                  </div>
                </div>
              </div>
              <div className="flex lg:gap-7 max-lg:gap-5 items-center md:w-full">
                <MailIcon className="md:w-8 md:h-6 max-md:w-7 max-md:h-5" />
                <div className="flex flex-col">
                  <div className="font-bold md:text-lg max-md:text-sm">
                    Mail Us
                  </div>
                  <div className="font-normal md:text-base max-md:text-xs text-primary">
                    bhuvneshwarirathore4@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-md:items-center max-md:justify-center">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="bg-inputGradient lg:p-12 md:p-9 max-md:py-6 max-md:px-4 flex items-center flex-col rounded-3xl max-md:w-full"
            >
              <div className="flex flex-col w-full max-md:px-3 max-md:py-2">
                <div className="flex flex-col gap-2">
                  <div className="font-normal md:text-base max-md:text-sm">
                    YOUR NAME
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full py-4 px-6 bg-transparent border-white border placeholder:text-blue-500 text-blue-500"
                  />
                  {error.name && (
                    <div className="text-red-600 text-sm">{error.name}</div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal lg:text-base md:text-base text-sm md:mt-7 max-md:mt-5">
                    YOUR EMAIL
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full py-4 px-6 bg-transparent border-white border placeholder:text-blue-500 text-blue-500"
                  />
                  {error.email && (
                    <div className="text-red-600 text-sm">{error.email}</div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-normal lg:text-base md:text-base text-sm md:mt-7 max-md:mt-5">
                    YOUR MESSAGE
                  </div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full bg-transparent md:h-44 max-md:h-32 border-white border placeholder:text-blue-500 py-4 px-6 text-blue-500 resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="px-5 py-2 bg-[#6D95FC] md:mt-7 max-md:mt-5 text-[#111728] font-medium lg:text-base md:text-base text-sm w-fit"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default GetInTouch;

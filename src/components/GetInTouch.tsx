import { useState } from 'react';
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="bg-inputGradient w-2/5 p-12 h-full flex items-center flex-col rounded-3xl"
        >
          <div className="flex flex-col gap-5">
            <div className="font-normal text-base">YOUR NAME</div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
            {error.name && (
              <div className="text-red-600 text-sm">{error.name}</div>
            )}
            <div className="font-normal text-base">YOUR EMAIL</div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
            {error.email && (
              <div className="text-red-600 text-sm">{error.email}</div>
            )}
            <div className="font-normal text-base">YOUR MESSAGE</div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              required
              className="w-full bg-transparent h-44 border-white border placeholder:text-blue-500 px-2 py-2 text-blue-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-[#6D95FC] mt-5 text-[#111728] font-medium text-base w-fit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;

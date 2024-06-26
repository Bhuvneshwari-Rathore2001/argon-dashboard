import TickIcon from '../assets/TickIcon';

const WhyUs = () => {
  return (
    <div>
      <div className="lg:max-w-7xl max-2xl:px-6 m-auto lg:flex md:flex justify-between gap-20 md:py-16 py-12 ">
        <div className="flex flex-col md:items-start items-center md:text-left text-center">
          <div className="font-normal lg:text-xl md:text-lg text-base">
            Why us?
          </div>
          <div className="w-28 h-0.5 border-2 border-primary mt-2"></div>
          <div className="font-bold lg:text-6xl md:text-5xl text-4xl mt-6 max-md:mt-5">
            4 YEARS OF <span className="text-primary">EXPERIENCE</span> AS A
            CREATIVE AGENCY
          </div>
          <button className="font-normal lg:text-base text-sm lg:mt-20 mt-6 max-md:mt-5 w-fit px-7 py-2 border-2 border-primary hover:bg-primary hover:text-black">
            READ MORE
          </button>
        </div>

        <div className="md:pt-16 pt-7 lg:text-xl md:text-lg sm:text-base font-light flex flex-col max-md:items-center">
          <div className="max-md:text-center">
            We&apos;ve celebrated countless success stories, partnering with
            diverse clients across various industries.
          </div>
          <div className="flex flex-col mt-5 md:mt-8">
            <div className="flex gap-3 items-center">
              <TickIcon />
              Happy Customer
            </div>
            <div className="flex gap-3 items-center">
              <TickIcon />
              Experienced Team
            </div>
            <div className="flex gap-3 items-center">
              <TickIcon />
              Modern Technology
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

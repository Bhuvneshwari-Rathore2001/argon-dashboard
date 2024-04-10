import TickIcon from '../assets/TickIcon';

const WhyUs = () => {
  return (
    <div className="">
      <div className="max-w-7xl m-auto flex justify-between gap-20 pt-16 pb-60 ">
        <div className="flex flex-col ">
          <div className="font-normal text-xl">why us?</div>
          <div className="w-28 h-[2px] border-2 border-primary mt-2"></div>
          <div className="font-bold text-6xl mt-6">
            4 YEARS OF <span className="text-primary">EXPERIENCE</span> AS A
            CREATIVE AGENCY
          </div>
          <button className="font-normal text-base mt-20 w-fit px-7 py-2 border-2 border-primary hover:bg-primary hover:text-black">
            READ MORE
          </button>
        </div>

        <div className="pt-16 text-xl font-light ">
          <div>
            We&apos;ve celebrated countless success stories, partnering with
            diverse clients across various industries.
          </div>
          <div className="flex flex-col mt-8">
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

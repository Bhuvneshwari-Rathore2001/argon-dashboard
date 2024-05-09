import { ourServices } from '../utils/constant';
import ServicesCard from './ServicesCard';

const OurServices = () => {
  return (
    <div className="max-w-7xl max-2xl:px-6 max-2xl:py-12 m-auto lg:flex flex-1 justify-between items-center">
      <div className="flex flex-col gap-3 md:gap-5 text-center lg:text-start lg:gap-11 lg:items-start items-center lg:w-1/2 w-full p-7 ">
        <div className="text-primary font-medium text-base lg:text-xl">
          OUR SERVICES
        </div>
        <div className="font-bold text-4xl md:text-5xl lg:text-7xl  ">
          Experience The Power Of
          <span className="text-primary"> Innovation.</span>
        </div>
        <div className="w-24 border-solid border-2 border-white " />
        <div className="font-light text-sm md:text-base lg:text-xl">
          Our innovative designs redefine what&apos;s possible. Experience the
          transformative impact of our solutions firsthand. Let&apos;s pioneer
          new horizons together. Discover the power of innovation with us.
        </div>
        <button className="w-2/5 h-12 font-normal text-lg border-solid border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-black">
          VIEW ALL
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {ourServices.map((service) => (
          <ServicesCard
            key={service.id}
            title={service.title}
            icon={service.icon}
            desc={service.desc}
            className={service.className}
          />
        ))}
      </div>
    </div>
  );
};
export default OurServices;

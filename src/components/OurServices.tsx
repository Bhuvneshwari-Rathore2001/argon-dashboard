import { ourServices } from '../utils/constant';
import ServicesCard from './ServicesCard';

const OurServices = () => {
  return (
    <div className="max-w-7xl m-auto flex flex-1 py-14 justify-between items-center">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="text-primary font-medium text-xl">OUR SERVICES</div>
        <div className="text-5xl font-bold ">
          Experience The Power Of
          <span className="text-primary">Innovation.</span>
        </div>
        <div className="w-24 border-solid border-2 border-white" />
        <div className="font-light text-xl">
          Our innovative designs redefine what&apos;s possible. Experience the
          transformative impact of our solutions firsthand. Let&apos;s pioneer
          new horizons together. Discover the power of innovation with us.
        </div>
        <div className="w-44 h-12 font-normal text-lg border-solid border-2 border-primary flex items-center justify-center ">
          VIEW ALL
        </div>
      </div>
      <div className="grid grid-cols-2">
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

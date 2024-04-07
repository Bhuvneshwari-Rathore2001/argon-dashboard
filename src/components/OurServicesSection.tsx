import Group from '../assets/Group';
import OurServicesGrid from './OurServicesGrid';
import RewardBox from './RewardBox';

const OurServicesSection = () => {
  return (
    <>
      <div className="flex h-1/4 text-white w-full pr-80">
        <div className="flex flex-col h-auto mt-44 mb-44 mx-80  gap-8">
          <div className="text-[#6D95FC] font-medium text-xl ">
            OUR SERVICES
          </div>
          <div className="text-5xl font-bold ">
            Experience The Power <br /> Of{' '}
            <span className="text-[#6D95FC]">Innovation. </span>
          </div>
          <div className="w-24 border-solid border-2 border-[#FFFFFF] "></div>
          <div className="font-light text-xl ">
            Lorem ipsum Neque porro quisquam est qui do <br /> lorem ipsum quia
            dolor sit amet, Neque porro elit
            <br /> NeDque porro Neque porro quisquam est qui do <br /> lorem
            ipsum quia dolor sit amets ipsum
          </div>
          <div className="w-44 h-12 font-normal text-lg border-solid border-2 border-[#6D95FC] flex items-center justify-center ">
            VIEW ALL
          </div>
        </div>

        <div>
          <OurServicesGrid />
        </div>
      </div>
      <div className="h-80 text-white bg-RewardGradient pt-20">
        <div className="flex gap-48 h-52  justify-center">
          <RewardBox name="Team Members" icon={Group} percent="50+" />
          <RewardBox name="Project Done" icon={Group} percent="200+" />
          <RewardBox name="Happy Customers" icon={Group} percent="500+" />
          <RewardBox name="Award Winning " icon={Group} percent="75+" />
        </div>
      </div>
    </>
  );
};
export default OurServicesSection;

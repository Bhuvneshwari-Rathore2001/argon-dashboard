import OurServicesGridBox from './OurServicesGridBox';

const OurServicesGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-auto h-auto mt-48 pb-36">
      <div className="bg-ServicesGridGradient w-80 h-72 p-7">
        <OurServicesGridBox />
      </div>
      <div className="bg-ServicesGridGradient w-80 h-72 p-7">
        <OurServicesGridBox />
      </div>
      <div className="bg-ServicesGridGradient w-80 h-72 p-7">
        <OurServicesGridBox />
      </div>
      <div className="bg-ServicesGridGradient w-80 h-72 p-7">
        <OurServicesGridBox />
      </div>
    </div>
  );
};

export default OurServicesGrid;

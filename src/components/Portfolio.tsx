const Portfolio = () => {
  return (
    <div className="lg:max-w-7xl m-auto max-2xl:px-6">
      <div className="flex flex-col items-center md:mt-28 max-md:mt-14 lg:gap-12 md:gap-10 gap-6">
        <div className="font-bold lg:text-5xl md:text-4xl text-3xl max-md:text-center">
          ENJOY OUR <span className="text-primary">LATEST</span> PROJECTS
        </div>
        <div className="flex gap-4 items-center">
          <div className="border-2 border-white w-24" />
          <div className="text-primary font-medium lg:text-xl md:text-lg text-base">
            OUR WORK
          </div>
          <div className="border-2 border-white w-24" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

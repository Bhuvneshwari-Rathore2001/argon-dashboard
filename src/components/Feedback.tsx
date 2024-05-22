import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  return (
    <div className="flex justify-center max-w-7xl max-2xl:px-6 m-auto md:gap-1 overflow-hidden">
      <img
        src="https://github.com/dark-venom26/Dashboard-Assignment/assets/92418471/2e2b3de4-b62f-49ea-b607-7f9f08e8e670"
        alt="girl"
        className="bg-cover bg-no-repeat bg-center max-md:hidden"
      />
      <div className="flex min-w-[50%] flex-col justify-center items-center col-span-2">
        <div className="font-bold lg:text-4xl text-3xl text-center">
          WHAT <span className="text-primary">OUR</span> CLIENTS SAY?
        </div>
        <div className="w-3/5 h-0.5 border-2 border-primary mt-3"></div>
        <div className="font-normal lg:text-xl md:text-lg text-base mt-2 mb-4 tracking-wider	">
          TESTIMONIALS
        </div>
        <FeedbackCard />
        <button className="font-normal lg:text-base text-sm mx-4 px-3 py-2 border-2 border-primary hover:bg-primary hover:text-black max-md:mb-12">
          VIEW ALL TESTIMONIALS
        </button>
      </div>
      <img
        src="https://github.com/dark-venom26/Dashboard-Assignment/assets/92418471/0ebe8050-c872-43af-a742-1eeedecbacfc"
        alt="robot"
        className="bg-cover bg-no-repeat bg-center max-md:hidden"
      />
    </div>
  );
};

export default Feedback;

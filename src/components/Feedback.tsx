import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <img
        src="/assets/FeedbackGirl.svg"
        alt="girl"
        className="bg-cover bg-no-repeat bg-center"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-6xl w-3/4 text-center">
          WHAT <span className="text-primary">OUR</span> CLIENTS SAY?
        </div>
        <div className="w-52 h-0.5 border-2 border-primary mt-4"></div>
        <div className="font-normal text-xl mt-3 mb-20 tracking-wider	">
          TESTIMONIALS
        </div>
        <FeedbackCard />
        <button className="font-normal text-base px-7 py-3 mt-11 border-2 border-primary hover:bg-primary hover:text-black">
          VIEW ALL TESTIMONIALS
        </button>
      </div>
      <img
        src="/assets/FeedbackRobot.svg"
        alt="robot"
        className="bg-cover bg-no-repeat bg-center"
      />
    </div>
  );
};

export default Feedback;

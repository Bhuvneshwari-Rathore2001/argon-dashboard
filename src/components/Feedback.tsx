import FeedbackCard from './FeedbackCard';

const Feedback = () => {
  return (
    <div className="flex gap-24 ">
      <div
        style={{ backgroundImage: "url('./assets/FeedbackGirl.svg')" }}
        className="bg-cover bg-no-repeat bg-center h-[932px] w-[652px]"
      ></div>
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-6xl">
          WHAT <span className="text-primary">OUR</span> CLIENTS SAY?
        </div>
        <div className="w-52 h-[2px] border-2 border-primary mt-4"></div>
        <div className="font-normal text-xl mt-3">TESTIMONIALS</div>
        <div className="mt-20">
          <FeedbackCard />
        </div>
        <button className="font-normal text-base px-7 py-3 mt-11 border-2 border-primary hover:bg-primary hover:text-black">
          VIEW ALL TESTIMONIALS
        </button>
      </div>
      <div
        style={{ backgroundImage: "url('./assets/FeedbackRobot.svg')" }}
        className="bg-cover bg-no-repeat bg-center h-[932px] w-[652px]"
      ></div>
    </div>
  );
};

export default Feedback;

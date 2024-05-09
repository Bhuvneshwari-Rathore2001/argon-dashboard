import GirlFeedbackCardIcon from '../assets/GirlFeedbackCardIcon';
import QuoteIcon from '../assets/QuoteIcon';

const FeedbackCard = () => {
  return (
    <div className="bg-feedbackCardGradient md:px-6 px-4 py-3 rounded-3xl md:w-5/6 w-full max-md:mx-8">
      <div className="font-light lg:text-lg text-base">
        Exceptional service! Our project exceeded expectations thanks to their
        creative vision and attention to detail.
      </div>
      <div className="flex items-center">
        <GirlFeedbackCardIcon />
        <div className="flex flex-col w-full">
          <div className="font-bold lg:text-base md:text-base text-sm">
            Aadhya Agrawal
          </div>
          <div className="font-light lg:text-sm md:text-sm text-xs text-[#FF78FA]">
            Product Designer
          </div>
        </div>
        <QuoteIcon />
      </div>
    </div>
  );
};

export default FeedbackCard;

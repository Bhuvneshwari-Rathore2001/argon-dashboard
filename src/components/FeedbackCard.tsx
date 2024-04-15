import GirlFeedbackCardIcon from '../assets/GirlFeedbackCardIcon';
import QuoteIcon from '../assets/QuoteIcon';

const FeedbackCard = () => {
  return (
    <div className="bg-feedbackCardGradient px-12 py-9 rounded-3xl">
      <div className="flex flex-col font-light text-xl w-[424px]">
        Exceptional service! Our project exceeded expectations thanks to their
        creative vision and attention to detail.
      </div>
      <div className="flex items-center mt-5">
        <GirlFeedbackCardIcon />
        <div className="flex flex-col pl-5 pr-16">
          <div className="font-bold text-xl">Aadhya Agrawal</div>
          <div className="font-light text-sm text-[#FF78FA]">
            Product Designer
          </div>
        </div>
        <QuoteIcon />
      </div>
    </div>
  );
};

export default FeedbackCard;

import GirlFeedbackCardIcon from '../assets/GirlFeedbackCardIcon';
import QuoteIcon from '../assets/QuoteIcon';

const FeedbackCard = () => {
  return (
    <div className="bg-feedbackCardGradient rounded-3xl w-[548px]">
      <div className="flex flex-col px-12 py-9 font-light text-xl">
        Exceptional service! Our project exceeded expectations thanks to their
        creative vision and attention to detail.
      </div>
      <div className="flex pt-10 px-12 items-center">
        <div>
          <GirlFeedbackCardIcon />
        </div>
        <div className="flex flex-col pl-5 pr-16">
          <div className="font-bold text-xl">Aadhya Agrawal</div>
          <div className="font-light text-sm text-[#FF78FA]">
            Product Designer
          </div>
        </div>
        <div>
          <QuoteIcon />
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

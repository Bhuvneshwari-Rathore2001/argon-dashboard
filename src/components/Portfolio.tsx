import { Element } from 'react-scroll';
import Slider from 'react-slick';

const Portfolio = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    dots: true,
    arrow: false,

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 536,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Element name="portfolio">
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
      <div className="mt-10">
        <Slider
          {...settings}
          className="[&_.slick-slide>div]:mx-4 [&_.slick-arrow]:!hidden [&_.slick-slide>div]:h-full"
        >
          <img src="/assets/Dashboard.png" alt="" />
          <img src="/assets/Billing.png" alt="" />
          <img src="/assets/Profile.png" alt="" />
          <img src="/assets/Tables.png" alt="" />
          <img src="/assets/SignIn.png" alt="" />
        </Slider>
      </div>
    </Element>
  );
};

export default Portfolio;

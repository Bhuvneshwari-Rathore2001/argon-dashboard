import { motion } from 'framer-motion';

const Banner = () => {
  const motionOptions = {
    initial: 'hidden',
    animate: 'visible',
  };

  return (
    <div className="flex h-screen">
      <div className="flex items-center z-10 max-w-7xl max-2xl:px-6 m-auto">
        <motion.div
          {...motionOptions}
          variants={{
            hidden: { x: -50, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ ease: 'easeOut', duration: 0.8 }}
          className="flex flex-col gap-3 md:gap-5 lg:gap-11 w-4/5"
        >
          <div className="text-primary font-medium text-base lg:text-xl ">
            WELCOME TO BR
          </div>
          <div className="text-4xl md:text-5xl lg:text-7xl font-bold ">
            WE ARE <span className="text-primary">CREATIVE</span> DESIGN AGENCY
          </div>
          <div className="w-36 border-2 border-primary"></div>
          <div className="font-light text-sm md:text-base lg:text-xl">
            We believe that design is more than just aesthetics – it&apos;s
            about crafting meaningful experiences that resonate with your
            audience and drive results. As a premier design agency, we
            specialize in delivering creative solutions that elevate brands and
            leave a lasting impact.
          </div>
          <button className="w-44 h-12 font-normal text-lg border-solid border-2 hover:text-black hover:bg-primary hover:border-none border-primary flex items-center justify-center">
            GET IN TOUCH
          </button>
        </motion.div>
      </div>
      <div
        // style={{
        //   background:
        //     "linear-gradient(268.78deg, rgba(109, 149, 252, 0.67) -53.1%, rgba(109, 149, 252, 0) 30.41%), url('./assets/WomenBigJewel.png') -160px",
        // }}
        className="absolute bannerGradient right-0 bg-cover h-full w-full"
      ></div>
    </div>
  );
};

export default Banner;

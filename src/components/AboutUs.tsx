import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import Robot from '../assets/Robot';

const AboutUs = () => {
  const motionOptions = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
  };

  return (
    <Element name="about-us">
      <div className="bg-aboutUsGradient">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto max-2xl:px-6 max-md:pb-14">
          <motion.div
            {...motionOptions}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="flex justify-center"
          >
            <Robot className="md:max-w-[60vw] max-md:h-[400px] max-sm:h-80 max-w-[60%] " />
          </motion.div>
          <motion.div
            {...motionOptions}
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ ease: 'easeOut', duration: 2 }}
            className="flex flex-col md:gap-6 gap-3 md:py-32 max-md:items-center"
          >
            <div className="text-primary font-medium lg:text-xl text-base">
              ABOUT US
            </div>
            <div className="lg:text-5xl md:text-4xl text-3xl font-bold max-md:text-center">
              We Bring <span className="text-primary">Creative</span> Ideas To
              Life.
            </div>
            <div className="w-24 border-solid border-2 border-white"></div>
            <div className=" font-normal lg:text-base text-sm text-primary">
              we Love Creating
            </div>
            <div className="font-light lg:text-xl md:text-base text-sm max-md:text-center">
              We&apos;re more than just designers – we&apos;re dreamers,
              innovators, and problem-solvers. Our mission is simple: to
              transform your vision into reality through the power of
              creativity.
              <br />
              <br />
              We turn ideas into impactful designs. With precision and flair, we
              breathe life into your vision. Let&apos;s create something
              extraordinary together
            </div>
            <button className="w-44 h-12 font-normal lg:text-lg text-base border-solid border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-black">
              READ MORE
            </button>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;

import AboutUs from '../components/AboutUs';
import AnalyticsSection from '../components/AnalyticsSection';
import Banner from '../components/Banner';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import OurServices from '../components/OurServices';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';


const Home = () => {
  return (
    <div className="bg-black text-white font-poppins">
      <Banner />
      <AboutUs />
      <OurServices />
      <AnalyticsSection />
      <Portfolio />
      <WhyUs />
      <Feedback />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;

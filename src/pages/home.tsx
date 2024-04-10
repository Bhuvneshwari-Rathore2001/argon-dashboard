import AboutUs from '../components/AboutUs';
import AnalyticsSection from '../components/AnalyticsSection';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import Feedback from '../components/Feedback';
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black text-white font-poppins">
      <Navbar />
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

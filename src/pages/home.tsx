import AboutUs from '../components/AboutUs';
import AnalyticsSection from '../components/AnalyticsSection';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';

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
    </div>
  );
};

export default Home;

import About from '../components/About';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Recommendations from '../components/Recommendations';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Recommendations />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;

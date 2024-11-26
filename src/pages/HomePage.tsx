import { Link } from 'react-router-dom';
import About from '../components/About';
import Gallery from '../components/Gallery/Gallery';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Recommendations from '../components/Recommendations/Recommendations';
import { data } from '../data/data';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container className='my-3'>
        <About />
        <Products />
        <Recommendations />
        <Gallery items={[...data.gallery.slice(0, 4)]} />
        <div className='d-flex justify-content-end mt-3'>
          <Link className=' btn outline-primary' to='/gallery'>
            לצפיה בעוד
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HomePage;

import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { data } from '../../data/data';
import Banner from '../Banner/Banner';
import './Hero.css';
const Hero = () => {
  return (
    <section className='hero-section'>
      <Container className='hero-container d-flex flex-column h-100 '>
        <Row className='col-sm-6 my-5'>
          <Col className='mb-5'>
            <motion.h1
              className='text-light display-4 text-sm-end'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {data.hero.title}
            </motion.h1>
            <motion.div
              className='w-100 text-sm-end'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                className='primary-button my-1'
                style={{ width: '120px' }}
              >
                {data.hero.button}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Banner />
    </section>
  );
};

export default Hero;

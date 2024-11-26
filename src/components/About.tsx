import { motion } from 'framer-motion';
import { Row, Image, Button } from 'react-bootstrap';
import { data } from '../data/data';

const About = () => {
  return (
    <Row className='justify-content-center align-items-center my-sm-5'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='col-sm-12 col-md-8 col-lg-6 text-center mt-5'
      >
        <Image src={data.about.image} style={{ height: '450px' }} fluid />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='col-sm-12 col-md-4 col-lg-6 mt-4'
      >
        <h3 className='pt-3 text-center'>{data.about.title}</h3>
        <p className='fs-5 text-body-secondary text-center px-4 '>
          {data.about.desc}
        </p>
        <div className='w-100 text-center mt-3 '>
          <Button variant='dark'> ראה עוד...</Button>
        </div>
      </motion.div>
    </Row>
  );
};

export default About;

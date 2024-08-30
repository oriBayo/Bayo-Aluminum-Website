import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { data } from '../data/data';

const About = () => {
  return (
    <Container className='my-sm-5'>
      <div className='underline left'></div>
      <Row className='justify-content-center align-items-center'>
        <Col sm={12} md={8} lg={6} className='text-center mt-5'>
          <Image src={data.about.image} style={{ height: '450px' }} fluid />
        </Col>
        <Col sm={12} md={4} lg={6} className='mt-4'>
          <h3 className='pt-3 text-center'>{data.about.title}</h3>
          <p className='fs-5 text-body-secondary text-center px-4 '>
            {data.about.desc}
          </p>
          <div className='w-100 text-center mt-3 '>
            <Button variant='dark' className=''>
              {' '}
              ראה עוד...
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

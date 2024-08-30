import { data } from '../data/data';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className='hero-section'>
      <Container className='hero-container d-flex flex-column h-100 '>
        <Row className='col-sm-6 my-5'>
          <Col className='mb-5'>
            <h1 className='text-light display-4 text-sm-end'>
              {data.hero.title}
            </h1>
            <div className='w-100 text-sm-end'>
              <Button className='mustard-color my-1' style={{ width: '120px' }}>
                {data.hero.button}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='position-absolute bottom-0 banner slide-in-right'>
        <Container>
          <h1 className='text-light text-end '>{data.hero.banner}</h1>
          <Form className='pt-2 '>
            <Row>
              {data.hero.form.map((field, index) => (
                <Col key={index} sm={12} md={3} className='p-1 '>
                  <Form.Control placeholder={field} />
                </Col>
              ))}
              <Col sm={12} md={3} className='p-1 text-sm-end'>
                <Button className='m-0 mustard-color'>
                  {data.hero.submit}
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default Hero;

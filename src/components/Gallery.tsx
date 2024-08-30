import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { data } from '../data/data';

const Gallery = () => {
  return (
    <Container>
      <h3 className='pt-3'>גלריה:</h3>
      <div className='underline right'></div>
      <Row className='py-5'>
        {data.gallery.map((item) => (
          <Col key={item.name}>
            <div className='gallery-image-wrapper'>
              <Image src={item.img} className='gallery-image' />
              <h4 className='m-0'>{item.title}</h4>
              <p className='m-0'>{item.name}</p>
              <p className='m-0'>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;

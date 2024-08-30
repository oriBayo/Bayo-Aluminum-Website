import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className='text-white py-4' style={{ backgroundColor: '#2B2C28' }}>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h3 className='h5 font-weight-bold mb-2'>חברת אלומיניום</h3>
            <p>כל הזכויות שמורות © 2024</p>
          </Col>
          <Col className='text-right'>
            <a
              href='/'
              className='text-white me-3'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              Facebook
            </a>
            <a
              href='/'
              className='text-white me-3'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              Instagram
            </a>
            <a
              href='/'
              className='text-white'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              LinkedIn
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

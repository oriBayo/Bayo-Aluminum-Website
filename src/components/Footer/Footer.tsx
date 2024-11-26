import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='text-white py-4' style={{ backgroundColor: '#2B2C28' }}>
      <Container>
        <Row>
          <Col sm={3}>
            <h3 className='h5 font-weight-bold mb-2'>ביו אלומיניום</h3>
            <p>כל הזכויות שמורות © 2024</p>
          </Col>
          <Col className='me-5 border-start border-end pe-5'>
            <p className='contact-title-footer'>
              מוכן להתחיל את הפרויקט שלך? צור איתנו קשר עוד היום!
            </p>
            <ul className='list-unstyled contact-info p-0'>
              <li>
                <span className='ms-2'>📞</span> 052-4224394
              </li>
              <li>
                <span className='ms-2'>✉️</span> bayo@aluminum.com
              </li>
              <li>
                <span className='ms-2'>🏢</span> א.תעשיה קרית מלאכי
              </li>
            </ul>
          </Col>
          <Col sm={3} className='d-flex flex-column align-items-center'>
            <h3 className='h5 font-weight-bold mb-2'>קצת עלינו</h3>
            <a
              href='/'
              className='text-white footer-icon-facebook'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <FaFacebook className='mx-2 ' />
              Facebook
            </a>
            <a
              href='/'
              className='text-white mt-2 footer-icon-instagram'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <RiInstagramFill className='mx-2' />
              Instagram
            </a>
            <a
              href='/'
              className='text-white mt-2 footer-icon-whatsapp'
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <FaWhatsapp className='mx-2' />
              WhatsApp
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

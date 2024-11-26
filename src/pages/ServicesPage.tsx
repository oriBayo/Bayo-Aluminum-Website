import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Banner from '../components/Banner/Banner';
import {
  FaWindowMaximize,
  FaDoorOpen,
  FaUmbrella,
  FaShieldAlt,
  FaGripLines,
  FaArrowsAltV,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaWindowMaximize />,
    title: 'חלונות',
    description: 'חלונות איכותיים בהתאמה אישית',
  },
  {
    icon: <FaDoorOpen />,
    title: 'דלתות',
    description: 'דלתות עמידות ומעוצבות',
  },
  {
    icon: <FaUmbrella />,
    title: 'פרגולות',
    description: 'פרגולות מסוגננות לחצר ולמרפסת',
  },
  {
    icon: <FaShieldAlt />,
    title: 'גדרות',
    description: 'גדרות אלומיניום חזקות ואסתטיות',
  },
  { icon: <FaGripLines />, title: 'שערים', description: 'שערים חזקים ועמידים' },
  {
    icon: <FaArrowsAltV />,
    title: 'תריסי גלילה',
    description: 'תריסי גלילה איכותיים ונוחים לתפעול',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className='position-relative full-height pb-5'>
      <Container className='services-page bg-body-tertiary py-5'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className='mb-5'>
            <Col md={12}>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <motion.h1
                  className='mb-3 about-title'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  ⏤ השירותים שלנו ⏤
                </motion.h1>
                <motion.h5
                  className='mb-4 about-subtitle w-75 text-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  אנו מציעים מגוון רחב של פתרונות אלומיניום איכותיים ומותאמים
                  אישית
                </motion.h5>
              </div>
            </Col>
          </Row>
        </motion.div>

        <Row>
          {services.map((service, index) => (
            <Col md={4} key={service.title} className='mb-4'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className='h-100 service-item'>
                  <Card.Body className='d-flex flex-column align-items-center text-center'>
                    <div className='service-icon mb-3'>{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className='pt-5'>
        <Banner />
      </div>
    </div>
  );
};

export default ServicesPage;

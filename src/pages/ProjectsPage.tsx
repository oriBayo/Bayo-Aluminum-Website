import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Banner from '../components/Banner/Banner';

const projects = [
  {
    title: 'פרויקט 1',
    description: 'תיאור קצר של פרויקט 1',
    image: '../images/gallery/image1.jpg',
  },
  {
    title: 'פרויקט 2',
    description: 'תיאור קצר של פרויקט 2',
    image: 'path/to/image2.jpg',
  },
  {
    title: 'פרויקט 3',
    description: 'תיאור קצר של פרויקט 3',
    image: 'path/to/image3.jpg',
  },
  {
    title: 'פרויקט 4',
    description: 'תיאור קצר של פרויקט 4',
    image: 'path/to/image4.jpg',
  },
  {
    title: 'פרויקט 5',
    description: 'תיאור קצר של פרויקט 5',
    image: 'path/to/image5.jpg',
  },
  {
    title: 'פרויקט 6',
    description: 'תיאור קצר של פרויקט 6',
    image: 'path/to/image6.jpg',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className='position-relative full-height'>
      <Container className='projects-page bg-body-tertiary py-5'>
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
                  className='mb-3 projects-title'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  ⏤ הפרויקטים שלנו ⏤
                </motion.h1>
                <motion.h5
                  className='mb-4 projects-subtitle w-75 text-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  גלריית הפרויקטים המובילים שלנו מציגה את המומחיות והחדשנות שלנו
                  בתחום האלומיניום
                </motion.h5>
              </div>
            </Col>
          </Row>
        </motion.div>

        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={project.title} className='mb-4'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card>
                  <Card.Img variant='top' src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
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

export default ProjectsPage;

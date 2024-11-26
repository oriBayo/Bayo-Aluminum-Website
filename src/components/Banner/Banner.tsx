import { motion } from 'framer-motion';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { data } from '../../data/data';
import './Banner.css';
import { useState } from 'react';
import { sendEmail } from '../../services/emailService';

const Banner = () => {
  interface User {
    name: string;
    phone: string;
    location: string;
  }

  const [user, setUser] = useState<User>({ name: '', phone: '', location: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(user);
  };

  return (
    <motion.div
      className='position-absolute bottom-0 banner'
      initial={{ x: '100%' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <h1 className='text-light text-end '>{data.banner.title}</h1>
        <Form className='pt-2' onSubmit={handleSubmit}>
          <Row>
            {data.banner.form.map((field, index) => (
              <Col key={index} sm={12} md={3} className='p-1 '>
                <Form.Control
                  placeholder={field.title}
                  onChange={(e) =>
                    setUser({ ...user, [field.key]: e.target.value })
                  }
                />
              </Col>
            ))}
            <Col sm={12} md={3} className='p-1 text-sm-end'>
              <Button className='m-0 primary-button' type='submit'>
                {data.banner.submit}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </motion.div>
  );
};

export default Banner;

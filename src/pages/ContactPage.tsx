import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Banner from '../components/Banner/Banner';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className='position-relative full-height'>
      <Container className='contact-page bg-body-tertiary py-5'>
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
                  className='mb-3 contact-title'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  ⏤ צור קשר ⏤
                </motion.h1>
                <motion.h5
                  className='mb-4 contact-subtitle w-75 text-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  אנחנו כאן לענות על כל שאלה ולסייע בכל פרויקט. צרו איתנו קשר
                  ונחזור אליכם בהקדם.
                </motion.h5>
              </div>
            </Col>
          </Row>
        </motion.div>

        <Row>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className='mb-4'>פרטי התקשרות</h3>
              <ul className='list-unstyled contact-info'>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FaPhone className='me-2' /> 052-4224394
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FaEnvelope className='me-2' /> bayo@aluminum.com
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FaMapMarkerAlt className='me-2' /> א.תעשיה קרית מלאכי
                </motion.li>
              </ul>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className='mb-4'>טופס יצירת קשר</h3>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Control type='text' placeholder='שם מלא' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control type='email' placeholder='אימייל' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control type='tel' placeholder='טלפון' />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Control as='textarea' rows={3} placeholder='הודעה' />
                </Form.Group>
                <Button className='primary-button' type='submit'>
                  שלח הודעה
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className='pt-5'>
        <Banner />
      </div>
    </div>
  );
};

export default ContactPage;

import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import aboutImage1 from '../../images/aboutPage/aboutImage1.png';
import aboutImage2 from '../../images/aboutPage/aboutImage2.png';
import './AboutPage.css';
import Banner from '../../components/Banner/Banner';

const AboutPage = () => {
  return (
    <div className='position-relative'>
      <Container className='about-page bg-body-tertiary pb-5'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className='mb-5 mt-3 '>
            <Col md={12}>
              <div className='d-flex justify-content-center align-items-center flex-column'>
                <motion.h1
                  className='mb-3 about-title'
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  ⏤ קצת עלינו ⏤
                </motion.h1>
                <motion.h5
                  className='mb-4 about-subtitle w-75'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  ביו אלומיניום, עם 40 שנות ניסיון, משלבת מקצועיות וחדשנות,
                  ומחויבת לספק פתרונות אלומיניום מותאמים אישית באיכות גבוהה
                  ושירות אישי.
                </motion.h5>
              </div>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className='justify-content-center mb-5'>
            <Col md={6}>
              <h3 className='mb-4'>המומחיות שלנו</h3>
              <p>
                אנו מתמחים ביצירת פתרונות אלומיניום בהתאמה אישית לכל פרויקט –
                מחלונות ודלתות ועד פרגולות וגדרות. הודות לניסיון הרב שצברנו, אנו
                מציעים פתרונות עמידים, איכותיים וחדשניים שמותאמים בדיוק לצרכים
                ולדרישות של לקוחותינו. עם דגש על מקצועיות, אסתטיקה ושירות אישי,
                אנחנו כאן כדי להבטיח לך תוצאה מושלמת, מהתכנון ועד ההתקנה.
              </p>
            </Col>
            <Col md={6} className='text-center'>
              <motion.img
                src={aboutImage1}
                alt='Our Work'
                className='about-image img-fluid mb-4'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className='justify-content-center mb-5'>
            <Col md={6} className='text-center'>
              <motion.img
                src={aboutImage2}
                alt='Our Team'
                className='about-image img-fluid'
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </Col>
            <Col md={6}>
              <h3 className='mb-4'>למה לבחור בנו</h3>
              <ul>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  עם ניסיון של כ-40 שנה בתחום האלומיניום, אנו מביאים איתנו ידע
                  מעמיק ומקצועיות בלתי מתפשרת לכל פרויקט.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  אנחנו מתחייבים לספק שירות אישי ומקצועי לכל אורך התהליך,
                  מהייעוץ הראשוני ועד ההתקנה הסופית.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  העבודה שלנו מתבצעת ביסודיות ובדיוק, תוך הקפדה על כל פרט קטן,
                  כדי להבטיח שהלקוחות שלנו יקבלו את המוצר הטוב ביותר, המותאם
                  לצרכיהם ולרצונותיהם.
                </motion.li>
              </ul>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Row className='justify-content-center mb-5'>
            {[
              'חלונות מותאמים אישית',
              'דלתות עמידות',
              'פרגולות מסוגננות',
              'גדרות אלומיניום',
              'שערים חזקים',
              'תריסי גלילה',
            ].map((service, index) => (
              <Col
                md={3}
                className='text-center mb-4 mx-2 service-item'
                key={service}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h4>{service}</h4>
                  <p>{/* Add description here */}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
      <div className='pt-5'>
        <Banner />
      </div>
    </div>
  );
};

export default AboutPage;

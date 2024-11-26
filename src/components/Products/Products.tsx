import { motion } from 'framer-motion';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { data } from '../../data/data';
import './Products.css';

const Products = () => {
  return (
    <section className='my-sm-5'>
      <h3 className='pt-3'>המוצרים שלנו:</h3>

      <Row xs={1} md={2} lg={3} className='g-4 mt-5'>
        {data.products.map((product, index) => (
          <Col key={product.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='h-100 border-0 product-card'>
                <Card.Img
                  variant='top'
                  src={product.image}
                  className='rounded'
                />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>
                    <b>{product.title}</b>
                  </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button className='outline-primary mt-auto'>
                    למידע נוסף
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Products;

import { data } from '../data/data';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';

const Products = () => {
  return (
    <Container className='my-sm-5'>
      <h3 className='pt-3'>המוצרים שלנו:</h3>
      <div className='underline right'></div>
      <CardGroup>
        {data.products.map((product) => (
          <Card key={product.title} className='p-3 my-4 border-0 product-card'>
            <Card.Img variant='top' src={product.image} className='rounded' />
            <Card.Body>
              <Card.Title>
                <b>{product.title}</b>
              </Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button className='mustard-color d-block'>למידע נוסף</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default Products;

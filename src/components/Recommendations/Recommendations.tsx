import { Carousel, Card, Row, Col } from 'react-bootstrap';
import { data } from '../../data/data';
import { FaQuoteLeft } from 'react-icons/fa';

const Recommendations = () => {
  const groupedCards = data.Recommendations.reduce<
    Array<typeof data.Recommendations>
  >((acc, _, index, array) => {
    if (index % 3 === 0) {
      acc.push(array.slice(index, index + 3));
    }
    return acc;
  }, []);

  return (
    <div className='my-5'>
      <h3 className='pt-3 text-start ms-5'>המלצות של לקוחות:</h3>
      <Carousel className='my-5'>
        {groupedCards.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className='my-4'>
              {group.map((card) => (
                <Col key={card.name} xl={4} lg={6} md={6}>
                  <Card
                    className='m-1 px-sm-5 px-2 py-3 border-0 mb-3'
                    style={{ minHeight: '200px' }}
                  >
                    <FaQuoteLeft className='h3 text-body-tertiary' />
                    <p className='text-end m-1'>{card.description}</p>
                    <Card.Title>{card.name}</Card.Title>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Recommendations;

import { Row, Col } from 'react-bootstrap';
import './Gallery.css';
import GalleryItem from '../GalleryItem';

const Gallery = ({ items }: { items: any[] }) => {
  return (
    <div className='mt-5 '>
      <h3 className='p-3 mb-4 text-center'>גלריה עבודות אלומיניום</h3>

      <Row className='g-4'>
        {items.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={item.name}>
            {<GalleryItem index={index} item={item} />}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;

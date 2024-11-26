import { motion } from 'framer-motion';
import { Image } from 'react-bootstrap';
import GalleryModal from './GalleryModal';

interface GalleryItemProps {
  index: number;
  item: any;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ index, item }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className='gallery-item'>
          <Image
            src={item.img}
            alt={item.title}
            className='gallery-image rounded'
          />
          <div className='gallery-overlay'>
            <h5>{item.title}</h5>
            <p className='small'>{item.name}</p>
            <p className='small'>{item.description}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GalleryItem;

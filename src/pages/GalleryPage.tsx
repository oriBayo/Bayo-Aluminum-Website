import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import Banner from '../components/Banner/Banner';
import { data } from '../data/data';
import { Container } from 'react-bootstrap';

const GalleryPage = () => {
  return (
    <div className='position-relative full-height'>
      <Container>
        <Gallery items={[...data.gallery]} />
      </Container>
      <Banner />
    </div>
  );
};

export default GalleryPage;

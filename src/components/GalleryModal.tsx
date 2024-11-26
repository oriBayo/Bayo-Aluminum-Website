import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const GalleryModal = () => {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton onClick={() => setShow(false)}>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default GalleryModal;

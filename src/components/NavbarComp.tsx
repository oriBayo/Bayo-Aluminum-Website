import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FaPhone } from 'react-icons/fa6';
import { data } from '../data/data';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComp = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary pt-0'>
      <Container>
        <Navbar.Brand href='#home' className='mx-auto p-0'>
          ביו אלומיניום
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className='mt-2 p-2'
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement='end'
        >
          <Offcanvas.Header>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              ביו אלומיניום
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-start flex-grow-1 pe-3'>
              {data.navbar.titles.map((nav) => (
                <LinkContainer key={nav.title} to={nav.route}>
                  <Nav.Link href='#action1'>{nav.title}</Nav.Link>
                </LinkContainer>
              ))}
              {/* <Nav.Link href='#action1'>בית</Nav.Link>
              <Nav.Link href='#action2'>אודות</Nav.Link>
              <Nav.Link href='#action2'>גלריה</Nav.Link>
              <Nav.Link href='#action2'>שירותים</Nav.Link>
              <Nav.Link href='#action2'>המלצות</Nav.Link>
              <Nav.Link href='#action2'>צור קשר</Nav.Link> */}
            </Nav>
            <Nav>
              <Button
                variant='outline-success'
                className='justify-self-end py-sm-0 mt-2 ms-5'
              >
                <FaPhone className='ms-1' />
                {data.navbar.phoneNumber}
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

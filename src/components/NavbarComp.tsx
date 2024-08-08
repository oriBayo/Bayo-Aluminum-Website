
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


const NavbarComp = () => {
return (
    <Navbar expand='lg'  className='bg-body-tertiary pt-0 mb-3'>
        <Container className='d-flex align-items-center'>
          <Navbar.Brand href="#home" className='ms-3 p-0'>ביו אלומיניום</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  ביו אלומיניום
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1">בית</Nav.Link>
                  <Nav.Link href="#action2">אודות</Nav.Link>
                  <Nav.Link href="#action2">גלריה</Nav.Link>
                  <Nav.Link href="#action2">שירותים</Nav.Link>
                  <Nav.Link href="#action2">המלצות</Nav.Link>
                  <Nav.Link href="#action2">צור קשר</Nav.Link>                                
                                                            
                </Nav> 
                <Nav>
                <Button variant="outline-success" className='justify-self-end'> חייגו עכשיו 052-4224394</Button> 
                  </Nav>               
              </Offcanvas.Body>             
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
  )
}

export default NavbarComp
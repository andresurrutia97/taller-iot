import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = ({ logOut }) => (
  <Navbar bg="primary" variant="dark" fixed="top">
    <Container>
      <Navbar.Brand href="">UAO IoT</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav.Link className="text-light" onClick={logOut}>
          Log Out
        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar;

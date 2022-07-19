import "./navbar.css";
import {
  Navbar, 
  Nav,
  Button,
} from "react-bootstrap";
function NavbarTop() {
  return (
    <Navbar id="nav" expand="sm" bg="grey">
      <Navbar.Brand>Booking</Navbar.Brand>
      <br></br>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Equipment</Nav.Link>          
          <Nav.Link href="/studio">Studio</Nav.Link>          
          <Nav.Link href="/learn More">Learn More</Nav.Link>          
        </Nav>      
      </Navbar.Collapse>
      <Nav pullRight>
      <Nav.Link  href="/profile">
        Profile
      </Nav.Link>      
        <Button>Loug Out</Button>      
    </Nav>

    </Navbar>
  );
}
export default NavbarTop;

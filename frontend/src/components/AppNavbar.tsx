import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/nfcu.svg";
function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img
          src={logo}
          width="30"
          height="30"
          className="mr-2"
          alt="NFCU Logo"
        />
        <Navbar.Brand>NFCU</Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="#">Dashboard</Nav.Link>
          <Nav.Link href="#">Accounts</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

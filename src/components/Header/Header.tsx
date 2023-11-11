import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
        <Container>
          <Nav className="container">
            <Navbar.Brand onClick={() => navigate("/")}>
              Mi App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/componentes")}>
                  Componentes
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/administracion")}>
                  Administracion
                </Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;

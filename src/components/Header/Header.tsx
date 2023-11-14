import {
  Col,
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  NavDropdown,
  NavbarCollapse,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

const Header = () => {
  // Utils
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();

  // Handlers
  function onLogOut() {
    window.localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" col-sm-12 col-md-12"
          >
            <Navbar.Brand
              onClick={() => navigate("/")}
              className=" col-sm-12	col-md-12	col-lg-1	col-xl-1"
            >
              {
                <img
                  src="src/assets/images/logo.svg"
                  style={{ width: "60px" }}
                />
              }
            </Navbar.Brand>
            <Form className="col-sm-12	col-md-3	col-lg-2	col-xl-3">
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Buscar..."
                  className=" mr-sm-2"
                />
              </Col>
            </Form>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
              <Nav.Link onClick={() => navigate("/promociones")}>
                Promociones
              </Nav.Link>
              <NavDropdown
                className="nav-dropdown-example"
                title="Categorías"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  onClick={() => navigate("/search?hamburguesas")}
                >
                  Hamburguesas
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/search?panchos")}>
                  Panchos
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/search?pizzas")}>
                  Pizzas
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/search?papas_fritas")}
                >
                  Papas Fritas
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => navigate("/search?bebidas")}>
                  Bebidas
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#footer">Contactanos</Nav.Link>
              <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
              {isLoggedIn && <Nav.Link onClick={onLogOut}>Log out</Nav.Link>}
            </Nav>
            <Navbar expand="lg">
              <Nav>
                <Button
                  className="btn btn-danger"
                  onClick={() => navigate("/register")}
                >
                  Registrarse
                </Button>
              </Nav>
              <Nav>
                <Nav.Link onClick={() => navigate("/login")}>
                  Iniciar sesión
                </Nav.Link>
              </Nav>
            </Navbar>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;

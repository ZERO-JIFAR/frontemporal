import {
  Col,
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";
import useIsAdmin from "../../hooks/useIsAdmin";

const Header = () => {
  // Utils
  const navigate = useNavigate();
  const isLoggedIn = useIsLoggedIn();
  const isAdmin = useIsAdmin();

  // Handlers
  function onLogOut() {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("isAdmin");
    navigate("/");
  }

  return (
    <Navbar expand="lg" className="bg-tertiary">
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
              { isLoggedIn && isAdmin == 'true' ? (
                <Nav.Link onClick={() => navigate("/admin")}>Admin</Nav.Link>
              ) : ""}
              {/*
              <Container>
                <Form className="me-auto">
                  🔆
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="🌙"
                  />
                </Form>
              </Container>
              BTN SWITCH THEME Light-Dark
              */}
            </Nav>
            <Navbar expand="lg">
              <Nav>
                {isLoggedIn ? (
                  <NavDropdown
                    className="nav-dropdown-example"
                    title="NOMBREUSUARIO"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item onClick={() => navigate("/profile")}>
                      Mis Datos
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate("/pedidos")}>
                      Mis Pedidos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={onLogOut}>
                      Cerrar Sesion
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Button
                    style={{ margin: "10px" }}
                    onClick={() => navigate("/login")}
                  >
                    Iniciar Sesion
                  </Button>
                )}
              </Nav>
              <Nav>
                {!isLoggedIn && (
                  <Button
                    variant="danger"
                    onClick={() => navigate("/register")}
                  >
                    Registrarse
                  </Button>
                )}
              </Nav>
            </Navbar>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;

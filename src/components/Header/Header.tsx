import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  NavbarCollapse,
} from "react-bootstrap";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { Cart, Person } from "react-bootstrap-icons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/*col-	col-sm-	col-md-	col-lg-	col-xl-          Esto es de Bootstrap y sirve para darle el width a cada elemento*/}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Nav className="container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
              <Navbar.Brand
                onClick={() => navigate("/")}
                className=" col-sm-1	col-md-1	col-lg-1	col-xl-1"
              >
                {
                  <img
                    src="src/assets/images/logo.svg"
                    style={{ width: "60px" }}
                  />
                }
              </Navbar.Brand>
              <Form className="col-sm-3	col-md-3	col-lg-3	col-xl-3">
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Buscar..."
                    className=" mr-sm-2"
                  />
                </Col>
              </Form>
              <Nav className="me-auto col-sm-4	col-md-4	col-lg-4	col-xl-4" style={{margin:'10px'}}>
                <Nav.Link onClick={() => navigate("/")}> Inicio</Nav.Link>
                <Nav.Link onClick={() => navigate("/promociones")}>
                  Promociones
                </Nav.Link>
                <NavDropdown
                  className="nav-dropdown-example"
                  title="Categorías"
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate("/search?hamburguesas")}>Hamburguesas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/search?panchos")}>Panchos</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/search?pizzas")}>Pizzas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/search?papas_fritas")}>Papas Fritas</NavDropdown.Item> 
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => navigate("/search?bebidas")}>Bebidas</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button
                onClick={() => navigate("/carrito")}
                className="col-sm-2	col-md-2	col-lg-2	col-xl-2"
                style={{ margin: "10px" , textAlign:"center"}}
              >
                <Cart /> Carrito
              </Button>
              <Button
                onClick={() => navigate("/login")}
                className="col-sm-2	col-md-2	col-lg-2	col-xl-2"
                style={{ margin: "10px" }}
              >
                <Person /> Ingresar
              </Button>
            </NavbarCollapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;

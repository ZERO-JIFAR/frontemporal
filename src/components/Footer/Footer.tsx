// Footer.tsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { EnvelopeAt, PinMap, Whatsapp } from "react-bootstrap-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <p>&copy; 2023 El Buen Sabor. Todos los derechos reservados.</p>
            <p><PinMap /> Calle Falsa 123 Ciudad de Mendoza</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <h5>Contactanos</h5>
            <p><Whatsapp/> + 54 9 261 1234567 <br /> <EnvelopeAt/> elbuensabor@gmail.com</p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

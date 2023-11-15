// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
//import { auth, googleProvider } from './firebase'; // Hay que de configurar la BD y obtener la instancia de autenticación
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  // utils
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // handlers
  function onLogIn() {
    window.localStorage.setItem("isLoggedIn", "true");
    window.localStorage.setItem("isAdmin", "true"); //ACA DEBERIA VER EL ATRIBUTO ADMIN O NO Y PASARLE TRUE O FALSE
    navigate("/");
  }


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Implementa la lógica de inicio de sesión con correo y contraseña
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       // Implementa la lógica de inicio de sesión con Google
//       await auth.signInWithPopup(googleProvider);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Recuperar Contraseña</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onLogIn}> 
          {/*en vez de onLogIn <--> handleLogin */}
            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Recuperar
            </Button>
          </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;

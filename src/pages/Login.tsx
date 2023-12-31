// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
//import { auth, googleProvider } from './firebase'; // Hay que de configurar la BD y obtener la instancia de autenticación
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  // utils
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // handlers
  function onLogIn() {
    window.localStorage.setItem("isLoggedIn", "true");
    window.localStorage.setItem("isAdmin", "false"); //ACA DEBERIA VER EL ATRIBUTO ADMIN O NO Y PASARLE TRUE O FALSE
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
          <h2>Iniciar Sesión</h2>
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

            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>

          <Button variant="danger" onClick={onLogIn}>
          {/* }handleGoogleLogin} className="mt-3"> */}
          Inicia Sesion con Google <Google />
          </Button>

          <p className="mt-3">
            ¿Olvidaste tu contraseña? <a href=""onClick={() => navigate("/recuperar")}>Restablecer contraseña</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

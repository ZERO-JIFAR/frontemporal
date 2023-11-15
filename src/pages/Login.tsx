import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsuarioService } from "../services/UsuariosServices";


const Login: React.FC = () => {
    // utils
    const navigate = useNavigate();

    // handlers
    function onLogIn(){
      window.localStorage.setItem('isLoggedIn', 'true');
      window.localStorage.setItem('isAdmin', 'true'); //ACA DEBERIA VER EL ATRIBUTO ADMIN O NO Y PASARLE TRUE O FALSE 
        navigate('/');

    }

    // render
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw'}}>
        <Button onClick={onLogIn}> Log in </Button>
    </div>
  )
}

export default Login;
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Administracion from "../pages/Administracion";
import Componentes from "../pages/Componentes";
import Empleados from "../pages/Empleados";
import Usuarios from "../pages/Usuarios";


const AppRoutes: React.FC = () => {

  return (

    //ENROUTADOR QUE SIRVE PARA QUE CUANDO VAYA A CIERTA URL RENDERICE CIERTO ELEMENTO

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/administracion" element={<Administracion/>}/>
        <Route path="/componentes" element={<Componentes/>}/>
        <Route path="/empleados" element={<Empleados/>}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
    </Routes>

  )
}
export default AppRoutes;
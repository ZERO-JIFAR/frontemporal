import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

import DetalleProductoPage from "../pages/DetalleProducto";
import DetallePedidoPage from "../pages/DetallePedido";
import RegisterPage from "../pages/Register";
import Login from "../pages/Login";
import UsuariosPage from "../pages/UsuariosPage";


const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const Admin = React.lazy(() => import("../pages/Admin"));

const AppRoutes: React.FC = () => {
  return (
    //ENROUTADOR QUE SIRVE PARA QUE CUANDO VAYA A CIERTA URL RENDERICE CIERTO ELEMENTO

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
      <Route path="/detalle/:idProduct" element={<DetalleProductoPage />} />
      <Route path="/detallePedido" element={<DetallePedidoPage />} />
      <Route path="/usuarios" element={<UsuariosPage/>} />
    </Routes>
  );
};
export default AppRoutes;

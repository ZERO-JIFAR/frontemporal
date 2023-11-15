import { Domicilio } from "./Domicilio";
import { Pedido } from "./Pedido";

export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    fechaHoraAltaCliente: string;
    fechaHoraModificacionCliente: string | null;
    fechaHoraBajaCliente: string | null;
    estadoCliente: string | null;
    
    domicilioList: Domicilio[];
    pedidos: Pedido[];
 }
  
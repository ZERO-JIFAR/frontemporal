import { Cliente } from "./Cliente";
import { detallesPedido } from "./DetallePedido";
import { Domicilio } from "./Domicilio";


export interface Pedido {
  id: number;
  fechaHoraPedido: string;
  fechaHoraModificacionPedido: string | null;
  fechaHoraBajaPedido: string | null;
  fechaHoraEstimadaFinalizacion: string | null;
  totalPrecio: number;
  totalCosto: number;
  tipoEnvio: string;
  formaPago: string;
  estadoPedido: string;

  
  domicilioEntrega: Domicilio|null;
  cliente: Cliente | null;
  detallesPedido: detallesPedido[]; 
}
import { Rubro } from "./Rubro";
import { UnidadMedida } from "./UnidadMedida";


export interface ArticuloInsumo {
    id: number;
    fechaHoraAltaArticuloInsumo: string;
    fechaHoraModificacionArticuloInsumo: string | null;
    fechaHoraBajaArticuloInsumo: string | null;
    nombreArticuloInsumo: string;
    precioCompra: number;
    stockActual: number;
    stockMinimo: number;
    urlImagen: string;
    
    unidadMedida: UnidadMedida;
    rubroArticulo: Rubro;
  }
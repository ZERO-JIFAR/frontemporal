export interface Rubro {
    id: number;
    nombreRubro: string;
    fechaAltaRubro: string;
    fechaBajaRubro: string | null;
    fechaModificacionRubro: string | null;
    
    rubroPadre: Rubro;
    rubroHijoList: Rubro[]; 
  }

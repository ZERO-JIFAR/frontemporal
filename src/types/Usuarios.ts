import { Cliente } from "./Cliente";
import { Rol } from "./Rol";

export interface Usuario {
    //ACA VAN LOS ATRIBUTOS QUE TIENEN LOS PRODUCTOS DE LA API
    id: number;
    fechaAlta: string;
    fechaModificacion: string | null;
    fechaBaja: string | null;
    username: string;
    password: string;
    rol: Rol;
    activo: boolean;

    cliente: Cliente,
}
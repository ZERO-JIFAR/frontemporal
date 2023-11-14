import { Empleado } from "../types/Empleado";

//const BASE_URL = 'https://fakestoreapi.com'; // <<-----URL A CAMBIAR CON NUESTRA PROPIA API
const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';
export const EmpleadosServices = {

    //METODO PARA OBTENER TODOS LOS PRODUCTOS
    getEmpleados: async (): Promise<Empleado[]> => {
        const response = await fetch(`${BASE_URL}/users`); /* ACA DEBERIA SER /EMPLEADOS PERO SERA PROBLEMA DEL FABRI DEL FUTURO */
        const data = await response.json();

        return data;
    },
    //METODO PARA OBTENER UN SOLO PRODUCTO PASANDOLE EL ID_PRODUCTO 
    getEmpleado: async (id:number): Promise<Empleado> => {
        const response = await fetch(`${BASE_URL}/users/${id}`);
        const data = await response.json();

        return data;
    },
    //METODO PARA CREAR UN PRODUCTO NUEVO PASANDOLE LOS DATOS 
    createEmpleado: async (empleado: Empleado): Promise<Empleado> => {
        const response = await fetch(`${BASE_URL}/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empleado)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ACTUALIZAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO y LOS DATOS DEL PRODUCTO NUEVOS
    updateEmpleado: async (id: number,empleado: Empleado): Promise<Empleado> => {

        const response = await fetch(`${BASE_URL}/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empleado)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ELIMINAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO
    deleteEmpleado: async (id: number): Promise<void> => {

        await fetch(`${BASE_URL}/users/${id}`, {
            method: "DELETE"
        });
    }
}
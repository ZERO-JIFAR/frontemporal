import { DetalleArticuloManufacturado } from "../types/DetalleArticuloManufacturado";

//const BASE_URL = 'https://fakestoreapi.com';
const BASE_URL = 'http://localhost:8080';


export const DetalleArticuloManufacturadoService = {

    getAllDetalleArticuloManufacturado: async (): Promise<DetalleArticuloManufacturado[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturado/paged`);
        const data = await response.json();
        return data;
    },

    getDetalleArticuloManufacturado: async (id: number): Promise<DetalleArticuloManufacturado> => {

        const response = await fetch (`${BASE_URL}/api/v1/detalleArticuloManufacturado/${id}`);
        const data = await response.json();
        return data;
    },

    createDetalleArticuloManufacturado: async (detalleArticuloManufacturado: DetalleArticuloManufacturado): Promise<DetalleArticuloManufacturado> => {

        const response = await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturado`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detalleArticuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    updateDetalleArticuloManufacturado: async (id: number, detalleArticuloManufacturado: DetalleArticuloManufacturado): Promise<DetalleArticuloManufacturado> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturado/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(detalleArticuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    deleteDetalleArticuloManufacturado: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturado/${id}`, {
            method: "DELETE"
        });
    }
};
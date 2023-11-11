import { Product } from "../types/Product";

const BASE_URL = 'https://fakestoreapi.com'; // <<-----URL A CAMBIAR CON NUESTRA PROPIA API

export const ProductServices = {

    //METODO PARA OBTENER TODOS LOS PRODUCTOS
    getProducts: async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();

        return data;
    },
    //METODO PARA OBTENER UN SOLO PRODUCTO PASANDOLE EL ID_PRODUCTO 
    getProduct: async (id:number): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const data = await response.json();

        return data;
    },
    //METODO PARA CREAR UN PRODUCTO NUEVO PASANDOLE LOS DATOS 
    createProduct: async (product: Product): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ACTUALIZAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO y LOS DATOS DEL PRODUCTO NUEVOS
    updateProduct: async (id: number, product: Product): Promise<Product> => {

        const response = await fetch(`${BASE_URL}/products/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();
        return data;
    },
    //METODO PARA ELIMINAR UN PRODUCTO PASANDOLE UN ID_PRODUCTO
    deleteProduct: async (id: number): Promise<void> => {

        await fetch(`${BASE_URL}/products/${id}`, {
            method: "DELETE"
        });
    }
}
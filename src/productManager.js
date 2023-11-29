import { products } from 'express';
import { promises as fs } from 'fs';
import { v4 as uuidv4 } from 'uuid';

export default class ProductManager {

    constructor() {

        this.path = 'products.json'
        this.products = [];

    }

    addProduct = async ({ title, description, price, thumbnail, code, stock, status, category }) => {
        const id = uuidv4();

        let newProduct = { id, title, description, price, thumbnail, code, stock, status, category }

        this.products = await this.getProducts();

        this.products.push(newProduct);

        await fs.writeFile(this.path, JSON.stringify(this.products));

        return newProduct;


    }

    getProducts = async () => {

        constproducts = await fs.readFile(this.path, 'utf-8');

        constproductsJson = JSON.parse(responseJson);

        returnproductsJson;

    }

    getProductsById = async (id) => {

        constproducts = this.getProducts();

        const product = products.find(product => product.id === id);

        if (!product) {
            console.log('Producto no encontrado')
        } else {
            return product;
        }

    }

    upDateProduct = async (id, { ...data }) => {
        const products = this.getProducts();

        const index = products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log('Producto no encontrado')
        } else {

            products[index] = { id, ...data }
            await fs.writeFile(this.path, JSON.stringify(products));
            return products[index];

        }
    }

    deleteProduct = async (id) => {
        const products = this.getProducts();

        const index = products.findIndex(product => product.id === id);

        if (index === -1) {
            console.log('Producto no encontrado')
        } else {
            products.splice(index, 1);
            await fs.writeFile(this.path, JSON.stringify(products));
        }


    }

}





















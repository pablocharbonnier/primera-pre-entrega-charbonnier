import { Router } from "express";
import { productManager } from "../index.js";


const prductRouter = Router();

prductRouter.get("/", async (req, res) => {

    try {
        const { limit } = req.query;
        const products = await productManager.getProducts();

        if (limit) {
            const limitedProducts = products.slice(0, limit);
            res.json(limitedProducts);
        } else {
            res.json(products);
        }

    } catch (error) {
        console.log(error)
        res.send('Error al intentar recibir los productos')
    }

})

prductRouter.get('/:pid', async (req, res) => {
    const { pid } =  req.params;
    
    try {
        const { pid } = req.params;
        const products = await productManager.getProduct(pid);
        res.json(products);
    }catch{
        console.log(error)
        res.send(`Error al intentar recibir el producto con id: ${pid}`)
    }
})

prductRouter.post('/', async (req,res)=>{
    try {
        const {title, description, price, thumbnail, code, stock, status, category } = req.body;
        const response = await productManager.addProduct(title, description, price, thumbnail, code, stock, status, category);
        res.json(response);
    } catch (error) {
        console.log(error)
        res.send('Error al intentar agregar producto')
    }
})

prductRouter.put('/:pid', async (req, res) => {
    const { pid } = req.params;
    
    
    try { 
        const response = await productManager.updateProduct(id, {title, description, price, thumbnail, code, stock, status, category});
        res.json(response);
    } catch (error) {
        console.log(error)
        res.send(`Error al intentar editar producto con id: ${pid}`)
    }
})

prductRouter.delete('/:pid', async  (req, res) => {
    const { pid } = req.params;

    try {

await productManager.deleteProduct(id);
res.json('Producto eliminado exitosamente');

        
    } catch (error) {
        console.log(error)
        res.send(`Error al intentar eliminar el producto con id: ${pid}`)
    }
    

})
   
  










export { prductRouter };
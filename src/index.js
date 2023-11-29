import express from 'express';
import { ProductManager } from './productManager.js';
import { productRouter} from './routes/products.router.js';

const PORT = 8080;

const app = express();

export const productManager = new ProductManager();

app.use(express.json());
app.use('/api/products', productRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchado en el puerto: ${PORT}`);
});


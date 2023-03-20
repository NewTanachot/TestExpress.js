import Router from 'express';
const router = Router();
import Product from '../models/Product.js';

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/home', (req, res) => {
    res.redirect('https://tanachot2000.github.io/My-Resume/');
});

router.get('/Troll/:Redirect?', (req, res) => {

    if (req.params.Redirect.trim() == 'rick') {
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    res.sendStatus(400);
});

router.get('/GetProduct', async (req, res) => {
    try 
    {
        const result = await Product.find().exec();
        res.status(200).json(result);
    } 
    catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/GetProduct/:id', async (req, res) => {

    try {
        const resultProduct = await Product.findById(req.params.id);
    
        if (!resultProduct) {
            res.status(404).send('ID not found.');
        }
    
        res.status(200).json(resultProduct);
    }
    catch (err) {
        console.log(err);
        res.status(404).send('ID not found.');
    }
});

router.post('/InsertProduct', async (req, res) => {
    
    const insertProduct = new Product({
        ProductName : req.body.ProductName,
        ProductDescription: req.body.ProductDiscription,
        ProductType : req.body.ProductType
    });

    await new Product(insertProduct).save();
    res.status(201).send('Insert Done.');
});

router.put('/UpdateProduct/:id', async (req, res) => {

    const updateProduct = new Product({
        _id : req.params.id,
        ProductName : req.body.ProductName,
        ProductDescription : req.body.ProductDiscription,
        ProductType : req.body.ProductType
    }); 

    const result = await Product.findByIdAndUpdate(req.params.id, updateProduct);

    if (!result) {
        res.status(404).send('ID not found.');
    }

    res.status(200).send('Update done.');
});

router.delete('/DeleteProduct/:id', async (req, res) => {

    const result = await Product.findByIdAndDelete(req.params.id);

    if (!result) {
        res.status(404).send('ID not found.');
    }

    res.status(200).send('Delete done.');
});

export default router;
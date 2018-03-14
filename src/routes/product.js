const express = require('express');
const router = express.Router();
const productStore = require('../db/productStore');

router.get('/', async (req, res) => {
    try {
        const products = await productStore.getProducts();
        if(products) {
          res.status(200).json({
            products: products
          });
        } else {
          res.status(500).json({
            error_code: 'internal_error',
            message: 'Internal error'
          });
        }
    } catch (exception) {
        response.status(500).send({ error: 'Database communication error' })
    }
});

router.get('/:barcode', async (req, res) => {
        try {
            const product = await productStore.findByBarcode(req.params.barcode)  
            if(product) {
              res.status(200).json({
                product: product
              });
            } else {
              res.status(500).json({
                error_code: 'internal_error',
                message: 'Internal error'
              });
            }
        } catch (exception) {
            res.status(400).send({ error: 'malformatted id' })
        }
})

module.exports = router;

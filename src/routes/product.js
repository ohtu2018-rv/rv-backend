const express = require('express');
const router = express.Router();
const userStore = require('../db/userStore');

router.get('/', async (req, res) => {
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
});

module.exports = router;

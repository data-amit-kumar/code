const express= require('express');
const path = require('path');
const fs= require('fs');
const router= express.Router();
const productController= require('../controllers/products');
const contactController= require('../controllers/contact');

router.get('/add-product',productController.getAddProduct);

router.post('/add-product',productController.postAddProduct);

router.get('/contact',contactController.getContact);

router.post('/contact',contactController.postContact);

module.exports= router;
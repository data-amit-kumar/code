const express= require('express');
const path = require('path');
const fs= require('fs');
const productController= require('../controllers/products');

const router= express.Router();

router.get('/', productController.getAddProductd);

module.exports= router;
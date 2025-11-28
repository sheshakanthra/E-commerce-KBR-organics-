const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();


const dataPath = path.join(__dirname, '..', 'data', 'products.json');


function readProducts(){
const raw = fs.readFileSync(dataPath, 'utf8');
return JSON.parse(raw || '[]');
}


function writeProducts(arr){
fs.writeFileSync(dataPath, JSON.stringify(arr, null, 2));
}


// Public: list products
router.get('/', (req, res) => {
const products = readProducts();
res.json(products);
});


// Get single product
router.get('/:id', (req, res) => {
const products = readProducts();
const p = products.find(x => x.id === req.params.id);
if (!p) return res.status(404).json({ message: 'Not found' });
res.json(p);
});


module.exports = router;
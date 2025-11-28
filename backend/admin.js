const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();


const dataPath = path.join(__dirname, 'data', 'products.json');


function readProducts(){
const raw = fs.readFileSync(dataPath, 'utf8');
return JSON.parse(raw || '[]');
}
function writeProducts(arr){
fs.writeFileSync(dataPath, JSON.stringify(arr, null, 2));
}


// Create product
router.post('/product', (req, res) => {
const products = readProducts();
const p = { id: uuidv4(), ...req.body };
products.push(p);
writeProducts(products);
res.json(p);
});


// Update product
router.put('/product/:id', (req, res) => {
const products = readProducts();
const idx = products.findIndex(x => x.id === req.params.id);
if (idx === -1) return res.status(404).json({ message: 'Not found' });
products[idx] = { ...products[idx], ...req.body };
writeProducts(products);
res.json(products[idx]);
});


// Delete product
router.delete('/product/:id', (req, res) => {
let products = readProducts();
products = products.filter(x => x.id !== req.params.id);
writeProducts(products);
res.json({ message: 'deleted' });
});


module.exports = router;
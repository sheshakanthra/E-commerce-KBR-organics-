const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const adminRouter = require('./admin');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve static images if needed (optional)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Admin Routes
app.use('/api/admin', adminRouter);

// Public Product Routes
const dataPath = path.join(__dirname, 'data', 'products.json');

app.get('/api/products', (req, res) => {
    try {
        const raw = fs.readFileSync(dataPath, 'utf8');
        const products = JSON.parse(raw || '[]');
        res.json(products);
    } catch (err) {
        console.error("Error reading products:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

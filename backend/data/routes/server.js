const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const adminRouter = require('./admin');


const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use('/api/products', productsRouter);
app.use('/api/admin', adminRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on', PORT));
require("dotenv").config();
const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    })
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(` server is running at port ${PORT}`));
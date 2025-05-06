const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const HttpError = require('./models/http-error');

const app = express();

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/users', usersRoutes);
app.use('/api', productsRoutes);

// 404 handler
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    if (error.name === 'ValidationError') {
        return res.status(422).json({
            message: 'Validation failed',
            errors: Object.values(error.errors).map(err => err.message)
        });
    }
    if (error.code === 11000) {
        return res.status(409).json({
            message: 'Duplicate key error',
            field: Object.keys(error.keyPattern)[0]
        });
    }
    res.status(error.code || 500).json({
        message: error.message || 'An unknown error occurred!'
    });
});

const MONGODB_URI = 'mongodb+srv://nouhadalhallab122:Soulaymaboutique03@soulayma-cluster.winbdem.mongodb.net/shop?retryWrites=true&w=majority&appName=soulayma-cluster';

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });



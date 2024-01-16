//requirements from node_modules
const express = require('express');
const morgan = require('morgan');

//requirements from our files
const ExpressError = require('./expressError');
const router = require('./itemsRoutes');

const app = express();

app.use(express.json());
app.use('/items', router)


// 404 Not Found Error Handler 
app.use( (req, res, next) => {
    const e = new ExpressError("Page not found", 404);
    next(e);
});

// Standard Error handler
app.use( (err, req, res, next) => {
    let status = err.status || 500;
    let msg = err.msg;

    return res.status(status).json({
        error: {msg, status}    
    });
});
const express = require('express');
const router = new express.router();

router.get('/', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
} );

router.post('/', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

router.get('/:name', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

router.patch('/:name', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

router.delete('/:name', (req, res, next) => {
    try{

    }
    catch(e){
        next(e);
    }
});

module.exports = router;
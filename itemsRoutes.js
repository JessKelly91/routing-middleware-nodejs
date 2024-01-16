const express = require('express');
const router = new express.Router();
const fakeDb = require('./fakeDb')

router.get('/', (req, res, next) => {
    try{
        return res.json(items)
    }
    catch(e){
        next(e);
    }
} );

router.post('/', (req, res, next) => {
    try{
        items.push(req.body)
        return res.json(items)
    }
    catch(e){
        next(e);
    }
});

router.get('/:name', (req, res, next) => {
    try{
        let name = req.params.name;
        item = items[name];
        return res.json(item);
    }
    catch(e){
        next(e);
    }
});

router.patch('/:name', (req, res, next) => {
    try{
        let name = req.params.name;
        item = items[name];

    }
    catch(e){
        next(e);
    }
});

router.delete('/:name', (req, res, next) => {
    try{
        let name = req.params.name;
        return res.json({message: "Deleted", item: name})
    }
    catch(e){
        next(e);
    }
});

module.exports = router;
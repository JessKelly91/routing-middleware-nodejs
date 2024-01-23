const express = require('express');
const router = new express.Router();
const fakeDb = require('./fakeDb')

router.get('/', (req, res, next) => {
    try{
        return res.json(fakeDb.items)
    }
    catch(e){
        next(e);
    }
} );

router.post('/', (req, res, next) => {
    try{
        fakeDb.items.push(req.body)
        return res.json({ message: "Added",  item: req.body})
    }
    catch(e){
        next(e);
    }
});

router.get('/:name', (req, res, next) => {
    try{
        const item = fakeDb.items.find(i => i.name === req.params.name);
        return res.json(item);
    }
    catch(e){
        next(e);
    }
});

router.patch('/:name', (req, res, next) => {
    try{
        const item = fakeDb.items.find(i => i.name === req.params.name);

        return res.json({message: "Updated", item: item})

    }
    catch(e){
        next(e);
    }
});

router.delete('/:name', (req, res, next) => {
    try{
        const item = fakeDb.items.find(i => i.name === req.params.name);
        const idxOfItem = fakeDb.items.indexOf(item);
        fakeDb.items.splice(idxOfItem, 1);

        return res.json({message: "Deleted", item: item})
    }
    catch(e){
        next(e);
    }
});

module.exports = router;
const express = require('express');
const router = new express.Router();
const items = require('./fakeDb')

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
        return res.json({ message: "Added",  item: req.body})
    }
    catch(e){
        next(e);
    }
});

router.get('/:name', (req, res, next) => {
    try{
        const item = items.find(i => i.name === req.params.name);
        return res.json(item);
    }
    catch(e){
        next(e);
    }
});

router.patch('/:name', (req, res, next) => {
    try{
        const item = items.find(i => i.name === req.params.name);
        const idxOfItem = items.indexOf(item);
        fakeDb.items[idxOfItem] = req.body;

        return res.json({message: "Updated", item: req.body})

    }
    catch(e){
        next(e);
    }
});

router.delete('/:name', (req, res, next) => {
    try{
        const item = items.find(i => i.name === req.params.name);
        const idxOfItem = items.indexOf(item);
        fakeDb.items.splice(idxOfItem, 1);

        return res.json({message: "Deleted", item: item})
    }
    catch(e){
        next(e);
    }
});

module.exports = router;
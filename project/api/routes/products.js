const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handle GET request'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handle POST request'
    });
});

router.get('/:id', (req, res, next) => {

    const id = req.params.id;
    if (id === 'special'){
        res.status(200).json({
            message: 'You have choosen special product',
            id: id,

        }
        );
    }
    else{
        res.status(200).json({
            message: 'You choose classic'

        }
        );
    }

});

router.patch('/:id', (req, res, next) => {

    res.status(200).json({
        message: 'Updated'
    })
    

});

router.delete('/:id', (req, res, next) => {

    res.status(200).json({
        message: 'Deleted'
    })
    

});

module.exports = router;
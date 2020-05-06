const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=> {

    res.status(200).json({

        message: 'Orders fetched!'

    });
    
});

router.post('/', (req, res, next)=> {

    res.status(201).json({

        message: 'Order was created'

    });
    
});

router.get('/:id', (req, res, next)=> {

    res.status(201).json({

        message: 'Order details',
        orderId: req.params.id,

    });
    
});

router.delete('/:id', (req, res, next)=> {

    res.status(201).json({

        message: 'Order deleted',
        orderId: req.params.id,

    });
    
});

module.exports = router;
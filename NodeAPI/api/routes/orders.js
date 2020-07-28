const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:"Handling GET requests to /orders"
    });
});

router.get('/:orderID', (req, res, next) =>{
    const id = req.params.orderID;
    res.status(200).json({
        message:"orderID",
        ID:id
    }); 
});

router.post('/:orderID', (req, res, next) =>{
    const id= req.params.orderID;
    res.status(200).json({
        message:"Created order ID:"+id
    }); 
});

router.patch('/:orderID', (req, res, next) =>{
    const id= req.params.orderID;
    res.status(200).json({
        message:"UPDATED order ID:" +id
    }); 
});

router.delete('/:orderID', (req, res, next) =>{
    const id= req.params.orderID;
    res.status(200).json({
        message:" DELETED order ID:"+id
    }); 
});


module.exports = router;
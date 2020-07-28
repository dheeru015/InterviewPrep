const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req,res,next) => {
    const product ={
        Name:req.body.Name,
        Price:req.body.Price
    };
    res.status(200).json({
        message:"Handling GET requests to /products",
        CreatedProduct:product
    });
});

router.get('/:productID', (req, res, next) =>{
    const id = req.params.productID;
    res.status(200).json({
        message:"ProductID",
        ID:id
    }); 
});

router.post('/:productID', (req, res, next) =>{
    const id= req.params.productID;
    res.status(200).json({
        message:"Created Product ID:"+id
    }); 
});

router.patch('/:productID', (req, res, next) =>{
    const id= req.params.productID;
    res.status(200).json({
        message:"UPDATED Product ID:" +id
    }); 
});

router.delete('/:productID', (req, res, next) =>{
    const id= req.params.productID;
    res.status(200).json({
        message:" DELETED Product ID:"+id
    }); 
});


module.exports = router;
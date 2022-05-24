const express = require('express');
const router = express.Router();
const Coffee_Pods = require('../models/pods')

router.get('/', async (req,res)=>{
    let size = req.query.size;
    let coffeeFlavor= req.query.coffee_flavor;
    let packSize= req.query.pack_size;
    let Query = [];
    if(size)
        Query.push({product_type: size});
    if(coffeeFlavor)
        Query.push({coffee_flavor: coffeeFlavor});
    if(packSize)
        Query.push({pack_size: packSize});

    let pods = await Coffee_Pods.find({ $and: Query })
    .select('name pack_size coffee_flavor');
    res.send(pods)
})

module.exports = router;
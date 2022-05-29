const express = require('express');
const router = express.Router();
const Coffee_Pods = require('../models/pods')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({})

const querySchema = Joi.object().keys({
    size: Joi.string().valid(
        'COFFEE_POD_LARGE', 
        'COFFEE_POD_SMALL', 
        'ESPRESSO_POD'),
    coffee_flavor: Joi.string().valid(
        'COFFEE_FLAVOR_VANILLA', 
        'COFFEE_FLAVOR_CARAMEL', 
        'COFFEE_FLAVOR_MOCHA', 
        'COFFEE_FLAVOR_PSL', 
        'COFFEE_FLAVOR_HAZELNUT'),
    pack_size: Joi.number().valid(1,3,5,7)
  }).required().min(1)


router.get('/', validator.query(querySchema), async (req,res)=>{
    const size = req.query.size;
    const coffeeFlavor= req.query.coffee_flavor;
    const packSize= req.query.pack_size;
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
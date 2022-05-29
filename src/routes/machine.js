const express = require('express');
const router = express.Router();
const Coffee_Machine = require('../models/machine')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({})

const querySchema = Joi.object().keys({
    size: Joi.string().valid('COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'),
    water_line: Joi.boolean()
  }).required().min(1)
  
router.get('/', validator.query(querySchema), async (req,res)=>{
    const size = req.query.size;
    const waterLine= req.query.water_line;
    let Query = [];
    if(size)
        Query.push({product_type: size});
    if(waterLine)
        Query.push({water_line: waterLine});

    let large_machines = await Coffee_Machine.find({ $and: Query })
    .select('name water_line_compatible');
    res.send(large_machines)
})

module.exports = router;

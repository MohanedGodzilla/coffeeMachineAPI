const express = require('express');
const router = express.Router();
const Coffee_Machine = require('../models/machine')

router.get('/', async (req,res)=>{
    let size = req.query.size;
    let waterLine= req.query.water_line;
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

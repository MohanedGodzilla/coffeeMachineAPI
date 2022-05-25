const mongoose = require('mongoose');

const podSchema = new mongoose.Schema({
    name: {type: String, required: true},
    product_type: {
        type: String,
        enum: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD'],
        required: true
    },
    coffee_flavor: {type: String, required: true},
    pack_size: {type: String, required: true},
},{ collection: 'Coffee pods'});

const Coffee_Pod = mongoose.model('Coffee pods', podSchema);

 module.exports = Coffee_Pod;
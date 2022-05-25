const mongoose = require('mongoose');
const machineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    product_type: {
        type: String,
        enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
        required: true
    },
    water_line_compatible: {type: Boolean, default: false}
},{ collection: 'Coffee Machines'});

const Coffee_Machine = mongoose.model('Coffee Machines', machineSchema);

module.exports = Coffee_Machine;
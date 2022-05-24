const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Godzilla2311:Qwert12345@nodeapi.xljvq.mongodb.net/Coffee?retryWrites=true&w=majority')
// .then(() => console.log('DB connected'))
// .catch(err => console.error('could not connect to DB', err));

const machineSchema = new mongoose.Schema({
    name: {type: String, required: true},
    product_type: {
        type: String,
        enum: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE'],
        required: true
    },
    water_line_compatible: {type: Boolean, required: true},
},{ collection: 'Coffee Machines'});

const Coffee_Machine = mongoose.model('Coffee Machines', machineSchema);

async function createCoffeeMachine(){
    const coffee_machine = new Coffee_Machine({
        product_type: 'Large Machine',
        name: 'CM101',
        water_line_compatible: false
    });
    
    const result = await coffee_machine.save();
    console.log(result)
}

module.exports = Coffee_Machine;
//createCoffeeMachine();
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Godzilla2311:Qwert12345@nodeapi.xljvq.mongodb.net/Coffee?retryWrites=true&w=majority')
// .then(() => console.log('DB connected'))
// .catch(err => console.error('could not connect to DB', err));

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

async function createCoffeePod(){
    const coffee_pod = new Coffee_Pod({
        product_type: 'espresso',
        name: 'EP015',
        coffee_flavor: 'caramel',
        pack_size: '5 dozen',
    });
    
    const result = await coffee_pod.save();
    console.log(result)
}

 module.exports = Coffee_Pod;
//createCoffeePod();
const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Godzilla2311:Qwert12345@nodeapi.xljvq.mongodb.net/Coffee?retryWrites=true&w=majority')
// .then(() => console.log('DB connected'))
// .catch(err => console.error('could not connect to DB', err));

const podSchema = new mongoose.Schema({
    product_type: String,
    name: String,
    coffee_flavor: String,
    pack_size: String,
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
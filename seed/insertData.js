const db = require('../src/db')
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})
const machine = require('../src/models/machine')
const pod = require('../src/models/pods')
const data = require('./data')

async function main() {
    try {
        await db(process.env.MONGO_URI);
    } catch (error) {
        console.error(error);
    }
    
    let result = await machine.insertMany(data.coffeeMachines);
    console.log(`coffee machines inserted`);
    result = await pod.insertMany(data.coffeePods);
    console.log(`coffee pods inserted`);
}

main();
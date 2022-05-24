const dotenv = require('dotenv')
const express = require('express')
const app = express()
const db = require('./src/db')
const machine = require('./src/routes/machine')
const pod = require('./src/routes/pods')
dotenv.config()

async function main() {
    try {
        await db(process.env.MONGO_URI);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

app.use(express.json())
app.use('/api/coffeeMachine',machine)
app.use('/api/coffeePod',pod)

const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`nodejs api is listening on port: ${port}`);
});

main();
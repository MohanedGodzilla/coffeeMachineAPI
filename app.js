const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const machine = require('./src/routes/machine')
const pod = require('./src/routes/pods')
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true
}).then(() => console.log('DB connected'))
.catch(err => console.error('could not connect to DB', err));

app.use(express.json())
app.use('/api/coffeeMachine',machine)
app.use('/api/coffeePod',pod)

const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`nodejs api is listening on port: ${port}`);
});
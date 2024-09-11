const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/DWIII'
let mongodb = process.env.MONGODB_URI || url;
mongoose.connect(mongodb);
mongoose.Promise= global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console,"erro ao conectar com a base de dados"))

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});

const userRoute = require('./src/routes/userRoute');
app.use(userRoute)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//Importing express module
const express = require('express')
//Importing MongoDB CLIENT
const {MongoClient, ServerApiVersion} = require('mongodb')
// Importing Body parser
var bodyParser = require('body-parser')
// Importing Cross Origin Resource Sharing (CORS)
const cors = require('cors')
// Importing URI for mongodb from credentials. (Environment variables on vercel).
const uri = require('./credentials.json').uri


//Instantiating express
const app = express()
//Preparing the url encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CORS!!!!
// app.use(cors("http://localhost:3000"))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
//DEVELOPMENT ONLY
//Listening to a port
app.listen(5000, function () {
    console.log("Listening on 5000")
})


// GET requests
app.get('api/v1/orders', (req, res) =>{
    res.send({Orders:"huevos"})
})
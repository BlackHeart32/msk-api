//Importing express module
const express = require('express')
//Importing MongoDB CLIENT
const {MongoClient, ServerApiVersion} = require('mongodb')

// ConnectionURI

//Instantiating express
const app = express()


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
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
//DEVELOPMENT ONLY
//Listening to a port


//PRODUCTION
app.get('api/v1/orders', (req, res) =>{
    // const orders = 
    res.send("Orders")
})
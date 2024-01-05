const cors = require('cors')
var bodyParser = require('body-parser')
var express = require("express")
var app = express()


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
//*** Data ***
// - Lessons
const lessons = require('./data/lessons.json')
// - Templates
const getTemplates = require('./dba')


//LESSONS ENDPOINT
app.get("/api/", async function (req, res) {
    try{
    const topics = await getTemplates()
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    console.log("lesosns endpoint\n")
    topics.forEach(t => {t.topics.forEach(d => {console.log(d)})})
    res.send(topics)
    }
    catch(e){
        console.log(e)
        res.status(500).send("Internal Server Error");
    }
})

//TEMPLATES ENDPOINT
app.get("/api/templates", function (req, res) {
    res.send(templates)
    console.log("params:", req.params, Date.now())
    console.log(req.query)
})

//GET REQUESTS
app.post("/api/student", urlencodedParser, function (req, res, next) {
    var result = {}
    result = req.body    
    console.log(result)
    res.send({ message: "Heart" })
    next()
})

app.listen(5000, function () {
    console.log("Listening on 5000")
})

module.exports = app

//Pizza side

app.get("/api/msk/orders", (req, res) =>{
    
    res.send("ORDERS API")
})


const express = require('express')
const server = express()
const port = 5000
const cors = require('cors')
server.use(cors())
server.use(express.json())
const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = "mongodb+srv://tornike:Sai123&@rai@cluster0.ro4dz.mongodb.net/data?retryWrites=true&w=majority";

server.listen(port, ()=>{
    console.log('listening on 5000')
})
server.post('/signup', (req, res)=>{
    const name = req.body.name
    const password = req.body.password
    upload(name, password)
})
function upload(name, password){
    MongoClient.connect(dbConnectionUrl, (err, client)=>{
        if (err){
            console.log('error')
        }else{
            console.log('connected')
        }
        const db = client.db("data");
        db.collection('movies').insertOne({
            name:name,
            password:password
          })
          .then(function(result) {
            console.log('inserted')
          })
    })
}





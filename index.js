const express = require('express')
const cors = require("cors");
const cryptoRouter = require('./routes/crypto')

const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
     console.log('working')
     res.send({site: 'working'})
})

app.use('/crypto', cryptoRouter)

console.log('og master 300')

module.exports = app






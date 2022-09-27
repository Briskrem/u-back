const express = require('express')
const Crypto = require('../Models/cryptoModel')
const axios = require('axios')

const router = express.Router()

router.get('/stats/:cryptoID', async (req, res) => {
    const cryptoID = req.params.cryptoID
    const queries = req.query
    try{
        const data = await Crypto.getGraph(cryptoID, queries)
        return res.json({data})
    }catch(e){
        console.log(e)
    }
})

module.exports = router







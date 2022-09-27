const express = require('express')
const WebSocket = require('ws')
const axios = require('axios')
const Alpaca = require("@alpacahq/alpaca-trade-api");
require('dotenv').config()


const router = express.Router()
const BASE_URL = 'https://data.alpaca.markets/v1beta2/crypto'
const apiKey = process.env.API_KEY
const secretKey = process.env.SECRET_KEY


class Crypto{
    static async getGraph(name, time){
        const method = 'GET'
        const url = 'https://data.alpaca.markets/v1beta2/crypto/bars'
        const params = {
            symbols : `${name}/USD`,
            timeframe: `${time.timeframe}`,
            start: '2022-07-01',
            limit: 200
        }
        
        const headers = {
        'APCA-API-KEY-ID': `${apiKey}`,
        'APCA-API-SECRET-KEY': `${secretKey}`
        }
    
        try{
            const resp = await axios({url, method, params, headers})
            return resp.data;
        }catch(e){
            console.log('failed')
        }
    }
}

module.exports = Crypto


// console.log(resp.data.bars, 'ππππππππππππππππππ')
// const resp = await axios.get('https://data.alpaca.markets/v1beta2/BTC/USD/bars')


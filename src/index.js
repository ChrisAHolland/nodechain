/*
*   The server that handles interactions with the blockchain
*/

const express = require('express')
const crypto = require('crypto-js')
const bodyParser = require('body-parser')
const Block = require('./block')
const Blockchain = require('./blockchain')

const port = process.env.PORT || 3000
const app = express()
myBlock = new Block(1, "abcdef123", "Hello, World!")

app.get('/', function(req, res) {
    res.send(myBlock)
})

app.get('/data', function(req, res) {
    res.send(myBlock.data)
})

app.listen(port, function() {
    console.log(`Server listening on port ${port}`)
})
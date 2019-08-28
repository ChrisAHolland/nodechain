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
app.use(bodyParser.json())

myChain = new Blockchain()
const newBlock = myChain.generateBlock("Test")
myChain.addBlock(newBlock)

app.get('/lastblock', function(req, res) {
    res.send(myChain.lastBlock)
})

app.get('*', function(req, res) {
    res.send(myChain)
})

app.listen(port, function() {
    console.log(`Server listening on port ${port}`)
})
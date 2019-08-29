/*
*   The server that handles interactions with the blockchain
*/

const express = require('express')
const bodyParser = require('body-parser')
const Block = require('./block')
const Blockchain = require('./blockchain')

const port = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

// Create an instance of the Blockchain
myChain = new Blockchain()

// Create a new Block
const newBlock = myChain.generateBlock("Test")

// Add the new Block to the Blockchain
myChain.addBlock(newBlock)

// Route to view the latest block in the chain
app.get('/lastblock', function(req, res) {
    res.send(myChain.lastBlock)
})

// Default route (temporary)
app.get('*', function(req, res) {
    res.send(myChain)
})

app.listen(port, function() {
    console.log(`Server listening on port ${port}`)
})
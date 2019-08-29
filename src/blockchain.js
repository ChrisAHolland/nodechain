/*
*   Blockchain class
*/

const crypto = require('crypto-js')
const Block = require('./block')

module.exports = class Blockchain {
    constructor() {
        this.genesisBlock = new Block(1, "0", "The Genesis Block")
        this.chain = [this.genesisBlock]
    }

    get() {
        return this.chain
    }

    // Returns the latest Block in the Blockchain
    get lastBlock() {
        return this.chain[this.chain.length - 1]
    }

    // Creates a Block Object
    generateBlock(data) {
        const newBlock = new Block(
            this.lastBlock.id + 1,
            this.lastBlock.hash,
            data.toString(),
        )
        return newBlock
    }

    // Adds the new Block to the Blockchain if the Block is valid
    addBlock(newBlock) {
        if (this.isValidBlock(newBlock)) 
            this.chain.push(newBlock)
        else 
            console.log("The block is not valid.")
    }

    // Validates a Block
    // Need to add more conditions here. E.g. confirming the hash and difficulty
    isValidBlock(newBlock) {
        if (this.lastBlock.id + 1 !== newBlock.id) {    
            return false
        }
        else if (this.lastBlock.hash !== newBlock.previousHash) {
            return false
        }
        else if (newBlock.hash !== this.hashBlock(newBlock)) {
            return false
        }
        else
            return true
    }

    hashBlock(block) {
        return crypto.SHA256(block.id + block.previousHash + block.timestamp + block.data).toString()
    }
}
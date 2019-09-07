/*
*   Blockchain class
*/

const crypto = require('crypto-js')
const Block = require('./block')

module.exports = class Blockchain {
    constructor() {
        this.genesisBlock = new Block(0, "0", "The Genesis Block")
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
            this.lastBlock.index + 1,
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
    // Need to add more conditions here. E.g. confirming the difficulty
    isValidBlock(block) {
        // Check the index
        if (this.chain[block.index - 1].index + 1 !== block.index) 
            return false
        // Check the previous hash
        else if (this.chain[block.index - 1].hash !== block.previousHash)
            return false
        // Check the hash
        else if (block.hash !== this.hashBlock(block))
            return false
        else 
            return true
    }

    // Validates a chain
    isValidChain(chain) {
        let temp 

        for (let i = 0; i < this.chain.length; i++) {
            temp = chain[0]
            
            if (!this.isValidBlock(temp)) {
                return false
            }

        }
        return true
    }

    hashBlock(block) {
        return crypto.SHA256(block.index + block.previousHash + block.timestamp + block.data).toString()
    }
}
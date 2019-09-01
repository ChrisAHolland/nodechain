/*
*   Block class for the blockchain
*/

const crypto = require('crypto-js')

module.exports = class Block {

    // Constructor
    constructor(index, previousHash, data) {
        this.index = index
        this.previousHash = previousHash
        this.timestamp = Date.now()
        this.data = data
        this.hash = this.hash()
    }

    // Function for the block to hash itself
    hash() {
        return crypto.SHA256(this.index + this.previousHash + this.timestamp + this.data).toString()
    }
}
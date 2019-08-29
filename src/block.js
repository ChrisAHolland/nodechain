/*
*   Block class for the blockchain
*/

const crypto = require('crypto-js')

module.exports = class Block {
    constructor(id, previousHash, data) {
        this.id = id
        this.previousHash = previousHash
        this.timestamp = Date.now()
        this.data = data
        this.hash = this.hash()
    }

    // Function for the block to hash itself
    hash() {
        return crypto.SHA256(this.id + this.previousHash + this.timestamp + this.data).toString()
    }
}
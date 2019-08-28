/*
*   Block class for the blockchain
*/

const crypto = require('crypto-js')

module.exports = class Block {
    constructor(id, previousHash, data) {
        this.id = id
        this.previousHash = previousHash.toString()
        this.timestamp = Date.now()
        this.data = data
        this.hash = this.hash()
    }

    hash() {
        return crypto.SHA256(this.id + this.previousHash + this.timetamp + this.data).toString()
    }
}
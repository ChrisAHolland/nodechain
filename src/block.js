/*
* Initial Block class for the blockchain
*/

const crypto = require('crypto-js')

module.exports = class Block {
    constructor(id, previousHash, timestamp, data) {
        this.id = id
        this.previousHash = previousHash.toString()
        this.timestamp = Date.now()
        this.data = datathis.hash = hash.toString
        this.hash = _hash()
    }

    _hash() {
        return crypto.SHAW256(this.id + this.previousHash + this.timetamp + this.data).toString()
    }
}
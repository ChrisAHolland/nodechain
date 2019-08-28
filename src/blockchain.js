/*
*   Blockchain class
*/

const Block = require('./block')

module.exports = class Blockchain {
    constructor() {
        this.genesisBlock = new Block(1, "0", "The Genesis Block")
        this.chain = [this.genesisBlock]
    }
}
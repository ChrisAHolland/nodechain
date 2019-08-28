/*
*   Blockchain class
*/

const Block = require('./block')

module.exports = class Blockchain {
    constructor() {
        this.genesisBlock = new Block(1, "0", "The Genesis Block")
        this.chain = [this.genesisBlock]
    }

    get() {
        return this.chain
    }

    get lastBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(data) {
        const newBlock = new Block(
            this.lastBlock.id + 1,
            this.lastBlock.hash,
            data.toString()
        )

        this.chain.push(newBlock)
    }
}
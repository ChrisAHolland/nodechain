/*
*   The server that handles interactions with the blockchain
*/

const express = require('express')
const crypto = require('crypto-js')
const bodyParser = require('body-parser')
const Block = require('./block')
const Blockchain = require('./blockchain')

const app = express()

// For testing
myBlock = new Block(1, "abcdef", "Test")
console.log(myBlock)
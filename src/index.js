const express = require('express')
const crypto = require('crypto-js')
const bodyParser = require('body-parser')
const Block = require('./block')

// For testing
myBlock = new Block(1, "abcdef", "Test")
console.log(myBlock)
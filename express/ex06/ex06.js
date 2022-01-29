const express1 = require('express')
const express2 = require('express')

const server1 = express1()
const server2 = express1()
console.log(server1 === server2);

const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2);
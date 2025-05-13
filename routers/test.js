const express = require('express')
const testRouter = express.Router()
//导入jwt
const { signJwt, verifyJwt } = require('../config/jwt')
const { sign } = require('jsonwebtoken')

testRouter.post('/sign', (req, res) => {
    const token = signJwt({ username: 'dadadada' })
    console.log(token)
    res.send(token)
})

testRouter.post('/verifyJwt', async (req, res) => {
    token = req.body.token
    console.log(token)
    const decoded = await verifyJwt(token)
    console.log(decoded)
    res.send(decoded)
})
module.exports = testRouter

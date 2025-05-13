const express = require('express')
const adminRouter = express.Router()
const mgconnection = require('../sql/mongodb')

adminRouter.get('/like', async (req, res) => {
    const results = await mgconnection()
    res.send(results)
})

module.exports = adminRouter

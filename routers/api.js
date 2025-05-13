const express = require('express')
const apiRouter = express.Router()

//引入封装的连接池
const getConnection = require('../sql/connection')
//引入mongodb
const mgconnection = require('../sql/mongodb')

//首页滚动接口
apiRouter.get('/sendpost', async (req, res) => {
    const results = await getConnection('select * from postbar')
    const chunkedResults = [
        results.slice(0, 8), // 第一个数组：前 8 个对象
        results.slice(8), // 第二个数组：后 8 个对象
    ]
    res.send(chunkedResults)
})

//首页卡片接口
apiRouter.get('/card', async (req, res) => {
    const results = await getConnection('select * from post')
    res.send(results)
})

apiRouter.get('/collect', async (req, res) => {
    const results = await mgconnection()
    res.send(results)
})

module.exports = apiRouter

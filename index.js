const express = require('express')
const app = express()

//路由
const testRouter = require('./routers/test')
const apiRouter = require('./routers/api')
const adminRouter = require('./routers/admin')
//连接池数据库
const pool = require('./sql/connection')

//json post请求中间件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/******************************** */
//路由中间件
app.use('/api', apiRouter)
app.use('/test', testRouter)
app.use('/admin', adminRouter)
app.use(express.static('public'))
/******************************** */

app.get('/connection', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log('获取连接失败', err)
            return
        }
        console.log('连接成功', connection.threadId)
        connection.query('select * from student', (err, results) => {
            if (err) {
                console.log('查询失败', err)
                return
            }
            console.log('查询结果', results)
        })
        connection.release()
    })
    res.send('Hello World!')
})

//监听
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

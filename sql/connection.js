const mysql = require('mysql2')

//普通连接

//连接池
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'data_default',
    connectionLimit: 10, //连接池的连接数
    queueLimit: 0, //连接池的排队数
})

const getConnection = async (sql) => {
    //与连接池建立连接
    const connection = await new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('连接失败')
                reject(err)
            } else {
                console.log('连接成功')
                resolve(connection)
            }
        })
    })
    //进行数据库操作
    const results = await new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
            if (err) {
                console.log('进行数据库操作失败')
                reject(err)
            } else {
                console.log('数据库操作成功')
                resolve(results)
            }
        })
    })
    connection.release()
    return results
}

module.exports = getConnection

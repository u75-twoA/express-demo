const jwt = require('jsonwebtoken')
const secret = 'secret'

const signJwt = (user) => {
    const tokenStr = jwt.sign(user, secret, { expiresIn: '1h' })
    return tokenStr
}

const verifyJwt = async (tokenStr) => {
    decoded = await new Promise((resolve, reject) => {
        jwt.verify(tokenStr, secret, (err, decoded) => {
            if (err) {
                reject('解析token失败')
            } else {
                resolve(decoded)
            }
        })
    })
    return decoded
}

module.exports = {
    signJwt,
    verifyJwt,
}

const mongoose = require('mongoose')
const schema = mongoose.Schema
const objectId = schema.ObjectId

const postbarSch = new schema({
    name: String,
    avatar: String,
    is_p: Boolean,
    title: String,
})

const getConnection = async () => {
    mongoose.connect('mongodb://127.0.0.1/first')
    const postbars = mongoose.model('postbars', postbarSch, 'postbars')
    const results = await postbars.find()
    return results
}

module.exports = getConnection

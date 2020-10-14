const {MongoClient} = require('mongodb')
const ObjectID = require('mongodb').ObjectID

let client 

function connect(locals) {
    
    const uri = process.env.DB_URL

    client = new MongoClient(uri, {useUnifiedTopology: true})

    return client.connect()
    .then(connection => {
        console.log('connected')
        locals.collectionListers = connection.db('ToDo').collection('Listers')
    })
    .catch (err => {
        console.log(err)
        process.exit()
    })
}

function readAll(info) {
    return info.collection.find(info.query).sort({name: 1}).toArray()
}

function createOne(info) {
    return info.collection.insertOne(info.doc)
}

function readOne(info) {
    return info.collection.findOne(info.query)
}

function readOneById(info) {
    return info.collection.findOne({_id: ObjectID(info.id)}) //when looking up ID, need this function.
}

function replaceOne(info) {
    return info.collection.findOneAndReplace({_id: ObjectID(info.id)}, info.doc)
}

function changeOne(info) {
    return info.collection.findOneAndUpdate(info.query, {$set: info.doc})
}

function deleteOne(info) {
    return info.collection.deleteOne({_id: ObjectID(info.id)})
}

function close() {
    client.close()
}

module.exports.connect = connect
module.exports.readAll = readAll
module.exports.createOne = createOne
module.exports.readOne = readOne
module.exports.replaceOne = replaceOne
module.exports.changeOne = changeOne
module.exports.deleteOne = deleteOne
module.exports.close = close
module.exports.readOneById = readOneById
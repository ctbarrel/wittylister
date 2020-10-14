var express = require('express')
var router = express.Router()

const db = require('../../db/mongo')

router.get('/', function(req, res, next) {
    const info = {
        query: {},
        collection: req.app.locals.collectionListers
    }

    db.readAll(info)
    .then(listers => {
        res.json(listers)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router
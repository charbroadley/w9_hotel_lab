const express = require("express")
// const {ReplSet} = require("mongodb/lib/core")
const ObjectId = require("mongodb").ObjectId
// In the newer version ObjectID is an object and not a function
// In the import it should have a lower case d
// In the function you need to add the keyword 'new' as you're making a new instance of the object, also ObjectId needs a lower case d there as well

const createRouter = function (collection) {
    
    const router = express.Router()

    router.get("/", (req, res) => {
        collection
            .find()
            .toArray()
            .then((data) => res.json(data))
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({status:500, error:err})
            })
    })

    router.post("/", (req, res) =>{
        const newData = req.body
        collection.insertOne(newData)
            .then(result =>{
                console.log(result)
                console.log(result.insertedId)
                res.json(result)
            })
            .catch((err) => {
                console.error(err)
                res.status(500)
                res.json({status:500, error:err})
            })
    })

    // deleting from the client side list but not the database - maybe a problem with ObjectID/the new version of mongodb working differently?
    router.delete("/:id", (req, res) => {
        const id = req.params.id
        collection.deleteOne({
            _id: new ObjectId(id)
        })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status:500, error:err})
        })
    })

    return router
}

module.exports = createRouter
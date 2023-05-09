let express = require('express')
let States = require('../models').States

let router = express.Router()

// respond to get requests to /states with json of all states in database
router.get('/states', function(req, res, next) {
    States.findAll({ order: ["name"] }).then(states => {
        return res.json(states)
    })
    .catch( err => next(err))
})

// get all info about 1 state
router.get('/state/:name', function(req, res, next) {
    let stateName = req.params.name
    States.findOne( {where: {name: stateName}})
        .then(state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('state not found')
            }
        })
        .catch(err => next(err))
})

// patch request router
router.patch('/states/:name', function(req, res, next) {
    // get name and visited from state in request
    let stateName = req.params.name
    let stateVisited = req.body.visited
    
    // update corresponding state in database
    States.update( { visited: stateVisited }, { where: { name: stateName }})
        .then( rowsUpdated => {
            // verify 1 state was updated. if 0 states updated, 404
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok')
            }

            return res.status(404).send('not found')
        })
        .catch( err => next(err))
})

module.exports = router
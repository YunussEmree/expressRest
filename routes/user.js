const express = require('express') // import express
const router = express.Router() // create a new router object



router.get('/', (req, res) => {
    res.send('User List') // log the request to the console
  })
  
router.get('/:id', (req, res) => {
    console.log(req.params.id) // get the id from the URL
    res.send('User ID: ' + req.params.id) // send a response to the client
  })

module.exports = router // export the router object
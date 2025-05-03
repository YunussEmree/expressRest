const express = require('express') // import express
const router = express.Router() // create a new router object

router.get('/', (req, res) => {
    res.send('Admin List') // log the request to the console
  })

module.exports = router // export the router object
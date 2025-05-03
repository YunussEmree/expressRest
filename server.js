const express = require('express')
const app = express()

// app.get('/', (req, res, next)) // first parameter is the request, second is the response, third is the next function

app.set('view engine', 'ejs') // set the view engine to ejs

app.get('/', (req, res) => {
  console.log('Request received')
  //res.send('Hello World!') // send a response to the client
  //res.sendStatus(500) // send a 500 status code to the client
  //res.status(500).send('Internal Server Error') // send a 500 status code and a message to the client
  //res.status(500).json({ error: 'Internal Server Error' }) // send a 500 status code and a JSON object to the client
  res.render('index', {name:"Yunus Emre"}) // render the index file
})


const userRouter = require('./routes/user') // import the user router
const adminRouter = require('./routes/admin') // import the admin router

app.use('/users', userRouter) // use the user router for all requests to /users
app.use('/admin', adminRouter) // use the admin router for all requests to /admin


app.listen(3000)

const express = require('express')
const User = require('./models/user')
const mongoose = require('mongoose')
const e = require('express')
require('dotenv').config({ path: './config/.env' })

//start server app
const app = express()
app.listen(3000,()=>console.log('server started'))

//connect to db
console.log(process.env.URI)
mongoose.connect(process.env.URI).then(()=>console.log('connected to db')).catch((error)=>console.log(error))

//setup to use json
app.use(express.json())

//routing
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
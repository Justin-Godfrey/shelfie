require('dotenv').config()
const express = require('express')
const massive = require('massive')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
   app.set('db', dbInstance)
   console.log('Database Connected')
   .catch((error => {
       if (error) throw error
   }))
})

app.listen(SERVER_PORT, () => {
   console.log(`Server running on ${SERVER_PORT}`)
})
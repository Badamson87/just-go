var mongoose = require('mongoose')
var connectionString = "mongodb://test:test123@ds237574.mlab.com:37574/just-go"
var connection = mongoose.connection


mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})
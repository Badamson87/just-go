let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'bucketList'






module.exports = mongoose.model(schemaName, schema)
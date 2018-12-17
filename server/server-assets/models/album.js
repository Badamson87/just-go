let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Album'

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  created: { type: Number, required: true, default: Date.now() },
  authorId: { type: ObjectId, ref: 'User', required: true },
  posts: [{ type: ObjectId, ref: 'Post' }]
})


module.exports = mongoose.model(schemaName, schema)
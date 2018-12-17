let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'


let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  postId: { type: ObjectId, ref: "Post", required: true },
  creatorId: { type: ObjectId, ref: "User" }
}, { timestamps: true, usePushEach: true })


module.exports = mongoose.model(schemaName, schema)
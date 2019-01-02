let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'


let schema = new Schema({
  title: { type: String },
  description: { type: String, required: true },
  postId: { type: ObjectId, ref: "Post", required: true },
  creatorId: { type: ObjectId, ref: "User" },
  creatorName: { type: String, required: true },
  albumId: { type: ObjectId, ref: 'Album' }
}, { timestamps: true, usePushEach: true })


module.exports = mongoose.model(schemaName, schema)
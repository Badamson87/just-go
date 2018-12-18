let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Album'

let Comment = require('./comment.js')

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  created: { type: Number, required: true, default: Date.now() },
  authorId: { type: ObjectId, ref: 'User', required: true },
  posts: [{ type: ObjectId, ref: 'Post' }],
  isBucketlist: {
    type: Boolean, required: true, default: false
  }
})

schema.pre('remove', function (next) {
  // @ts-ignore
  Promise.all([
    Comment.deleteMany({ albumId: this._id }),
  ])
    .then(() => next())
    .catch(err => next(err))
})



module.exports = mongoose.model(schemaName, schema)
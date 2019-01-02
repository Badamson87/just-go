let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

let Comment = require('./comment.js')


let rating = new Schema({
  creatorId: { type: ObjectId, ref: "User" },
  rating: { type: Number, default: 0 }
})

let flag = new Schema({
  creatorId: { type: ObjectId, ref: "User" },
  flag: { type: Number, default: 0 }
})

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  ratings: [rating],
  image: [{ type: String, required: true }],
  creatorId: { type: ObjectId, ref: "User", required: true },
  creatorName: { type: String, required: true },
  flags: [flag],
  location: { type: String, required: true },
  albumId: { type: ObjectId, ref: "Album" },
  isPrivate: { type: Boolean, required: true, default: false },
}, { timestamps: true })

schema.pre('remove', function (next) {
  // @ts-ignore
  Promise.all([
    Comment.deleteMany({ postId: this._id })
  ])
    .then(() => next())
    .catch(err => next(err))
})



module.exports = mongoose.model(schemaName, schema)
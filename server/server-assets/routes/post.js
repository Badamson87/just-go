let router = require('express').Router()
let Post = require('../models/post')
let mongoose = require('mongoose')

//  Create a post
router.post('/', (req, res, next) => {
  req.body.creatorId = req.session.uid
  Post.create(req.body)
    .then(newPost => {
      res.send(newPost)
      console.log(newPost)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

// Delete a post
router.delete('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (!post.creatorId.equals(req.session.uid)) {
        return res.status(401).send("Access Denied!")
      }
      post.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted Post")
      })
    })
})

// Edit a post
router.put('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (!post.creatorId.equals(req.session.uid)) {
        return res.status(401).send("Access Denied!")
      }
      post.update(req.body, (err) => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Updated Post")
      })
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


// Get a post by Id
router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


// Get all posts
router.get('/', (req, res, next) => {
  Post.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


// add a clone

router.post('/clone', (req, res, next) => {
  Post.findById(req.body.id)
    .exec((err, post) => {
      if (err) {
        console.log(err)
        next()
      }
      let clone = post
      clone._doc._id = mongoose.Types.ObjectId()
      clone._doc.creatorId = req.session.uid
      clone.isNew = true
      clone.save(err => {
        if (err) {
          console.log(err)
          next()
        }
        res.send(clone)
      })
    })
})


module.exports = router
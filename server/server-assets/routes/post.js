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
      res.status(400).send(err)
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
          res.status(400).send(err)
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
          res.status(400).send(err)
          next()
          return
        }
        res.send("Successfully Updated Post")
      })
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
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
      res.status(400).send(err)
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
      res.status(400).send(err)
    })
})


// Get a post by Album Id
router.get('/album/:id', (req, res, next) => {
  Post.find({ albumId: req.params.id })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})



// add a clone

router.post('/clone', (req, res, next) => {
  Post.findById(req.body.payload.postId)
    .exec((err, post) => {
      if (err) {
        console.log(err)
        res.status(400).send(err)
      }
      let clone = post
      clone._doc._id = mongoose.Types.ObjectId()
      clone._doc.creatorId = req.session.uid
      clone._doc.albumId = req.body.albumId
      clone._doc.location = req.body.payload.postData.location
      clone._doc.creatorName = req.body.payload.postData.creatorName
      clone._doc.title = req.body.payload.postData.title
      clone.isNew = true
      clone.save(err => {
        if (err) {
          console.log(err)
          return res.status(400).send(err)
        }
        res.send(clone)
      })
    })
})


module.exports = router
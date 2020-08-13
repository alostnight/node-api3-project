const express = require("express");
const Posts = require("./postDb");
const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  Posts.get(req.query)
  .then((post)=>{
    res.status(200).json(post)
  })
  .catch((error)=> {
    next(error)
  })
});

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  Posts.getById(req.params.id)
  .then((post)=>{
    if(post){
      res.status(200).json(post)
    }
  })
  .catch((error)=>{
    next(error)
  })
});

router.delete('/:id',validatePostId, (req, res) => {
  // do your magic!
  Posts.remove(req.params.id)
  .then((post)=> {
    res.status(200).json({message: "Post has been removed"})
  })
  .catch((error)=> {
    next(error)
  })
});

router.put('/:id',validatePostId, (req, res) => {
  // do your magic!
  Posts.update(req.params.id, req.body)
  .then(post => {
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'The post could not be found'})
    }
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      message: 'There was an error updating the post'
    });
  });
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  Post = req.params.id;

  Posts.getById(Post)
    .then((response) => {
      if (!response) {
        res.status(400).json({ error: "Invalid Post ID" });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(400).json({ error: "Invalid Post ID" });
    });
}

module.exports = router;

const express = require("express");
const router = express.Router();
const Post = require("../models/programModel");

router.get("/week/:id", async (req, res) => {
  //   console.log(req.params.id);
  try {
    const response = await Post.find();
    res.json(response);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete endpoint

// archive endpoint

module.exports = router;

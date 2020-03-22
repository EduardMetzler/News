const { Router } = require("express");
// const bcrypt = require("bcryptjs");
const config = require("config");
const Article = require("../models/Article");
const Comment = require("../models/Comment");

// const jwt = require("jsonwebtoken");
// const { check, validationResult } = require("express-validator");
// const Text = require("../models/Text");
// const auth = require("../middleware/auth.middleware");

const router = Router();

router.get("/", async (req, res) => {
  console.log("req.params.id/ddddddddddddddddddddddddddddddddddddddddddddddd");
  // console.log(req.params.id.payload.payload.id);

  // console.log(req.params);

  // console.log("id:", req.body.payload.payload);

  try {
    // const oneEntry = await Text.findById(req.params.id);
    const comments = await Comment.find({});

    // const comments = await Comment.find({ owner: req.body.payload.payload });
    // const comments = await Comment.find({});
    // // const oneEntry = await Article.find({ _id: req.params.id });

    console.log("ddddddd", comments);
    res.json(comments);
  } catch (e) {
    res.status(500).json({ message: "Etwas schief gelaufen" });
  }
});

module.exports = router;

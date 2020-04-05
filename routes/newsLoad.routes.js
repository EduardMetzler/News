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
  try {
    const articles = await Article.find({});

    // console.log(articles);

    res.json(articles);
  } catch (e) {
    res.status(500).json({ message: "Etwas schief gelaufen" });
  }
});
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    // const comments = await Comment.find({});
    // console.log(comments);
    const article = await Article.findById(req.params.id);
    console.log(article);
    res.json(article);
  } catch (e) {
    res.status(500).json({ message: "Etwas schief gelaufen" });
  }
});

//   try {
//     const comments = await Comment.find({ _id: "5e739c99a7dfcc46b07cd37d" });
//     console.log(comments);
//     res.json(comments);
//   } catch (e) {
//     res.status(500).json({ message: "Etwas schief gelaufen" });
//   }

// router.post("/commentSave", async (req, res) => {
//   console.log("commentSave");
//   try {
//     // console.log(req.body.payload.payload);

//     const { text, firstName, lastName, owner } = req.body.payload.payload;

//     const comment = new Comment({
//       text,
//       firstName,
//       lastName,
//       owner
//     });
//     console.log("comment", comment);

//     await comment.save();

//     // res.status(201).json({ message: "Komment ist gespeichert" });
//     res.status(201).json();
//   } catch (e) {
//     res.status(500).json({ message: "Etwas schief gelaufen" });
//   }
// });

module.exports = router;

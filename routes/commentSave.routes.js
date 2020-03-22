const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const Comment = require("../models/Comment");
const auth = require("../middleware/auth.middleware");

const router = Router();

router.post("/", async (req, res) => {
  console.log("commentSave");
  try {
    // console.log(req.body.payload.payload);

    const { text, firstName, lastName, owner } = req.body.payload.payload;

    const comment = new Comment({
      text,
      firstName,
      lastName,
      owner
    });
    console.log("comment", comment);

    await comment.save();

    // res.status(201).json({ message: "Komment ist gespeichert" });
    res.status(201).json();
  } catch (e) {
    res.status(500).json({ message: "Etwas schief gelaufen" });
  }
});

module.exports = router;

const { Router } = require("express");
// const bcrypt = require("bcryptjs");
const config = require("config");
// const jwt = require("jsonwebtoken");
// const { check, validationResult } = require("express-validator");
// const Text = require("../models/Text");
// const auth = require("../middleware/auth.middleware");

const router = Router();

router.post("/", async (req, res) => {
  console.log("req.params.id");
  // try {
  //   const oneEntry = [{ title: "title", content: "content" }];
  //   console.log(oneEntry);

  //   res.json(oneEntry);
  //   //   res.status(201).json({ oneEntry });
  // } catch (e) {
  //   res.status(500).json({ message: "Etwas schief gelaufen" });
  // }
});

module.exports = router;

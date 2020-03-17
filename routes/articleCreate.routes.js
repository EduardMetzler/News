const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const Article = require("../models/Article");

const router = Router();

router.post(
  "/",
  // [
  //   check("payload.email", "das ist kein email").isEmail(),
  //   check("payload.password", "min länge 6 zeichen").isLength({ min: 6 })
  // ],

  async (req, res) => {
    console.log("das ist article", req.body.payload.article);
    try {
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({
      //     errors: errors.array(),
      //     message: "Falsche daten bei registrirung"
      //   });
      // }

      const { title, text } = req.body.payload.article;

      //   const candidate = await User.findOne({ email });
      //   console.log(candidate);

      //   if (candidate) {
      //     return res.json({ message: "User bereits existiert" });

      //     // return res.status(400).json({ message: "User bereits existiert" });
      //   }

      //   const hashedPassword = await bcrypt.hash(password, 12);

      const article = new Article({
        title,
        text
      });
      console.log("das ist neue article", article);

      await article.save();
      res.status(201).json({ message: "Article ist gespeichert" });
      // res.status(201);
    } catch (e) {
      res.status(500).json({ message: "Ein Feler ist aufgetreten" });
    }
    // };
  }
);

module.exports = router;

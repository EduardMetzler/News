const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const Advertising = require("../models/Advertising");

const router = Router();

router.post(
  "/",

  async (req, res) => {
    console.log("das ist advertising", req.body.payload.advertising);
    try {
      const { url, imageUrl } = req.body.payload.advertising;

      const advertising = new Advertising({
        url,
        imageUrl
      });
      //   console.log("das ist neue article", article);

      await advertising.save();
      res.status(201).json({ message: " Advertising ist gespeichert" });
      // res.status(201);
    } catch (e) {
      res.status(500).json({ message: "Ein Feler ist aufgetreten" });
    }
  }
);
module.exports = router;

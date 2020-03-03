const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = Router();

router.post(
  "/",
  [
    check("payload.email", "Email oder passwort falsch")
      .normalizeEmail()
      .isEmail(),
    check("payload.password", "Email oder passwort falsch").exists()
  ],
  async (req, res) => {
    try {
      console.log("1");
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Email oder passwort falsch"
        });
      }
      console.log("2");

      const { email, password } = req.body.payload;
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        return res.status(400).json({ message: "Email oder passwort falsch" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Email oder passwort falsch" });
      }
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecter"), {
        expiresIn: "1h"
      });
      console.log(token, user.id);
      res.json({ token, userId: user.id, message: "enter" });
    } catch (e) {
      res.status(500).json({ message: "error" });
    }
  }
);

module.exports = router;

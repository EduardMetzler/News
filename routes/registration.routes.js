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
    check("payload.email", "das ist kein email").isEmail(),
    check("payload.password", "min länge 6 zeichen").isLength({ min: 6 })
  ],

  async (req, res) => {
    console.log("req.body.payload");
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Falsche daten bei registrirung"
        });
      }

      const { firstName, lastName, email, password } = req.body.payload;
      // const firstName = req.body.payload.firstName;
      console.log(firstName);

      const candidate = await User.findOne({ email });
      console.log(candidate);

      if (candidate) {
        return res.json({ message: "User bereits existiert" });

        // return res.status(400).json({ message: "User bereits existiert" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        firstName,
        lastName,
        email,
        admin: false,
        password: hashedPassword
      });
      console.log("das ist user", user);

      await user.save();
      res.status(201).json({ message: "Du bist registriert" });
      // res.status(201);
    } catch (e) {
      res.status(500).json({ message: "Die daten sind nicht korrekt" });
    }
    // };
  }
);

module.exports = router;

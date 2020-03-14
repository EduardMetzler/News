// const { Router } = require("express");
// const bcrypt = require("bcryptjs");
// const config = require("config");
// const jwt = require("jsonwebtoken");
// const { check, validationResult } = require("express-validator");
// const User = require("../models/User");

// const router = Router();

// router.post(
//   "/",
//   // [
//   //   check("payload.email", "Email oder passwort falsch")
//   //     .normalizeEmail()
//   //     .isEmail(),
//   //   check("payload.password", "Email oder passwort falsch").exists()
//   // ],
//   async (req, res) => {
//     try {
//       console.log("1", req.body.payload);
//       // const errors = validationResult(req);
//       // if (!errors.isEmpty()) {
//       //   return res.status(400).json({
//       //     errors: errors.array(),
//       //     message: "Email oder passwort falsch"
//       //   });
//       // }
//       console.log("2");

//       const { email, password } = req.body.payload;
//       const user = await User.findOne({ email });
//       console.log(user);

//       if (!user) {
//         return res.status(400).json({ message: "Email oder passwort falsch" });
//       }
//       const isMatch = await bcrypt.compare(password, user.password);
//       console.log(password);
//       if (!isMatch) {
//         return res.status(400).json({ message: "Email oder passwort falsch" });
//       }
//       const token = jwt.sign({ userId: user.id }, config.get("jwtSecter"), {
//         expiresIn: "1h"
//       });
//       console.log(token, user.id);
//       res.json({ token, userId: user.id, message: "enter" });
//     } catch (e) {
//       res.status(500).json({ message: "error" });
//     }
//   }
// );

// module.exports = router;

const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
// const auth = require("../middleware/auth.middleware");

const router = Router();

router.post(
  "/",
  // auth,
  // [
  //   check("email", "geben Sie korrekte email")
  //     .normalizeEmail()
  //     .isEmail(),
  //   check("password", "geben Sie password").exists()
  // ],
  async (req, res) => {
    console.log("2fffffffffffff");
    try {
      // console.log("1", req.body);
      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({
      //     errors: errors.array(),
      //     message: "falsche daten bei loginnnn"
      //   });
      // }
      console.log("2");

      const { email, password } = req.body;
      console.log(email, password);
      const user = await User.findOne({ email });
      console.log("das ist user", user);

      if (!user) {
        console.log("Email oder passwort falsch");
        // return res.json({ message: "///Email oder passwort falsch" });
        return res
          .status(400)
          .json({ message: "///Email oder passwort falsch" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(password);
      if (!isMatch) {
        // return res.json({ message: "Email oder passwort falsch" });
        return res.status(400).json({ message: "Email oder passwort falsch" });
      }
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecter"), {
        expiresIn: "1h"
      });
      console.log(token, user.id, user.firstName);
      res.json({
        token,
        userId: user.id,
        message: " enter",
        firstName: user.firstName,
        lastName: user.lastName,
        admin: user.admin
      });
    } catch (e) {
      res.status(500).json({ message: "error" });
    }
  }
);

module.exports = router;

const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");

const router = Router();

router.post("/", auth, async (req, res) => {
  // console.log("rrrrrr", req.user);
  try {
    const users = await User.find({ admin: false });
    // console.log("alle users", users.length, users);
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: "Etwas schif gelaufengggggggggggg" });
  }
});

router.put("/newAdmin", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ _id: req.body.id });
    user.admin = true;
    //  const newAdmin= user
    console.log(user);
    User.findByIdAndUpdate(req.body.id, user, function(err, user) {
      if (!err) return res.status(200);
    });
  } catch (e) {
    res.status(500).json({ message: "Etwas schif gelaufengggggggggggg" });
  }
});

module.exports = router;

const { Router } = require("express");
// const bcrypt = require("bcryptjs");
const config = require("config");
const Advertising = require("../models/Advertising");

const router = Router();

router.get("/", async (req, res) => {
  console.log("sssssssssssssssssssss");
  try {
    const advertising = await Advertising.find({});

    console.log(advertising);

    res.json(advertising);
  } catch (e) {
    res.status(500).json({ message: "Etwas schief gelaufen" });
  }
});

module.exports = router;

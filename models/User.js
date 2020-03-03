const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = model("User", schema);

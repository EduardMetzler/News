const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  text: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  owner: { type: String, required: true }
});

module.exports = model("Comment", schema);

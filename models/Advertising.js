const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  url: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = model("Advertising", schema);

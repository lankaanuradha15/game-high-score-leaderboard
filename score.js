const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  playerName: String,
  gameType: String,
  score: Number
});

module.exports = mongoose.model("Score", scoreSchema);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Score = require("./models/Score");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/leaderboardDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/scores", async (req, res) => {
  try {
    const gameType = req.query.gameType;

    let query = {};

    if (gameType && gameType !== "All") {
      query.gameType = gameType;
    }

    const scores = await Score.find(query)
      .sort({ score: -1 })
      .limit(10);

    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
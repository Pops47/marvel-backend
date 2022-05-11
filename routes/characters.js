require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}`
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

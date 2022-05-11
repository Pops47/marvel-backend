require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  const limit = 100;
  try {
    console.log(req.query);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}`
    );
    // &title=${req.query.title}&title=${req.query.title} boucles pour passer les query?
    console.log(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

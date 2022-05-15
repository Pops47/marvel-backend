const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comic/:comicId", async (req, res) => {
  try {
    //   Get id in params
    const { comicId } = req.params;
    //Send request with APIKey and id
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MARVEL_API_KEY}`
    );
    //Return answer from Marvel API
    res.status(200).json(response.data);
    //Handle errors
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

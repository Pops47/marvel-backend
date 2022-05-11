const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  try {
    const limit = 100;
    //   Get queries and insert them in request if they exist
    const { title, skip } = req.query;
    let queries = "";
    if (title) {
      queries += `&title=${title}`;
    }
    if (skip) {
      queries += `&skip=${skip}`;
    }
    //Send request with APIKey and queries
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&limit=${limit}${queries}`
    );
    //Return answer from Marvel API
    res.status(200).json(response.data);
    //Handle errors
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

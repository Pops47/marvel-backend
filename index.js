require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();

app.use(formidable());
app.use(cors());

// Welcome route
app.get("", (req, res) => {
  res.status(200).json({
    message: "Welcome to Marvel-backend on Heroku server",
  });
});
//App routes
const comicsRoute = require("./routes/comics"); // Possible queries title limit and skip
app.use(comicsRoute);
const charactersRoute = require("./routes/characters"); // Possible queries title and skip - limit defined to 100
app.use(charactersRoute);
const comicsByCharacterRoute = require("./routes/comics-by-character");
app.use(comicsByCharacterRoute);
const characterByIdRoute = require("./routes/character-by-id");
app.use(characterByIdRoute);

//404
app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

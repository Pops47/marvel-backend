const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();

app.use(formidable());
app.use(cors());

app.get("", (req, res) => {
  res.status(200).json({
    message: "Welcome to Marvel-backend on Heroku server",
  });
});

const comicsRoute = require("./routes/comics"); //paramètres skip et title en query
app.use(comicsRoute);

app.all("*", (req, res) => {
  res.status(404).send("Page introuvable");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

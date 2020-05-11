require("dotenv/config");
const express = require("express");
const cors = require("cors");
const translate = require("translate");

const app = express();
translate.engine = process.env.ENGINE;
translate.key = process.env.TRANSLATE_JS;

app.use(express.json());
app.use(cors());

app.post("/:language1/:language2", async (req, res) => {
  const { language1, language2 } = req.params;
  const { text } = req.body;
  res.send(await translate(text, { from: language1, to: language2 }));
});

module.exports = app;

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const async = require("hbs/lib/async");
const mongoose = require("mongoose");
const celebrities = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res) => {
  try {
    const newCelebrities = req.body;

    await celebrities.create(newCelebrities);
  } catch (err) {
    console.log("There has been an error");
    res.render("celebrities/new-celebrity");
  }

  res.redirect("/");
});

router.get("/celebrities", async (req, res) => {
  try {
    const celebritiesDB = await celebrities.find();
    console.log(celebritiesDB);
    res.render("celebrities/celebrities", { celebritiesDB });
  } catch (err) {
    console.log("We got an error");
  }
});
module.exports = router;

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
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

  //maybe add finally

  res.redirect("/");
});

module.exports = router;

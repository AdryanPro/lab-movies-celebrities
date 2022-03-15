// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const mongoose = require("mongoose");
const Movies = require("../models/movie.model");

// all your routes here
router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie.hbs");
});

router.post("/movies/create", async (req, res) => {
  const moviesDB = req.body;

  try {
    await Movies.create(moviesDB);
  } catch (err) {
    console.log("Error creating the movie", err);
    res.render("movies/new-movie");
  }
  res.redirect("/");
});

module.exports = router;

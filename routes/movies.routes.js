// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const mongoose = require("mongoose");
const Movies = require("../models/movies.model");

// all your routes here
router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie.hbs");
});

//router.post(""());
module.exports = router;

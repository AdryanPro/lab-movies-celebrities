// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { redirect } = require("express/lib/response");
const async = require("hbs/lib/async");
const mongoose = require("mongoose");
const Movies = require("../models/movie.model");
const celebrities = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", (req, res) => {
  res.render("movies/new-movie.hbs");
});

router.post("/movies/create", async (req, res) => {
  const newMovies = req.body;

  try {
    await Movies.create(newMovies);
  } catch (err) {
    console.log("Error creating the movie", err);
    res.render("movies/new-movie");
  }
  res.redirect("/");
});

router.get("/movies", async (req, res) => {
  try {
    const movieDb = await Movies.find();

    res.render("movies/movies", { movieDb });
  } catch (err) {
    console.log("Error finding mobie", err);
    res.render("/movies/new-movie");
  }

  // res.redirect("/");
});

router.get("/movies/:id", async (req, res) => {
  console.log(req.params);

  const findId = Movies.findById(req.params.id);

  await findId.populate("name");

  res.render("movies/movie-details");
});

module.exports = router;

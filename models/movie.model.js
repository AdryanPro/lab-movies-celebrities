const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
    unique: true,
  },
  cast: {
    type: [Object], //the isse may be wityh this guy
  },
});

const movieModel = model("model", movieSchema);

module.exports = movieModel;

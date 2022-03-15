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
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

const movieModel = model("model", movieSchema);

module.exports = movieModel;

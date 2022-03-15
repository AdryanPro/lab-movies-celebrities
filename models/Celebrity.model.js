const { model, Schema } = require("mongoose");

const celebritySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  catchPhrase: {
    type: String,
    required: true,
    unique: true,
  },
});

const celebrityModel = model("model", celebritySchema);
module.exports = celebrityModel;

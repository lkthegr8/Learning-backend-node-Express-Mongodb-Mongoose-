const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    record: { type: String, required: true },
    date: { type: Number, default: Date.now },
  } /** here we can add onmore paramater as ",{collection:'collection name' }
  if we dont specify then the name of the collection is 'todomodel' which is specified in model function below" */
);

const model = mongoose.model("TodoModel", TodoSchema);

// the export is not reqired as the mongoose directly sets the data in the models and we can get it any where
module.exports = model;

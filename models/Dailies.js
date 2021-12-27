const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailiesGroupSchema = new Schema({
  name: String,
  dailies: [{
    type: String,
    date: Date,
    amount: Number,
    userId: String
  }]
});
module.exports = Dailies = mongoose.model("dailies", DailiesGroupSchema);
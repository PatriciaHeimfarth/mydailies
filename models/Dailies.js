const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = new Schema({
  type: String,
  date: Date,
  amount: Number,
  userId: String
});

const DailiesGroupSchema = new Schema({
  name: String,
  dailies: [DailySchema]
});




module.exports = Dailies = mongoose.model("dailies", DailiesGroupSchema);
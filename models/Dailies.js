const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = new Schema({
  type: String,
  amount: Number,
   
});

const DailiesGroupSchema = new Schema({
  userId: String,
  date: Date,
  dailies: [DailySchema]
});




module.exports = Dailies = mongoose.model("dailies", DailiesGroupSchema);
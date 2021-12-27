const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = new Schema({
  type: String,
  amount: Number,
   
});

const DailiesGroupSchema = new Schema({
  userId: String,
  date: Date, //2222-02-01T00:00:00.000Z
  dailies: [DailySchema]
});




module.exports = Dailies = mongoose.model("dailies", DailiesGroupSchema);
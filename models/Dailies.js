const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailiesGroupSchema = new Schema({
  name: String,
  dailies: mongoose.Schema.Types.Mixed
});
module.exports = Dailies = mongoose.model("dailies", DailiesGroupSchema);
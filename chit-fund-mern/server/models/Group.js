const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  members: Number,
  monthlyInstallment: Number,
  startDate: String,
  endDate: String,
  description: String,
  status: {
    type: String,
    default: "Active",
  },
});

module.exports = mongoose.model("Group", GroupSchema);

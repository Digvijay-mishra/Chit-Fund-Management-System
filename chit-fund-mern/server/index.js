
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/groups", require("./routes/groupRoutes"));
app.use("/api/members", require("./routes/memberRoutes"));
app.use("/api/auction", require("./routes/auctionRoutes"));
app.use("/api/tally", require("./routes/tallyRoutes"));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

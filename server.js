require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//connect to database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
// app.use("/api/adminUsers", require("./routes/api/adminUsers"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/leadAuth", require("./routes/api/leadAuth"));
app.use("/api/adminProfile", require("./routes/api/adminProfile"));
app.use("/api/leads", require("./routes/api/leads"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/simplyRets", require("./routes/api/simplyRets"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

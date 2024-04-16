const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "client/build");

const availabilityController = require("./controllers/availabilityController");

app.use((req, res, next) => {
  express.static(publicPath);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/availability/create", availabilityController.createAvailability);

app.get("/*", function (req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 7070);

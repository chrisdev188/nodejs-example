const express = require("express");

// convention
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
  res.end();
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

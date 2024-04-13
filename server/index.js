const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // https://www.npmjs.com/package/uuid
const app = express();
const publicPath = path.join(__dirname, "..", "client/build");

app.use(express.static(publicPath));

app.get("/test", (req, res) => {
  res.json({ sample: `Hello World!`, hash: uuidv4() });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 7070);

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

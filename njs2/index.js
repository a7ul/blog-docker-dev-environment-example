const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Hello from NJS2"));

app.listen(port, () => console.log(`NJS2 app listening on port ${port}!`));

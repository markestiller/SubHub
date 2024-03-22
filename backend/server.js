// imports and setup
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// middlewares
app.use(cors());
app.use(express.json());

// route handlers

app.post("/create-property", (req, res) => {
  // frontend sends property information to backend
});

app.get("/get-property", (req, res) => {
  // frontend receives one property information from backend
});

app.get("/get-properties", (req, res) => {
  // frontend receives all property information from backend
});

// start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

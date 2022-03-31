const express = require("express")();
const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/api/playbooks", (req, res) => {
  res.status(200).send({
    count: 10,
    results: [
      {
        index: "fae",
        name: "The Fae",
        url: "",
      },
      {
        index: "ghost",
        name: "The Ghost",
        url: "",
      },
      {
        index: "ghoul",
        name: "The Ghoul",
        url: "",
      },
    ],
  });
});

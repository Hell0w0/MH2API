const express = require("express");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const playbooksList = require("./data/playbooks-list");

app.use(cors());

app.listen(PORT, () => {
  console.log("Express server listening on port %d", PORT);
});
app.get("/api/playbooks", (req, res) => {
  res.status(200).send(res.json(playbooksList));
});

app.get("/api/playbooks/:index", (req, res) => {
  const index = req.params.index;
  const playbook = require(`./data/playbooks/${index}.json`);
  res.status(200).send(res.json(playbook));
});

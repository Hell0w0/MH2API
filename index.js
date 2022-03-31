const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const playbooksList = require("./data/playbooks-list");

console.log(playbooksList);

app.listen(PORT, () => console.log("Its working on port " + PORT));

app.get("/api/playbooks", (req, res) => {
  res.status(200).send(res.json(playbooksList));
});

app.get("/api/playbooks/:index", (req, res) => {
  const index = req.params.index;
  const playbook = require(`./data/playbooks/${index}.json`);
  res.status(200).send(res.json(playbook));
});

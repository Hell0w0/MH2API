const express = require("express");
const app = express();
const playbooksList = require("./data/playbooks-list");

console.log(playbooksList);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
app.get("/api/playbooks", (req, res) => {
  res.status(200).send(res.json(playbooksList));
});

app.get("/api/playbooks/:index", (req, res) => {
  const index = req.params.index;
  const playbook = require(`./data/playbooks/${index}.json`);
  res.status(200).send(res.json(playbook));
});

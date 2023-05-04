const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
const chef = require("./data/data.json");
app.get("/", (req, res) => {
  res.send("Splice station");
});
app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chefId = chef.find((chef) => chef.id == id);
  res.send(chefId);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`Running on port:${PORT}`));

app.use(fonts({
  'csspath': '/css',
  'fontspath': '/fonts',
  'fontsdir': './fonts'
}));

const groceriesList = [
  {
    item: "milk",
    quantity: 4,
  },
  {
    item: "pasa",
    quantity: 1,
  },
  {
    item: "bidon",
    quantity: 1,
  },
  {
    item: "svalkapow",
    quantity: 7,
  },
  {
    item: "cereal",
    quantity: 6,
  },
  {
    item: "pop-tart",
    quantity: 7,
  },
];

app.get("/groceries", (req, res) => {
  res.send(groceriesList);
});

app.post("/groceries", (req, res) => {
  groceriesList.push(req.body)
  res.sendStatus(201);
});

app.get("/", (req, res) => {
  res.redirect("/groceries");
});

app.post('/groceries', (req,res) =>{


})
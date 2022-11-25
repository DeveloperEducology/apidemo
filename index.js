const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const Cless = require("./db/Cless");
const Chapter = require("./db/Chapter");
const Unit = require("./db/Unit")
const Element = require("./db/Element");

const Chapters = require("./db/Chapters")

const { ObjectId } = require("mongodb");

const URL = `mongodb+srv://vijaymarka:admin123@cluster0.ivjiolu.mongodb.net/EducologyWeb?retryWrites=true&w=majority`;
/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Login and Register

app.post("/add-class", async (req, res) => {
  const cless = new Cless();
  cless.title = req.body.title;
  await cless.save((err, cless) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      console.log(cless);
      res.send(cless);
    }
  });
});

app.get("/all-cless", async (req, res) => {
  try {
    let cless = await Cless.find();
    if (cless.length > 0) {
      res.send(cless);
    } else {
      res.send({ result: "No cless found" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/add-chapter", async (req, res) => {
  const chapter = new Chapters();

  const cats = req.body.cats;
  const classIds = [];
  for (var i = 0; i < classIds.length; i++) {
    classIds.push(cats[i]);
  }

  chapter.title = req.body.title;
  chapter.classIds = req.body.classIds;
  await chapter.save((err, chapter) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      console.log(chapter);
      res.send(chapter);
    }
  });
});

app.get("/all-chapters", async (req, res) => {
  try {
    let chapters = await Chapters.find();
    // res.send(products);
    if (chapters.length > 0) {
      res.send(chapters);
    } else {
      res.send({ result: "No chapters found" });
    }
  } catch (err) {
    console.log(err);
  }
});


app.post("/add-unit", async (req, res) => {
  const unit = new Unit();

  const cats = req.body.cats;
  const classIds = [];
  for (var i = 0; i < classIds.length; i++) {
    classIds.push(cats[i]);
  }

  unit.title = req.body.title;
  unit.classIds = req.body.classIds;
  unit.unitIds = req.body.unitIds;
  await unit.save((err, unit) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      console.log(unit);
      res.send(unit);
    }
  });
});


app.get("/all-units", async (req, res) => {
  try {
    let units = await Unit.find();
    // res.send(products);
    if (units.length > 0) {
      res.send(units);
    } else {
      res.send({ result: "No units found" });
    }
  } catch (err) {
    console.log(err);
  }
});



app.post("/add-element", async (req, res) => {
  const element = new Element();
  const units = req.body.units;
  const unitIds = [];
  for (var i = 0; i < unitIds.length; i++) {
    unitIds.push(units[i]);
  }
  const opts = req.body.opts;
  const options = [];
  for (let i = 0; i < options.length; i++) {
    options.push(opts[i]);
  }
  element.question = req.body.question;
  element.options = req.body.options;
  element.correct_answer = req.body.correct_answer;
  element.unitIds = req.body.unitIds;
  await element.save((err, element) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      console.log(element);
      res.send(element);
    }
  });
});

app.get("/elements", async (req, res) => {
  try {
    let elements = await Element.find();
    // res.send(products);
    if (elements.length > 0) {
      res.send(elements);
    } else {
      res.send({ result: "No elements found" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

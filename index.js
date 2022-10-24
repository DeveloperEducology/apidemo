const mongodb = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// require("./db/config");

const Cless = require("./db/Cless");
const Chapter = require("./db/Chapter");
const Element = require("./db/Element");
const { ObjectId } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send("Hello world")
})

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
  const chapter = new Chapter();

  const cats = req.body.cats;
  const categoryIds = [];
  for (var i = 0; i < categoryIds.length; i++) {
    categoryIds.push(cats[i]);
  }

  chapter.title = req.body.title;
  chapter.categoryIds = req.body.categoryIds;
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
    let chapters = await Chapter.find();
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



app.post("/add-element", async (req, res) => {
  const element = new Element();
  const chpts = req.body.chpts;
  const chapterIds = [];
  for (var i = 0; i < chapterIds.length; i++) {
    chapterIds.push(cats[i]);
  }
  const opts = req.body.opts;
  const options = [];
  for (let i = 0; i < options.length; i++) {
    options.push(opts[i]);
  }
  element.question = req.body.question;
  element.options = req.body.options;
  element.correct_answer = req.body.correct_answer;
  element.chapterIds = req.body.chapterIds;
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

// app.listen(5000);
mongoose
  .connect(
    `mongodb+srv://vijaymarka:admin123@cluster0.ivjiolu.mongodb.net/EducologyWeb?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });


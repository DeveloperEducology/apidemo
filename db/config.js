const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/e-commerce");
mongoose
  .connect(
    `mongodb+srv://vijaymarka:vijay123@cluster0.ivjiolu.mongodb.net/USERS-PLACES?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

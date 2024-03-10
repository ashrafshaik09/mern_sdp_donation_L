const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const donatorRouter = require('./routes/donatorroute');

const dburl = "mongodb://localhost:27017/donationbe";
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB Successfully !");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", donatorRouter);

const port = 2014;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

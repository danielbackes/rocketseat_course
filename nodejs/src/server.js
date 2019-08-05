const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
// App start
const app = express();

// DB start
try {
  mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true
  });
} catch (err) {
  console.error("Erro na conexão com mongodb: " + err);
}

requireDir("./models");
const Product = mongoose.model("Product");

// Router
app.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native"
  });
  res.send("Hello Rocketseat Mongo");
});

app.listen(3000);

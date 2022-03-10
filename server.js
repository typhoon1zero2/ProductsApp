/****************************************
 * Import Our Dependencies
 ***************************************/
require("dotenv").config(); // Loads Env vars into process.env
const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const productsRoutes = require("./controllers/products-controller.js");
const productsController = require("./controllers/products-controller.js");
const Product = require("./models/product");

// App Object Setup
const app = express();
app.engine("jsx", require("express-react-views").createEngine());
app.set("view engine", "jsx");

/***************************
 *  Database Connection
 ***************************/
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

/****************************************
    MIDDLEWARE (APP.USE)
*****************************************/
app.use((req, res, next) => {
  console.log(req.body);
  next();
});
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Routes
app.use("/products", productsController);
app.get("/", (req, res) => {
  res.send(" <h1>Welcome to my Product-App</h1>");
});

//Server Listener
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`If your reading this...You still listening port: ${PORT}`)
);

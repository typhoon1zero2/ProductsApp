/****************************************
 * Import Our Dependencies
 ***************************************/
require("dotenv").config(); // Loads Env vars into process.env
const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const productsController = require("./controllers/products-controller.js");
const userController = require('./controllers/users-controller.js');
const Product = require("./models/product");
const session = require("express-session");
const mongoLog = require("connect-mongo");

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
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: mongoLog.create({ mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: parseInt(process.env.SESSION_MAX_AGE)
    }
  })
);

/**************************
 *  ROUTES
 **************************/
app.use("/user", userController );
app.use("/products", productsController);
app.get("/", (req, res) => {
  res.send(`<h2> Welcome to my Product-App</h2> <br/> `);
});

/***************************
 * Server Listener
 ***************************/
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`If your reading this...You still listening port: ${PORT}`)
);

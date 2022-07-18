const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");
const remoteConnection = require("./db-connection");

const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

const cn = remoteConnection;

const connectionStr =
  "mongodb://localhost:27017";
  mongoClient
  .connect(connectionStr, {
    useNewUrlParser: false,
    useUnifiedTopology: false,
    
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//coockie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//error handling
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.Port, () => {
  console.log(`app listening to port ${process.env.Port}`);
});

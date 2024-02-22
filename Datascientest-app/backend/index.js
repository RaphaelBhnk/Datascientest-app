const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes/users-routes");

const app = express();
app.listen(8080, () => console.log("listening on port 8080"));

app.use(bodyParser.json());

// const validatePassword = require("./validatePassword");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("", router);

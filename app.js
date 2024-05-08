const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");

//const connectToDatabase = require("./database/connect");
//const cors = require("./middlewares/cors");

const PORT = 3000;
const app = express();

//connectToDatabase();

app.use(
  //cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  usersRouter,
  categoriesRouter,
  gamesRouter
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});

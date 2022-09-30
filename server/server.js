const { PORT, API } = require("./config/server.config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser")

const corsOptions = {
  origin: "http://localhost:8082",
};
const app = express();
const db = require("./models/index");

app.use(cors(corsOptions));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser())

// session secret
app.use(
  session({ secret: "imFrontender", resave: true, saveUninitialized: true })
);

// Configuring Passport
app.use(passport.initialize());
app.use(passport.session()); //

// Init Sequelize
db.sequelize.sync();

// User router
app.use(`${API.path}`, userRouter);

// Static files
app.use(express.static(path.join(__dirname, "../dist/")));

// App run
app.listen(PORT, () => {
  console.log(API.path);
  console.log("App started an port " + PORT);
});

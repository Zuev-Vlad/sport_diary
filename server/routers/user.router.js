const express = require("express");
const { vlidateAuthToken } = require("../controllers/auth.controller");
const userRouter = express.Router();
const {
  findAllUser,
  createUser,
  deleteUser,
} = require("../controllers/user.controller");

const {
  userLogin,
  userLogOut,
  userRegister,
} = require("./../controllers/auth.controller");

userRouter.use((req, res, next) => {
  res.setHeader("Content-type", "application/json");
  next();
});

userRouter.get("/user/login", userLogin);
userRouter.post("/user/register", userRegister);

userRouter.get("/user/test", vlidateAuthToken, (req, res) => {
  res.send(JSON.stringify({ success: true }));
});

userRouter.post("/user", vlidateAuthToken, createUser);

userRouter.get("/users", vlidateAuthToken, findAllUser);

userRouter.delete("/user/:id", vlidateAuthToken, deleteUser);

userRouter.get("/user/logout", userLogOut);

module.exports = userRouter;

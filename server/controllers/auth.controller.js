const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./../models/index");
const UserModel = db.users;

exports.userLogin = (req, res) => {
  res.send("Login success");
};

exports.userLogOut = (req, res) => {
  res.send("Logout successful");
};

exports.vlidateAuthToken = async (req, res, next) => {
  const sendAnauthorizedError = () =>
    res.status(400).json({ error: "Anauthorized request" });

  const authToken = req?.cookies?.Auth;
  const { login } = req?.body;

  if (!authToken || !login) return sendAnauthorizedError();

  const data = await UserModel.findOne({ where: { login: login } });
  const user = data?.dataValues;
  if (!user?.id) return sendAnauthorizedError();

  console.log({ authToken, jwt });
  jwt.verify(authToken, "test", (err, decode) => {
    if (err) {
      return sendAnauthorizedError();
    }
    console.log({ decode });
    return next();
  });
};

exports.userRegister = async (req, res) => {
  console.log({ req: req?.body });

  const { phone, name, password } = req?.body;
  if (!phone) return res.send(JSON.stringify("Phone is required"));
  if (!name) return res.send(JSON.stringify("Name is required"));
  if (!password) return res.send(JSON.stringify("Password is required"));

  UserModel.create({
    login: phone,
    phone,
    firstName: name,
    password: await bcrypt.hash(password, 10),
  })
    .then((userData) => {
      const token = jwt.sign({ id: userData.id }, "test", {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });
      res.cookie("Auth", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });

      const clearUser = { ...userData.dataValues };
      delete clearUser.password;
      res.status(201).send(JSON.stringify(clearUser));
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json(err);
    });
};

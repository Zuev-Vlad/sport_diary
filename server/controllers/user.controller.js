const db = require("../models/index");
const bcrypt = require("bcrypt");
const UserModel = db.users;

exports.findById = (req, res) => {
  UserModel.findById(id).then((user) => {
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({
        message: `Cannot find Tutorial with id=${id}.`,
      });
    }
  });
};

exports.findAllUser = (req, res) => {
  UserModel.findAll({}).then((data) => {
    res.send(data);
  });
};

exports.createUser = (req, res) => {
  const { age, firstName, lastName, weight, height } = req?.body;
  if (!age || !firstName || !lastName) {
    res.send(JSON.stringify({ success: false }));
  }

  UserModel.create({
    login: firstName,
    age,
    firstName,
    lastName,
    weight,
    height,
  })
    .then((user) => {
      // res.send(JSON.stringify(user));
    })
    .catch((err) => {});
  res.send("Error Has occured");
};

exports.deleteUser = (req, res) => {
  const id = req?.params?.id;
  if (!id) res.send(JSON.stringify({ success: false }));

  UserModel.destroy({
    where: { id: id },
  }).then((num) => {
    if (num == 1) {
      res.send(JSON.stringify({ success: true }));
    } else {
      res.send(JSON.stringify({ success: false }));
    }
  });
};

const {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect,
  pool,
} = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
  pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model")(sequelize, Sequelize);

module.exports = db;

const config = require("../config/db.config.js");
const ENV = "development";
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config[ENV].database,
  config[ENV].username,
  config[ENV].password,
  {
    host: config[ENV].host,
    dialect: config[ENV].dialect,
    operatorsAliases: false,

    pool: {
      max: config[ENV].pool.max,
      min: config[ENV].pool.min,
      acquire: config[ENV].pool.acquire,
      idle: config[ENV].pool.idle,
    },
  },
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize);
db.resetPasswordToken = require("../models/passwordResetToken.model.js")(
  sequelize,
);
db.ROLES = ["user", "admin"];

module.exports = db;

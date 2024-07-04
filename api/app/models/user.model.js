const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowing null values
      validate: {
        len: [2, 25],
        notEmpty: {
          msg: "First name cannot be empty", // Custom error message
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 25],
        notEmpty: {
          msg: "Last name cannot be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USER",
      validate: {
        isIn: {
          args: [["PROJECT EXECUTOR", "SUPPLIER", "USER"]], // Allowed roles
          msg: "Invalid role", // Custom error message
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    countryCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: "Country code must be an integer",
        },
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return User;
};

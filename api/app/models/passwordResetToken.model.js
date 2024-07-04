const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const PasswordResetToken = sequelize.define(
    "PasswordResetToken",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "password_reset_tokens", // define your table name
      timestamps: false, // set to false if you don't want timestamps
    },
  );

  return PasswordResetToken;
};

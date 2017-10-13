"use strict";
module.exports = (sequelize, DataTypes) => {
  var Deaths = sequelize.define(
    "Deaths",
    {
      game: DataTypes.STRING,
      amount: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  );
  return Deaths;
};

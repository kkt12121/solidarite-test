"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.board, {
        foreignKey: "boardId",
      });

      this.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  like.init(
    {
      boardId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};

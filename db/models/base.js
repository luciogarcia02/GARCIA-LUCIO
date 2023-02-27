'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Base extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Base.hasMany (models.Flag, {
        foreignKey: 'baseId',
      })
    }
  }
  Base.init({
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Base',
  });
  return Base;
};
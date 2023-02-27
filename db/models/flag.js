'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flag.belongsTo (models.Base, {
        foreignKey: 'baseId',
      })
    }
  }
  Flag.init({
    isCaptured: DataTypes.BOOLEAN,
    baseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flag',
  });
  return Flag;
};
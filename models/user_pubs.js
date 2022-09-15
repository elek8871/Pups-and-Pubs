'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_pubs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user_pubs.belongsTo(models.user)
    }
  }
  user_pubs.init({
    userId: DataTypes.INTEGER,
    pubId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_pubs',
  });
  return user_pubs;
};